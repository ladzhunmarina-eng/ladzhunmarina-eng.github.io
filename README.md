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
    Experience.astro       Experience and Education columns
    ContactCard.astro      the card that opens from every "Contact" trigger
    Button.astro, SocialLinks.astro
    Footer.astro           "Say Hi!", contact pills, copyright and social buttons
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
- **Experience and Education:** two 576px columns from 1024px wide (stacked below): the roles on the left; the degree and two certificates, each with its coloured card, on the right. Content lives in `experience` and `education` in `src/data/content.ts`. The endorsement notes and the Wall of Love carousel are in git history (commits `9452a91` and `59bfb44`).
- **Footer:** black, "Say Hi!" over three pill buttons (Email opens a mail draft, Telegram and WhatsApp open the chats), then the copyright line and the round GitHub / LinkedIn / Dribbble buttons. A yellow round arrow in the top-right corner of the footer scrolls back to the top (on phones it sits centred at the bottom). 535px tall at 1440px wide, as in the design.
- **Motion:** the marquee, the hand wave and the contact card respect `prefers-reduced-motion`.
- **Fonts** (Bricolage Grotesque, Inter, Gantari) are self-hosted through `@fontsource`.

## Still to fill in

- A real GitHub link (`src/components/SocialLinks.astro`; Dribbble and LinkedIn are set).
- The CV file or link (the CV button in `src/components/Hero.astro`).
- Case study URLs (each case in `src/data/content.ts` points to `#`) and an About section.
- A real favicon and a social preview image.

## Deploy

The output is static, so any static host works. On [Vercel](https://vercel.com): import this repository; the Astro preset is detected automatically, with build command `npm run build` and output directory `dist`.
