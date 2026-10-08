/*
 * OLX case study: content only, no layout.
 * Lives in src/data/cases/olx.ts and is rendered by src/pages/work/[slug].astro.
 *
 * Every value marked `verify: true` (or tagged [verify] in a comment) is a DRAFT
 * assumption. Confirm it with the team / analytics or replace it with the
 * `fallback` wording before publishing.
 */

export const olxCase = {
  slug: 'olx',
  theme: 'yellow', // reuses --work-1-* tokens from tokens.css

  seo: {
    title: 'OLX: basket and free delivery — Marina, Product Designer',
    description:
      'How a Favorites workaround became a per-seller basket on OLX, and how free delivery grew from 8.4% to 13.1% of orders.',
  },

  hero: {
    tags: ['C2C marketplace', 'Ukraine', 'Web · iOS · Android', 'A/B testing', 'User testing', 'UM UX Light Score', 'Survey'],
    eyebrow: 'OLX · Purchase & delivery',
    title: 'Turning a silent Favorites into a real basket.',
    lead:
      'Two linked initiatives on the OLX goods marketplace: a per-seller basket that makes bundling visible, and free delivery that sellers switch on in a few taps.',
    meta: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Team', value: 'PM, Engineers' },
      { label: 'Timeline', value: '2026' },
      { label: 'Status', value: 'Live for 100% of traffic' },
    ],
    focus: ['Marketplace', 'Hypothesis', 'Checkout', 'UA'],
  },

  metrics: [
    { value: '+13.7%', label: 'bundle rate in the button test (directional)' },
    { value: '80', label: 'UMUX-Lite score, above the 70 threshold' },
    { value: '8.4% → 13.1%', label: 'orders with free delivery' },
    { value: '100%', label: 'of traffic on the new basket' },
  ],

  nav: [
    { id: 'context', label: 'Context' },
    { id: 'problem', label: 'Problem' },
    { id: 'role', label: 'Role' },
    { id: 'process', label: 'Process' },
    { id: 'basket', label: 'Basket' },
    { id: 'delivery', label: 'Free delivery' },
    { id: 'impact', label: 'Impact' },
    { id: 'learnings', label: 'Learnings' },
  ],

  context: {
    eyebrow: 'Context',
    title: 'Buyers were ready to bundle. OLX had nowhere for them to do it.',
    body: [
      'OLX is a classifieds marketplace for secondhand goods, part of OLX Group (Prosus), operating in Ukraine, Poland, Romania, Portugal and Bulgaria.',
      'Buyers often find several things from the same seller, but checkout handled one item at a time. Every extra item meant another chat, another delivery and another fee, so most of those orders never happened.',
    ],
  },

  problem: {
    eyebrow: 'The problem',
    title: "Favorites is acting as the basket OLX doesn't have.",
    lead:
      'Behaviour data showed people were already building baskets by hand, using a list that was never meant for it.',
    stats: [
      { value: '1M+', label: 'items added to Favorites daily' },
      { value: '33%', label: 'of saved items lead to a seller contact' },
    ],
    segments: [
      { name: 'Quick buyer', value: '43%', text: 'Already decided. Favorites is a quick stash before checkout.' },
      { name: 'Returning shopper', value: '28%', text: 'Saves to remember. Favorites is a wishlist that survives sessions.' },
      { name: 'Bundler', value: '31K / week', text: 'Has several items from one seller, but no shelf to gather them on.' },
    ],
  },

  role: {
    eyebrow: 'My role',
    title: 'I owned the design from framing to readout.',
    bullets: [
      'Framed the problem with the PM and pulled behaviour data with the analyst',
      'Ran the survey and wrote the hypothesis and metric tree',
      'Designed the basket, entry points and the free-delivery flows',
      'Prototyped in Lovable and Claude, tested unmoderated and moderated',
      'Aligned with leadership and handed off in Figma and Claude Code on Nexus',
    ],
    verify: true, // confirm which of these were yours vs shared with the PM
  },

  process: {
    eyebrow: 'Process',
    title: 'Every step ends in a test, and every readout becomes the next hypothesis.',
    phases: [
      { name: 'Frame', items: ['Problem framing with PM', 'Talk2Data behaviour data', 'Stakeholder interviews'] },
      { name: 'Explore', items: ['Competitor patterns', 'Nexus component audit', 'Usability heuristics'] },
      { name: 'Define', items: ['Hypothesis statement', 'Metric tree', 'Guardrails'] },
      { name: 'Design', items: ['Behavioural patterns', 'CJM & edge-case flows', 'Prototype in Lovable'] },
      { name: 'Validate', items: ['Unmoderated test + UMUX', 'Moderated 1:1 sessions', 'Design critique'] },
      { name: 'Ship & learn', items: ['Hi-fi in Figma / Claude on Nexus', 'Live experiment', 'Ship, iterate or kill'] },
    ],
    tools: ['NotebookLM', 'Claude', 'Figma', 'Codex', 'Enterpret', 'VS Code', 'Maze', 'Lovable'],
  },

  basket: {
    eyebrow: 'Initiative 01 · Basket',
    title: 'A persistent basket, grouped by seller, in place of Favorites.',
    summary: {
      objective: 'Turn a silent user workaround into a visible, persistent basket.',
      challenge:
        'Prove the basket grows bundling instead of cannibalising Favorites, and make room for bundles without slowing browsing.',
      solution:
        'A per-seller basket in the tab bar that groups items by seller, shows free-delivery progress and nudges buyers to finish multi-item orders.',
    },

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

    hypothesis: {
      if: 'we give buyers a persistent, per-seller basket that makes their existing bundling visible while browsing,',
      because:
        "they're already faking one out of Favorites (1M+ items added daily, 33% lead to a seller contact, ~31K bundling chances a week going unconverted),",
      then: "bundle rate and basket value will increase, without reducing Favorites' use as a wishlist.",
      guardrail: 'Favorites adds per user must not drop.',
    },

    buttonTest: {
      title: 'Test 1. Is a cart icon enough to read the button as a basket?',
      lead: 'A cheap live test on the existing bundling button, before building the real basket.',
      method: { text: 'Live A/B/C on production traffic, ~2 weeks, ~30–40K users per variant.', verify: true, fallback: 'Live A/B/C test on production traffic.' },
      metricNote: { text: 'Bundle rate = share of orders with 2+ items from one seller.', verify: true },
      variants: [
        { id: 'A', name: 'Control', label: 'Add items to order', checkout: '0.044', bundle: '0.19' },
        { id: 'B', name: 'Variant', label: 'Add to basket', checkout: '0.044 (~0%)', bundle: '+7.4%' },
        { id: 'C', name: 'Variant', label: 'Add to basket + cart icon', checkout: '0.045 (+2.3%)', bundle: '+13.7%', leader: true },
      ],
      readout:
        'C led on both metrics. The lift is directional, not yet statistically significant, so we treated it as a signal to build, not as a win to report.',
    },

    usability: {
      title: 'Test 2. The basket works. The checkout around it does not, yet.',
      method: { text: 'Unmoderated test in Maze, n ≈ 15–20.', verify: true, fallback: 'Unmoderated usability test in Maze.' },
      umux: { score: 80, threshold: 70, verdict: 'Good usability' },
      painPoints: [
        { title: 'Expected one checkout for all sellers', quote: 'I wanted to pay for all three items, but that wasn’t an initial option.' },
        { title: 'Hard to find more items from the same seller', quote: 'The confusing part was to find a list of actual items offered by the seller.' },
      ],
      followUp: 'Both points went into the next iteration: a "More from this seller" shelf inside the basket.',
    },

    decisions: {
      title: 'What we chose, and what we gave up.',
      verify: true, // replace with the trade-offs you actually discussed
      items: [
        {
          chose: 'One basket per seller, not one global cart',
          over: 'A single cart across sellers',
          why: 'OLX has no shared checkout across sellers, so a global cart would promise something checkout can’t deliver.',
        },
        {
          chose: 'Basket replaces Favorites in the tab bar',
          over: 'A sixth tab next to Favorites',
          why: 'Two lookalike “saved” tabs confused people, and the tab bar was already full.',
        },
        {
          chose: 'Free-delivery progress inside the basket',
          over: 'A separate delivery promo',
          why: 'It gives buyers a reason to add one more item from the same seller, which is the behaviour we wanted.',
        },
      ],
    },

    entryTest: {
      title: 'Test 3. Where should the basket live?',
      lead: 'With the basket built, we tested three entry points live before committing to one.',
      variants: [
        { id: 'A', name: 'Basket tab replaces Favourites' },
        { id: 'B', name: 'Favourites tab kept, basket inside it' },
        { id: 'C', name: 'Favourites tab kept, floating basket button' },
      ],
      verify: true, // confirm the variant descriptions
    },

    screens: {
      title: 'The basket',
      caption: 'Basket with free-delivery progress, empty state with Favourites, and more items from the same seller.',
    },

    status:
      'Live on 50% of web traffic since August 2026. We are measuring bundle rate and basket value, with Favorites adds as the guardrail. The decision to ship, iterate or roll back comes after the readout.',
  },

  delivery: {
    eyebrow: 'Initiative 02 · Going beyond the ask',
    title: 'Free delivery, made easy to offer and easy to see.',
    summary: {
      objective: 'Make it simple for sellers to cover delivery and for buyers to pick a carrier at checkout.',
      challenge: 'Give buyers real value and raise order value, without adding friction or cost on the seller side.',
      solution:
        'Redesigned the seller’s free-delivery settings and the buyer’s carrier picker, then used platforms that hadn’t shipped yet as a natural control group.',
    },
    seller: {
      title: 'Seller side: free delivery in a few taps.',
      text: 'A settings screen where sellers switch on free delivery and choose which carriers to cover.',
      stats: [
        { value: '29,355', label: 'listings with free delivery' },
        // [verify] 3,862 has no label on the old page. Likely: sellers who switched it on. Remove if unsure.
        { value: '3,862', label: 'sellers offering free delivery', verify: true },
        {
          value: '8.4% → 13.1%',
          label: 'share of orders with free delivery',
          note: { text: 'First ~4 weeks after launch, vs platforms where it had not shipped yet.', verify: true },
        },
      ],
    },
    buyer: {
      title: 'Buyer side: the free option comes first, not last.',
      before: { label: 'Before', text: 'Delivery cost appeared late in checkout, after the carrier was already chosen.' },
      after: { label: 'After', text: 'The carrier picker shows the free option upfront, so the price is clear before choosing.' },
      results: [
        { value: '+9%', label: 'payment → delivery step, mobile', verify: true },
        { value: '+7%', label: 'payment → delivery step, desktop', verify: true },
      ],
      resultNote: 'Click-through from payment finalisation to the delivery step, new layout vs old.',
    },
  },

  impact: {
    eyebrow: 'Impact',
    title: 'More multi-item orders for buyers, more value per order for OLX.',
    columns: [
      {
        name: 'Buyers',
        rows: [
          ['+13.7%', 'bundle rate with the basket button (directional)'],
          ['80', 'UMUX-Lite on the basket flow'],
          ['+9% / +7%', 'reach the delivery step, mobile / desktop'],
        ],
      },
      {
        name: 'Business',
        rows: [
          ['8.4% → 13.1%', 'orders with free delivery'],
          ['29,355', 'listings offering free delivery'],
          ['50%', 'web traffic on the new basket, readout pending'],
        ],
      },
    ],
    method:
      'Bundle and checkout numbers come from live A/B/C tests; delivery numbers compare launched and not-yet-launched platforms. Absolute volumes are rounded or omitted under NDA.',
  },

  learnings: {
    eyebrow: 'Learnings',
    title: 'What I would keep doing.',
    items: [
      { title: 'Look for the workaround first', text: 'The strongest evidence was not a survey answer but 1M+ Favorites adds a day. Users had already designed the feature.' },
      { title: 'Test the cheap version before the real one', text: 'A label and an icon on an existing button told us whether people read it as a basket, weeks before the basket existed.' },
      { title: 'Report directional results as directional', text: 'Calling +13.7% a signal, not a win, kept the team honest and the next test well scoped.' },
      { title: 'Features that share a user need share a story', text: 'Basket and free delivery looked like two projects. The survey showed they were one.' },
    ],
  },

  next: {
    text: 'Next: one checkout across sellers, the most common ask from usability testing.',
  },
} as const;
