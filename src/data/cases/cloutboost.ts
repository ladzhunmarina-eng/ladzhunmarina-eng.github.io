/*
 * Cloutboost case study: content only, no layout.
 * Lives in src/data/cases/cloutboost.ts and is rendered by src/pages/work/cloutboost.astro.
 *
 * The copy follows the "Cloutboost" page of the Figma file (node 76:101673): About, Objective / Challenges / Solution, the persona and the Visuals.
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
      { label: 'Model', value: 'B2B SaaS + managed service' },
      { label: 'Country', value: 'USA' },
      { label: 'Year', value: '2021' },
    ],
    focus: [] as string[],
    image: 'The Cloutboost campaign report: general info, key numbers, campaign performance over time, views and true reach by creator, engagement and CPM, and a table of every video with its price and views.',
  },

  nav: [
    { id: 'goal', label: 'Goal' },
    { id: 'persona', label: 'Persona' },
    { id: 'visuals', label: 'Visuals' },
  ],

  goal: {
    eyebrow: 'Goal and challenge',
    title: 'Finding the right creators, and proving what they delivered.',
    lead: 'Game publishers pay creators for reach. Before a campaign they need channels that fit their game; after it, numbers that justify the spend. Without a tool, both live in spreadsheets, inboxes and chats.',
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
    eyebrow: 'User persona',
    title: 'The marketer who recruits creators and has to prove they work.',
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
    ],
    alsoUsedBy: 'Cloutboost campaign managers, who run outreach and prepare reports for clients.',
  },

  /*
   * The screens in the order of the work: find creators, reach out, talk it over, report. Each group spans part of a
   * 12-column row (Reach out and Collaborate share one), and its tiles span part of the group's own 12 columns.
   */
  visuals: {
    eyebrow: 'Visuals',
    title: 'From shortlist to report, in one place.',
    groups: [
      {
        title: 'Discover',
        caption: 'Find influencers table · Range filters · Channel card with scores',
        span: 12,
        tiles: [
          { key: 'table', cols: 12, alt: 'Find influencers: a search, filters and a table of 100 influencers with their numbers.' },
          { key: 'filters', cols: 12, alt: 'Three range filters: recent videos, YT shorts ratio and average videos per month.' },
          { key: 'channel', cols: 12, alt: 'A YouTube channel card: subscribers, total videos, views and likes, and three channel scores.' },
        ],
      },
      {
        title: 'Reach out',
        caption: 'Send email · Import channels from CSV',
        span: 7,
        tiles: [
          { key: 'email', cols: 12, alt: 'Send email: recipients, subject, a message editor and Cancel and Send buttons.' },
          { key: 'import', cols: 12, alt: 'Import YouTube Channels File: a CSV uploading with a progress bar.' },
        ],
      },
      {
        title: 'Collaborate',
        caption: 'Comments',
        span: 5,
        tiles: [{ key: 'comments', cols: 12, alt: 'Comments with the “No messages” empty state and a field to add a comment.' }],
      },
      {
        title: 'Report',
        caption: 'Key numbers and performance · Views by creator · Report building and empty states',
        span: 12,
        tiles: [
          { key: 'performance', cols: 12, alt: 'Campaign key numbers and a line chart of video views over four weeks.' },
          { key: 'views', cols: 3, alt: 'A views donut chart by influencer, with a legend of their numbers.' },
          { key: 'building', cols: 6, alt: 'The “Building Your Report” loading state with a report illustration.' },
          { key: 'empty', cols: 3, alt: 'The “Report is not generated yet” empty state with an illustration.' },
        ],
      },
    ],
  },
};
