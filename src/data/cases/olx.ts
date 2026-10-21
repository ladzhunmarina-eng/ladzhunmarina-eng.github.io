/*
 * OLX case study: content only, no layout.
 * Lives in src/data/cases/olx.ts and is rendered by src/pages/work/[slug].astro.
 *
 * This is the short version of the case, as laid out in the Figma "Portfolio" file.
 * Any value marked `verify: true` is a draft assumption: it shows a "verify" badge in `astro dev`
 * (never in production builds) until you confirm it.
 */

export const olxCase = {
  slug: 'olx',
  theme: 'yellow', // the fallback accent; the OLX page uses its brand palette (see tokens.css)

  seo: {
    title: 'OLX: basket and free delivery — Marina, Product Designer',
    description:
      'How a Favorites workaround became a per-seller basket on OLX, and how free delivery grew from 8.4% to 13.1% of orders.',
  },

  hero: {
    tags: ['C2C marketplace', 'Ukraine', 'Web · iOS · Android', 'A/B testing', 'User testing', 'UM UX Light Score', 'Survey'],
    eyebrow: 'OLX · Purchase & delivery',
    title: 'A basket and free delivery that make bundling easy.',
    lead:
      'Two linked initiatives on the OLX goods marketplace: a per-seller basket that makes bundling visible, and free delivery that sellers switch on in a few taps.',
    meta: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Team', value: 'PM, Engineers' },
      { label: 'Timeline', value: '2026' },
      { label: 'Status', value: 'Live for 100% of traffic' },
    ],
    focus: ['Marketplace', 'Mobile & Web', 'AI assisted'],
  },

  metrics: [
    { value: '+13.7%', label: 'bundle rate in the button test (directional)' },
    { value: '80', label: 'UMUX-Lite score, above the 70 threshold' },
    { value: '8.4% → 13.1%', label: 'orders with free delivery' },
    { value: '100%', label: 'of traffic on the new basket' },
  ],

  nav: [
    { id: 'problem', label: 'Problem' },
    { id: 'role', label: 'Role' },
    { id: 'process', label: 'Process' },
    { id: 'basket', label: 'Basket' },
    { id: 'delivery', label: 'Free delivery' },
    { id: 'learnings', label: 'Learnings' },
  ],

  problem: {
    eyebrow: 'The problem',
    title: "Buyers started bundles but didn't finish, and we had no way to bring them back.",
    lead: 'Research showed where those orders were parked instead: Favorites, used as a makeshift basket.',
    stats: [
      { value: '31K / week', label: 'bundling chances left unconverted' },
      { value: '1M+', label: 'items added to Favorites daily' },
    ],
    photoAlt: 'A buyer frowns at her phone next to a parcel and a paper shopping bag.',
    persona: {
      eyebrow: 'WHO WE DESIGNED FOR',
      name: 'The bundler',
      text: 'Finds several items from one seller, saves them across visits, then loses track before checkout.',
      points: ['Can’t see everything from one seller in one place', 'Loses track of saved items between sessions'],
      quote:
        '“I find things from different sellers, but I can’t keep track. I end up contacting them separately or just giving up.”',
    },
  },

  role: {
    eyebrow: 'My role',
    title: 'I owned the design from framing to readout.',
    bullets: [
      'Framed the problem with the PM and pulled behaviour data with the analyst',
      'Designed the basket, entry points and the free-delivery flows',
      'Prototyped in Lovable and Claude, tested unmoderated and moderated',
    ],
  },

  process: {
    eyebrow: 'Process',
    title: 'Every readout becomes the next hypothesis.',
    phases: ['Frame', 'Explore', 'Define', 'Design', 'Validate', 'Ship & learn'],
    // start and length are in pixels on the design's 960px-wide chart; the page turns them into percentages
    bars: [
      { label: 'Framing with PM & data discovery', start: 0, length: 309 },
      { label: 'Benchmark research & pattern audit', start: 80, length: 312 },
      { label: 'Hypothesis & metric design', start: 238, length: 312 },
      { label: 'Flows & behavioural patterns', start: 318, length: 312 },
      { label: 'Prototype in Lovable, Claude', start: 398, length: 390 },
      { label: 'Testing: unmoderated → moderated', start: 557, length: 312 },
      { label: 'Critique & leadership alignment', start: 638, length: 232 },
      { label: 'Handoff in Figma / Claude Code', start: 691, length: 250 },
      { label: 'Live A/B → readout', start: 797, length: 163 },
    ],
  },

  basket: {
    eyebrow: 'Initiative 01 · Basket',
    title: 'A persistent basket, grouped by seller, in place of Favorites.',

    survey: {
      title: 'People asked for a basket before we offered one.',
      question: 'Which features from other platforms would you find most useful on OLX?',
      groups: [
        {
          name: 'Non-bundlers',
          n: 112,
          rows: [
            ['Shopping cart / basket', 50],
            ['Combined delivery', 48],
            ['Price drop alerts', 38],
            ['Buy Now Pay Later', 30],
            ['In-app messaging', 13],
          ],
          note: '#1 most-wanted feature',
        },
        {
          name: 'Bundlers',
          n: 239,
          rows: [
            ['Combined delivery', 50],
            ['Shopping cart / basket', 48],
            ['Price drop alerts', 38],
            ['Buy Now Pay Later', 30],
            ['In-app messaging', 13],
          ],
          note: 'Basket and combined delivery are inseparable.',
        },
      ],
      insight:
        'Bundlers wanted delivery first, everyone else wanted a basket first. That is why the basket and free delivery became one story, not two features.',
    },

    buttonTest: {
      title: 'Test 1. Is a cart icon enough to read the button as a basket?',
      lead: 'A cheap live test on the existing bundling button, before building the real basket.',
      variants: [
        { id: 'A', name: 'Control', label: 'Add items to order', checkout: '0.044', bundle: '0.19' },
        { id: 'B', name: 'Variant', label: 'Add to basket', checkout: '0.044 (~0%)', bundle: '+7.4%' },
        { id: 'C', name: 'Variant', label: 'Add to basket', icon: 'cart', checkout: '0.045 (+2.3%)', bundle: '+13.7%', leader: true },
      ],
    },

    moderatedTest: {
      title: 'Test 2. People looked for the basket where it wasn’t.',
      method: 'Moderated 1:1 sessions',
      participants: [
        {
          id: 'P1',
          name: 'Vyacheslav',
          meta: '37 · Kyiv · Daily OLX user, Nova Poshta',
          quotes: [
            'I didn\'t notice the Add to cart button at first — I just tapped Buy now like always.',
            'I want to know how many items a seller has sold and how long they\'ve been here — that matters a lot to me.',
          ],
          behavioursLabel: 'Behaviours observed',
          behaviours: [
            'Tapped "Buy now" instinctively — missed "Add to cart" on first attempt. Noticed it only after slowing down.',
            'To message seller: went to seller profile → didn\'t find CTA → returned to product page → used "Message seller" from there.',
          ],
          insights: [
            '"Add to cart" needs stronger visual hierarchy. Seller trust signals (sales count, tenure) must be visible in Cart. "Message seller" CTA buried by "More items" noise.',
          ],
        },
        {
          id: 'P2',
          name: 'Ulyana',
          meta: '44 · Odesa · OLX since 2012, maternity leave',
          quotes: [
            'I would prefer to see Recommended for you here instead of more items from this seller.',
            'I expected to find the Cart somewhere in the seller\'s profile — it felt natural to look there.',
          ],
          behavioursLabel: 'Behaviours observed',
          behaviours: [
            'Looked for Cart in Profile section — found it there. Also looked for Cart entry inside seller profile but couldn\'t find one.',
            'Navigated to seller profile to add more items. Completed all tasks (remove, save to Favorites, add) without major issues.',
          ],
          insights: [
            'Cart entry point needed in seller profile. "Recommended for you" may outperform "More from seller" for discovery-oriented users who rarely bundle.',
          ],
        },
        {
          id: 'P3',
          name: 'Nadiya',
          meta: '48 · Kyiv · Monthly buyer, homemaker',
          quotes: [
            'I don\'t use Favourites — I open items in different tabs.',
            'I always look at the rating — before completing a purchase, I always check.',
          ],
          behavioursLabel: 'Behaviours observed',
          behaviours: [
            'Pressed "Buy now" on each item individually — "Add to basket" wasn\'t visible at her screen resolution (fixed live).',
            'Navigated to seller profile to browse more items — couldn\'t find basket there. Looked in Account and Home as fallback.',
          ],
          insights: [
            'Basket must be persistent across Ad Page, Seller Profile, Account, Home. Seller rating must be visible in basket. Bundling page validated as non-redundant.',
          ],
        },
      ],
      patterns: {
        recurring: {
          label: 'Recurring behaviours',
          items: [
            'All 3 looked for Cart in seller profile or Account — not only on Ad Page.',
            '"Buy now" is the dominant pattern — "Add to cart" missed on first attempt by 2/3 users.',
          ],
        },
        friction: {
          label: 'Critical friction points',
          items: [
            'Cart entry missing on Seller Profile — all 3 expected to find it there.',
            '"Message seller" CTA hard to find in Cart — buried by "More items from seller" section.',
          ],
        },
        implications: {
          label: 'Design implications',
          items: [
            'Add Cart entry point to Seller Profile and Account. Make "Add to cart" visually stronger vs "Buy now".',
            'Seller rating + trust signals (sales count, tenure) must be visible inside Cart. Keep bundling page in scope.',
          ],
        },
        rating: {
          label: 'Overall experience rating',
          score: '4–5',
          outOf: '/ 5',
          detail: 'All 3 participants · Vyacheslav 4.5 · Ulyana ~4+ · Nadiya 4',
        },
      },
    },

    usability: {
      title: 'Test 3. The basket works. The checkout around it does not, yet.',
      method: 'Unmoderated test in Maze.',
      imageAlt: 'The OLX web basket with two groups of items from the same seller, free-delivery progress and a Continue to payment button.',
      umux: { score: 80, label: 'UMUX-Lite score', verdict: '✓ Good usability', threshold: 70, thresholdLabel: '70 = threshold', scale: ['Poor', 'Good', 'Excellent'] },
      responses: { count: 36, label: 'Responses', countries: ['Poland', 'Germany', 'Portugal', 'Netherlands'] },
      painPoints: {
        title: 'Pain points identified',
        items: [
          { title: 'Expected a single checkout for all sellers', quote: 'I wanted to pay for all three items, but that wasn’t an initial option.' },
          { title: 'Hard to find more items from the same seller', quote: 'The confusing part was to find a list of actual items offered by the seller.' },
        ],
      },
    },

    entryTest: {
      title: 'Test 4. Where should the basket live?',
      lead: 'With the basket built, we tested three entry points live on the real product before committing to one.',
      variants: [
        { id: 'A', name: 'Basket tab replaces Favourites', alt: 'Home screen with a Basket tab in place of Favourites in the tab bar.' },
        { id: 'B', name: 'Favourites tab kept, basket icon in the top bar', alt: 'Home screen with a basket icon in the top bar and the Favourites tab kept.' },
        { id: 'C', name: 'Favourites tab kept, floating basket button', alt: 'Home screen with a floating basket button above the tab bar and the Favourites tab kept.' },
      ],
    },

    screens: {
      title: 'The basket',
      lead: [
        'As of August 2026, the feature has been launched on the Web platform for 100% of traffic.',
        'A/B/C entry points test is the next step',
      ],
      shots: [
        { alt: 'Basket with four items from one seller, a free-delivery progress bar, the subtotal and a Continue to checkout button.' },
        { alt: 'Empty basket with a Browse items button, and a row of favourites below it.' },
        { alt: 'More items from the same seller, each with an Add or Remove button, and a Go to basket bar with free-delivery progress.' },
      ],
    },
  },

  delivery: {
    eyebrow: 'Initiative 02 · Going beyond the ask',
    title: 'Free delivery, made easy to offer and easy to see.',
    seller: {
      title: 'Seller side: free delivery in a few taps.',
      text: 'A settings screen where sellers switch on free delivery and choose which carriers to cover.',
      demo: {
        title: 'Offer free delivery',
        badge: 'New',
        priceLabel: 'Minimum item price for free delivery',
        priceNote:
          'Set a minimum price for free delivery. If an item’s price is below this amount, the buyer will pay for the delivery. Leave blank to offer free delivery on all items, regardless of their price.',
        methodsLabel: 'Delivery methods included',
        methods: [
          { label: 'To the branch', checked: true },
          { label: 'Currier', checked: true },
          { label: 'Parcel locker', checked: true },
          { label: 'To Poland', checked: false },
        ],
      },
      stats: [
        { value: '29,355', label: 'listings with free delivery' },
        { value: '3,862', label: 'sellers offering free delivery' },
        {
          value: '8.4% → 13.1%',
          label: 'share of orders with free delivery',
        },
      ],
    },
    buyer: {
      pickerAfterAlt:
        'The Delivery provider screen: Ukrposhta, Nova Poshta and Meest, each with a 0 uah badge. Nova Poshta is open with four options (At the branch, free from 60 uah, selected; Currier; Parcel locker; To Poland) and City and Branch selectors.',
      pickerAlt:
        'The Delivery method screen: a list of carriers, each with a delivery time and a price. Ukrposhta, Nova Post and Meest show a 0 uah badge and Free delivery; Nova Post is selected.',
      title: 'Buyer side: the free option comes first, not last.',
      before: { label: 'Before', text: 'Delivery cost appeared late in checkout, after the carrier was already chosen.' },
      after: { label: 'After', text: 'The carrier picker shows the free option upfront, so the price is clear before choosing.' },
      results: [
        { value: '+9%', label: 'payment → delivery step, mobile' },
        { value: '+7%', label: 'payment → delivery step, desktop' },
      ],
      resultNote: 'Click-through from payment finalisation to the delivery step, new layout vs old.',
    },
  },

  learnings: {
    eyebrow: 'Learnings',
    title: 'What I would keep doing.',
    items: [
      { title: 'Look for the workaround first', text: 'The strongest evidence was not a survey answer but 1M+ Favorites adds a day. Users had already designed the feature.' },
      { title: 'Test the cheap version before the real one', text: 'A label and an icon on an existing button told us whether people read it as a basket, weeks before the basket existed.' },
      { title: 'Report directional results as directional', text: 'Calling +13.7% a signal, not a win, kept the team honest and the next test well scoped.' },
    ],
  },

  next: {
    text: 'Next: one checkout across sellers, the most common ask from usability testing.',
  },
} as const;
