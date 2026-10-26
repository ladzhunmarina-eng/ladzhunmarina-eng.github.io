// Records the self-playing PhoneTour prototypes as frame-exact videos.
// Time is virtual: setTimeout is replaced by a queue that fires each timer at its exact time (letting the awaits after it
// settle before the next), and every CSS animation is paused and stepped by hand,
// so each frame lands exactly 1/FPS later however long the screenshot takes. One full loop is recorded (the second,
// so the opening crossfade from the last screen is there and the video loops without a jump).
//
// Usage: node scripts/capture-prototypes.mjs [flow ...]   (needs the dev server on :4321 and src/pages/capture-tmp/[d].astro)
// Writes <scratch>/<flow>.mp4 (lossless-ish master); encode with scripts/encode-video.sh.

import { chromium } from 'playwright';
import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const FPS = 30;
const DT = 1000 / FPS;
const OUT = process.env.OUT ?? 'recordings';
const flows = process.argv.slice(2).length ? process.argv.slice(2) : ['onboarding', 'tracker', 'stats', 'clients', 'watch'];

// The loop's length, from the same timings PhoneTour's script sleeps for
function cycleMs(tour) {
  let t = 500 + 1000;
  tour.forEach((steps, i) => {
    t += (i === 0 ? 250 : 450) + 150;
    let at = 0;
    for (const s of steps) {
      if ('move' in s) t += 600;
      else if ('tap' in s) t += 600 + 120 + 260;
      else if ('wait' in s) t += s.wait;
      else if ('pop' in s) t += s.for + 250;
      else if ('scroll' in s) {
        t += Math.max(500, Math.abs(s.scroll - at) * 1.5);
        at = s.scroll;
      } else if ('count' in s) t += (s.secs + 1) * 1000;
      else t += s.text.length * 45 + 200;
    }
  });
  return t;
}

const browser = await chromium.launch();
mkdirSync(OUT, { recursive: true });

for (const flow of flows) {
  const context = await browser.newContext({ viewport: { width: 430, height: 900 }, deviceScaleFactor: 2, reducedMotion: 'no-preference' });
  const page = await context.newPage();
  await page.addInitScript(() => {
    const realTimeout = window.setTimeout.bind(window);
    const queue = [];
    let now = 0;
    let next = 1;
    window.setTimeout = (fn, ms = 0, ...args) => {
      queue.push({ id: next, ms, at: now + Math.max(0, Number(ms) || 0), fn: () => fn(...args) });
      return next++;
    };
    window.clearTimeout = (id) => {
      const i = queue.findIndex((t) => t.id === id);
      if (i >= 0) queue.splice(i, 1);
    };
    window.__started = () => queue.some((t) => t.ms === 500); // PhoneTour's first sleep
    window.__advanceTo = async (target) => {
      for (;;) {
        queue.sort((a, b) => a.at - b.at || a.id - b.id);
        if (!queue.length || queue[0].at > target) break;
        const timer = queue.shift();
        now = timer.at;
        timer.fn();
        await new Promise((resolve) => realTimeout(resolve, 0)); // the awaits chained on this timer run before the next fires
      }
      now = target;
    };
  });
  await page.goto(`http://localhost:4321/capture-tmp/${flow}`, { waitUntil: 'load' });
  await page.evaluate(() => Promise.all([...document.images].map((img) => (img.loading = 'eager', img.decode().catch(() => {})))));
  await page.evaluate(() => document.fonts.ready);
  // Time stays at 0 until the IntersectionObserver has started the tour (its first sleep is in the queue), so the loop
  // starts at exactly 0 and every loop boundary falls on the same side of a frame
  await page.waitForFunction(() => window.__started());
  await page.waitForTimeout(500);

  const tour = JSON.parse(await page.getAttribute('[data-onboarding]', 'data-tour'));
  const C = cycleMs(tour);
  const frames = Math.round(C / DT);
  const dt = C / frames; // a hair off 1/FPS so the loop is a whole number of frames

  // Steps every CSS animation and transition by dt. Finite ones start at 0 when first seen; endless ones (the sleeping
  // baby) are slightly stretched so a whole number of their 3s beats fits the loop and the last frame meets the first.
  await page.evaluate(({ C }) => {
    const beat = 3000;
    const stretch = (Math.max(1, Math.round(C / beat)) * beat) / C;
    window.__T = 0;
    window.__step = (dt) => {
      window.__T += dt;
      for (const a of document.getAnimations()) {
        const end = a.effect.getComputedTiming().endTime;
        if (end === Infinity) {
          a.pause();
          a.currentTime = window.__T * stretch;
          continue;
        }
        if (a.__t === undefined) {
          a.pause();
          a.__t = 0;
        } else a.__t += dt;
        if (a.__t >= end) a.finish();
        else a.currentTime = a.__t;
      }
    };
  }, { C });

  let frame = 0;
  const tick = async () => {
    frame += 1;
    await page.evaluate(async ({ to, dt }) => {
      await window.__advanceTo(to);
      window.__step(dt);
    }, { to: Math.round(frame * dt * 1000) / 1000, dt });
  };

  // First loop: played through unrecorded
  for (let i = 0; i < frames; i += 1) await tick();
  // Bring the loop start onto a frame boundary and restart the endless clock there, so it reads 0 on frame 0
  await page.evaluate(() => (window.__T = 0));

  const box = await page.locator('.onb__phone').boundingBox();
  const clip = { x: Math.round(box.x), y: Math.round(box.y), width: Math.round(box.width), height: Math.round(box.height) };
  const dir = join(OUT, `${flow}-frames`);
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });

  // Second loop, from its start to one step before the next. The file order is turned so the video opens 450ms in,
  // once the first screen has faded fully in: that frame is the poster, and the loop is still unbroken.
  const lead = Math.round(450 / dt);
  for (let i = 0; i < frames; i += 1) {
    const n = (i - lead + frames) % frames;
    await page.screenshot({ path: join(dir, `${String(n).padStart(5, '0')}.png`), clip, animations: 'allow', caret: 'hide' });
    await tick();
  }
  // One more: should equal the loop's start (file frames-lead) if the loop is seamless
  await page.screenshot({ path: join(OUT, `${flow}-check-next.png`), clip, animations: 'allow', caret: 'hide' });

  const master = join(OUT, `${flow}.mp4`);
  execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-framerate', String(FPS), '-i', join(dir, '%05d.png'),
    '-c:v', 'libx264', '-crf', '10', '-preset', 'slow', '-pix_fmt', 'yuv420p', master]);
  console.log(`${flow}: ${(C / 1000).toFixed(2)}s, ${frames} frames, ${clip.width * 2}x${clip.height * 2}px → ${master}`);
  await context.close();
}

await browser.close();
