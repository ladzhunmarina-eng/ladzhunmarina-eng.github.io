# Portfolio

A static product design portfolio, built from a Figma design with [Astro](https://astro.build), plain CSS custom properties and no UI framework.

## Run it

Needs Node 22.12 or newer.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve the built site locally
```

## Project structure

```
src/
  pages/index.astro        the homepage; assembles the sections
  layouts/Layout.astro     <head>, header, footer, contact card; reused by future pages
  components/
    Header.astro           floating nav pill, wordmark, Contact me, phone menu
    Hero.astro             two-tone heading, buttons, social icons
    Marquee.astro          the scrolling skills strip
    WorkCard.astro         one Featured Work panel (stacks with CSS sticky on desktop)
    Experience.astro       roles, plus the colleague endorsements pinned beside them
    ContactCard.astro      the card that opens from every "Contact" trigger
    Button.astro, SocialLinks.astro, Footer.astro
  data/
    content.ts             work cases, testimonials, experience, marquee labels
    contact.ts             email, Telegram, WhatsApp shown in the contact card
  styles/
    tokens.css             every colour, size, spacing, radius and breakpoint override
    global.css             reset and base styles
  assets/                  images and SVG icons exported from Figma
```

## Editing content

- **Work cases, testimonials, experience, marquee words:** `src/data/content.ts`.
- **Contact details:** `src/data/contact.ts` (the email is what the "Email" row copies).
- **Colours, type scale, spacing, radii:** `src/styles/tokens.css`. Components use these tokens, not hard-coded values.

## Design notes

- **Featured Work** panels are stacked with pure CSS `position: sticky` (no scroll listeners). They only stack when the window is at least 1025px wide and 600px tall; otherwise they are plain cards. Nothing above the panels may set `overflow` or a transform, or sticky silently stops working.
- **Header:** one translucent, blurred pill. The wordmark and Contact me fade out after 40px of scroll. The current section's link turns yellow.
- **Contact card:** opens from every `href="#contact"` link, closes with the button, Escape or a click outside.
- **Experience:** two columns from 1280px wide: the roles on the left, three endorsement cards on the right at slight angles with a soft shadow. The cards drift about 12% faster than the text while you scroll (a small script, off for `prefers-reduced-motion` and on narrower screens, where the cards simply follow the roles). The carousel that used to be the Wall of Love section is in the git history (commit `59bfb44`).
- **Motion:** the marquee, the hand wave and the contact card respect `prefers-reduced-motion`.
- **Fonts** (Bricolage Grotesque, Inter, Gantari) are self-hosted through `@fontsource`.

## Still to fill in

- A real GitHub link (`src/components/SocialLinks.astro`; Dribbble and LinkedIn are set).
- The CV file or link (the CV button in `src/components/Hero.astro`).
- Case study URLs (each case in `src/data/content.ts` points to `#`) and an About section.
- A real favicon and a social preview image.

## Deploy

The output is static, so any static host works. On [Vercel](https://vercel.com): import this repository; the Astro preset is detected automatically, with build command `npm run build` and output directory `dist`.
