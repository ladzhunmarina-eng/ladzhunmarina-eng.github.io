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
  pages/work/[slug].astro  a case study page (/work/olx), rendered from src/data/cases/<slug>.ts
  layouts/Layout.astro     <head>, header, footer, contact card; reused by future pages
  components/
    Header.astro           floating nav pill, wordmark, Contact me, phone menu
    Hero.astro             two-tone heading, buttons, social icons
    Marquee.astro          the scrolling skills strip
    WorkCard.astro         one Featured Work panel (stacks with CSS sticky on desktop)
    Experience.astro       Experience and Education columns
    Stack.astro            "Design stack and craft": a sentence in which each tool is a pill with its logo
    Reviews.astro          "Wall of Love": one large colleague quote, two shorter ones, a LinkedIn button
    ContactCard.astro      the card that opens from every "Contact" trigger
    case/                  the building blocks of a case study page:
                             CaseBack, CaseHero, CaseCover, MetricStrip, CaseNav (sticky "On this page"),
                             Section, SubSection, StatGrid, CasePhoto, Persona, ProcessChart (Gantt), SurveyBars,
                             VariantCompare, ParticipantCards (scrolls sideways), MazeResults, EntryPoints, BasketScreens, ResultSparks, FlowSteps, NoteCards, RoleGroups, PersonaProfile, DecisionBlock, PartsList, VisualsMosaic (the seven from FlowSteps on are used by the ERMA case), NextCase (the preview of the next case at the end of a case page), DeliveryDemo (interactive seller-settings card),
                             BeforeAfter, LearningCards, plus ImageSlot (labelled placeholder) and Verify (dev-only badge)
    Button.astro, SocialLinks.astro
    Footer.astro           "Say Hi!", contact pills, copyright and social buttons
  data/
    content.ts             Featured Work cards, experience, education, marquee labels
    cases/olx.ts           the OLX case study text (the short version from the Figma; content only, no layout)
    cases/index.ts         the list of case studies the site builds pages for
    contact.ts             email, Telegram, WhatsApp shown in the contact card
  styles/
    tokens.css             every colour, size, spacing, radius and breakpoint override
    global.css             reset and base styles
  assets/                  images and SVG icons exported from Figma
```

## Editing content

- **Featured Work cards, experience, education, marquee words:** `src/data/content.ts`.
- **A case study's text:** `src/data/cases/<slug>.ts`. The page layout is the same for every case.
- **Contact details:** `src/data/contact.ts` (the email is what the "Email" row copies).
- **Colours, type scale, spacing, radii:** `src/styles/tokens.css`. Components use these tokens, not hard-coded values.

## Design notes

- **Featured Work** cards follow the design's Default and Hover states: a white "View case ↗" pill under the description (text block centred beside the image, no tag row) (always visible, so touch screens get it) and the screens at 91% size. On hover or keyboard focus the pill turns black and the screens grow to full size. The whole card is one link.
- **Featured Work** panels are stacked with pure CSS `position: sticky` (no scroll listeners). They only stack when the window is at least 1025px wide and 600px tall; otherwise they are plain cards. Nothing above the panels may set `overflow` or a transform, or sticky silently stops working.
- **Header:** one translucent, blurred pill. The wordmark and Contact me fade out after 40px of scroll. The current section's link turns yellow.
- **Contact card:** opens from every `href="#contact"` link, closes with the button, Escape or a click outside.
- **Experience and Education:** two 576px columns from 1024px wide (stacked below): the roles on the left; the degree and two certificates, each with its coloured card, on the right. Content lives in `experience` and `education` in `src/data/content.ts`. The endorsement notes and the Wall of Love carousel are in git history (commits `9452a91` and `59bfb44`).
- **Footer:** black, "Say Hi!" (the letters of "Hi!" drop in one after another when the footer scrolls into view, bounce and settle; hovering the heading drops them again; off for reduced motion) over three pill buttons (Email opens a mail draft, Telegram and WhatsApp open the chats), then the copyright line and the round GitHub / LinkedIn / Dribbble buttons. A yellow round arrow in the top-right corner of the footer scrolls back to the top (on phones it sits centred at the bottom). 535px tall at 1440px wide, as in the design.
- **Wall of Love:** a tinted band after Experience (its heading is only for screen readers). The quotes are passages taken word for word from the full recommendations (`reviews` in `content.ts`); the button opens the LinkedIn profile.
- **Design stack:** one centred sentence, one clause per line (research, design, prototype, ship), in which every tool is a soft pill with its logo (`tools` and `stack` in `content.ts`; logos in `src/assets/tools/`). The pills settle in one after another the first time it scrolls into view (off for reduced motion); the heading is only for screen readers.
- **Motion:** the marquee, the hand wave and the contact card respect `prefers-reduced-motion`.
- **Font:** DM Sans (one variable file, weight and optical-size axes) for everything, self-hosted through `@fontsource-variable/dm-sans`. The font tokens are at the top of `tokens.css`.
- **Prototype font:** the seller-settings card in the OLX case is set in Inter (`@fontsource-variable/inter`), as in the mockups, scoped to that component through `--form-font`.
- **Type system** (all in `tokens.css`): text sizes 12 / 14 / 16 / 18 / 20 / 24 / 32 and fluid display sizes, nothing in between; three weights (400 text, 500 interface labels, 700 every heading and number); four line-height ratios (`--lh-tight` 1.2, `--lh-snug` 1.45, `--lh-lead` 1.5, `--lh-body` 1.55); running text is never letter-spaced, 36px+ headings use `--ls-display`, 20-32px headings `--ls-heading`, small uppercase labels `--ls-eyebrow`.

## Case study pages

- **Add a case:** write `src/data/cases/<slug>.ts` in the shape of `olx.ts`, add it to `src/data/cases/index.ts`, and point its Featured Work card (`href` in `content.ts`) at `/work/<slug>`. The page, the sticky navigation and the static path are generated.
- **Colours:** each case page picks a palette with `data-case-palette` (see the bottom of `tokens.css`). By default it is the case's `theme` (`yellow`, `cream`, `lilac`, `mint`), the same `--work-N-*` colours its Featured Work card uses. A case with its own brand can have a brand palette instead: the OLX case uses OLX's colours (deep teal, cyan, grey-blue page, `--olx-*` tokens) via `brandPalettes` in `src/pages/work/[slug].astro`.
- **Draft markers:** any item with `verify: true` shows a small dashed "verify" badge while you run `npm run dev`. Production builds (`npm run build`) never contain it, but they do show the draft wording itself, so confirm those values (or switch to their `fallback` text) before publishing.
- **Images:** screenshots are labelled placeholders (`ImageSlot`). Replace one with an `<Image>` when the file exists.
- **Navigation:** the left column ("On this page") is sticky from 1024px wide and marks the section being read, like the header's active link. Below 1024px it stacks above the content as chips.

## Still to fill in

- A real GitHub link (`src/components/SocialLinks.astro`; Dribbble and LinkedIn are set).
- The CV file or link (the CV button in `src/components/Hero.astro`).
- Case study pages for the other three cases (they still point to `#` in `src/data/content.ts`) and an About section.
- A real favicon and a social preview image.

## Deploy

The output is static, so any static host works. On [Vercel](https://vercel.com): import this repository; the Astro preset is detected automatically, with build command `npm run build` and output directory `dist`.
