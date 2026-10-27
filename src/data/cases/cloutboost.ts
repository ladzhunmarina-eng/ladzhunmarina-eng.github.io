/*
 * Cloutboost case study: content only, no layout.
 * Lives in src/data/cases/cloutboost.ts and is rendered by src/pages/work/cloutboost.astro.
 *
 * The copy follows the "Cloutboost" page of the Figma file (node 76:101673): About, Objective / Challenges / Solution and the persona; the flows after it are played from the Figma's prototype screens.
 */

export const cloutboostCase = {
  slug: 'cloutboost',
  theme: 'cream', // the fallback accent; the page uses its brand palette (see tokens.css)

  seo: {
    title: 'Gaming Influencer Marketing Platform — Marina, Product Designer',
    description:
      'A web platform where game publishers and Cloutboost’s campaign team find the right YouTube and Twitch creators, run outreach, and see what each creator delivered for the money.',
  },

  hero: {
    tags: ['Web app', 'Creator discovery', 'Filters and scores', 'Outreach', 'Comments', 'Campaign reports'],
    areasLabel: 'My scope',
    eyebrow: 'Influencer marketing · Gaming',
    title: 'Gaming Influencer\nMarketing Platform',
    lead: 'A web platform where game publishers and Cloutboost’s campaign team find the right YouTube and Twitch creators, run outreach, and see what each creator delivered for the money.',
    meta: [
      { label: 'Industry', value: 'Influencer marketing · Gaming' },
      { label: 'Model', value: 'B2B SaaS' },
      { label: 'Country', value: 'USA' },
      { label: 'Year', value: '2021' },
    ],
    focus: [] as string[],
    image: 'The Cloutboost campaign report: general info, key numbers, campaign performance over time, views and true reach by creator, engagement and CPM, and a table of every video with its price and views.',
  },

  nav: [
    { id: 'goal', label: 'Goal' },
    { id: 'persona', label: 'Personas' },
    { id: 'flow', label: 'Key flow' },
    { id: 'campaign', label: 'Campaigns' },
    { id: 'selected', label: 'Selected' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'reports', label: 'Reports' },
    { id: 'system', label: 'Design system' },
  ],

  goal: {
    eyebrow: 'Goal and challenge',
    title: 'Finding the right creators, and proving what they delivered.',
    lead: 'Game publishers pay creators for reach. Before a campaign they need channels that fit their game; after it, numbers that justify the spend. Without a tool, both live in spreadsheets, inboxes and chats.',
    // the audience the campaigns reach (src/assets/images/cb-gamers.jpg), under the cards
    image: 'Three gamers in Cloutboost’s colours: one at a keyboard with a headset, one in a VR headset, one with a controller.',
    cards: [
      {
        icon: 'target' as const,
        title: 'Business goal',
        text: 'Turn Cloutboost’s creator database and campaign process into one product: a workspace for its campaign managers, a window into the campaign for clients, and a subscription tool for publishers who run campaigns themselves.',
      },
      {
        icon: 'scale' as const,
        title: 'Problem',
        text: 'Follower counts don’t show whether a channel fits a game. Outreach to dozens of creators runs through personal inboxes. Results are collected by hand across YouTube and Twitch, and reports go stale soon after launch.',
      },
      {
        icon: 'check' as const,
        title: 'Solution',
        text: 'Discovery built on gaming-specific signals: shorts ratio, upload frequency, recent activity and channel scores. Outreach sent from the platform, with every thread tied to its campaign. A campaign report that refreshes from platform data and shows views, true reach, engagement, CPM and cost per video.',
      },
    ],
  },

  persona: {
    eyebrow: 'User personas',
    title: 'Two sides of every campaign: the marketer who pays for reach, and the creator who brings it.',
    cards: [
      {
        photo: 'anna',
        name: 'Anna Williams',
        role: 'Influencer Marketing Manager',
        facts: [
          { label: 'Age', value: '29' },
          { label: 'Location', value: 'Berlin, Germany' },
        ],
        biography:
          'Anna leads influencer marketing at a mid-size game publisher. Before a launch she builds a shortlist of channels whose audience plays games like hers. After it, she has to show leadership what the budget bought.',
        groups: [
          {
            title: 'Goals',
            items: ['Build a relevant creator shortlist fast', 'Keep outreach, comments and approvals in one place', 'Show results per creator in numbers leadership trusts'],
          },
          {
            title: 'Pain points',
            items: ['Follower counts say nothing about fit with the game', 'Follow-ups and replies tracked by hand', 'Reports assembled manually and outdated within weeks'],
          },
        ],
        quote: '“I need to quickly find the right influencers who match my game’s audience and prove their impact with clear data.”',
        photoAlt: 'Anna Williams, influencer marketing manager, smiling in front of an orange wall and a window',
      },
      {
        // the photo is src/assets/images/cb-persona-creator.png; without it the card falls back to the initials
        photo: 'creator',
        initials: 'JM',
        name: 'Jake Morrison',
        role: 'Gaming creator, YouTube + Twitch',
        facts: [
          { label: 'Age', value: '23' },
          { label: 'Location', value: 'Manchester, UK' },
        ],
        biography:
          'Jake streams indie roguelikes and shooters to about 40k subscribers. Publishers send him keys every week, mostly through email threads he reads on his phone between streams. He tries most of what lands in his inbox and makes videos about the games he enjoys.',
        groups: [
          {
            title: 'Goals',
            items: ['Get a key in a few taps, right from the email or DM', 'Know upfront whether a video is expected in return', 'Find the key again when he’s ready to play'],
          },
          {
            title: 'Pain points',
            items: ['Has to reply to an email and wait days for the actual key', '“Free key” offers that quietly turn into content obligations', 'Console codes that won’t activate on his account region'],
          },
        ],
        quote: '“Write to me like you’ve seen my channel, put the key in that first email, and tell me upfront if you expect a video.”',
        photoAlt: 'Jake Morrison, gaming creator, at his streaming desk',
      },
    ],
  },

  // Finding influencers, played by itself in a desktop window (FindInfluencersDemo)
  flow: {
    eyebrow: 'Key flow',
    title: 'From a hundred channels to a shortlist in a few clicks.',
    lead: 'Search by name with suggestions as you type, pick creators straight from the results and add them to a list or a campaign, then narrow the database with filters built for gaming channels.',
    alt: 'Find influencers: a table of a hundred creators with their subscribers, views, engagement, true reach, language and country.',
  },

  // Creating a campaign, played by itself in a desktop window (CreateCampaignDemo)
  campaign: {
    eyebrow: 'Campaigns',
    title: 'A new campaign in one dialog.',
    lead: 'From the campaigns list, one button opens everything a campaign needs: its name, the client and their emails, the product, platform, type and launch date, and who it is shared with.',
    alt: 'Campaigns: a list of campaigns with their client, product, manager, platform, launch date, type and status, and a button to create a new one.',
  },

  // The creators picked for a campaign and one creator's channel, played by itself in a desktop window (SelectedInfluencersDemo)
  selected: {
    eyebrow: 'Selected creators',
    title: 'Every creator in the campaign, one click from their channel.',
    lead: 'The campaign’s shortlist keeps approval, content format, price and CPM in one table. A name opens the channel: what it is about, the games and genres it covers, its tags, and the YouTube and Twitch numbers with their scores.',
    alt: 'Selected (40): the campaign’s creators with their approval, content format, internal price, price, internal CPM and CPM, and totals.',
  },

  // Emailing the creators picked in the campaign, played by itself in a desktop window (EngagementDemo)
  engagement: {
    eyebrow: 'Engagement',
    title: 'Email the creators you pick, now or on schedule.',
    lead: 'Tick creators in the campaign’s engagement table and write to all of them at once from a connected mailbox. Creators without an address are skipped and counted, and the send can go out straight away or start at a set time.',
    alt: 'Engagement (34): the campaign’s creators with their contract status, email status, key sent, key sent date and sequence.',
  },

  // The campaign report, from building to the numbers, played by itself in a desktop window (ReportsDemo)
  reports: {
    eyebrow: 'Reports',
    title: 'A campaign report that builds itself.',
    lead: 'The Report tab gathers the campaign’s numbers from YouTube and Twitch while you wait a few seconds, then lays them out: reach and views, performance over time, true reach, engagement and CPM per creator, and what each video cost.',
    alt: 'Engagement (34): the campaign’s creators with their contract status, email status, key sent, key sent date and sequence, and the Report tab.',
  },

  // The design system the screens are built from, as a collage of its Figma pages (DesignSystemCollage)
  system: {
    eyebrow: 'Design system',
    title: 'One set of parts behind every screen.',
    lead: 'Tokens for space, radius and colour, and components built on them: a button with every emphasis, size and state, and select and date fields that share one input architecture. The flows above are put together from these parts.',
    alt: 'The design system: layout and colour token tables, select and date fields in their states, a grid of button states, and the Button’s properties panel with emphasis, size, state, label and icons.',
  },
};
