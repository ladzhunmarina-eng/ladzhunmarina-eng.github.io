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
    title: 'Data-Driven Influencer Marketing Platform — Marina, Product Designer',
    description:
      'A platform that helps brands discover gaming and lifestyle creators, manage influencer campaigns, and maximize ROI through analytics and performance tracking.',
  },

  hero: {
    tags: ['Web'],
    areasLabel: 'Platform',
    eyebrow: 'Influencer marketing · Gaming',
    title: 'Data-Driven Influencer\nMarketing Platform',
    lead: 'Solution that helps brands discover gaming and lifestyle creators, manage influencer campaigns, and maximize ROI through analytics and performance tracking.',
    meta: [
      { label: 'Client', value: 'Cloutboost' },
      { label: 'Industry', value: 'B2B2C' },
      { label: 'Country', value: 'USA' },
      { label: 'Year', value: '2024' },
    ],
    focus: [] as string[],
    image: 'The Cloutboost campaign report: general info, key numbers, a campaign performance chart and a card saying no report has been generated.',
  },

  nav: [
    { id: 'goal', label: 'Goal' },
    { id: 'persona', label: 'Persona' },
    { id: 'visuals', label: 'Visuals' },
  ],

  goal: {
    eyebrow: 'Goal and challenge',
    title: 'Finding the right creators, and proving what they deliver.',
    lead: 'A brand wants creators who fit its audience and numbers that show the campaign worked. The platform covers both.',
    cards: [
      {
        icon: 'target' as const,
        title: 'Objective',
        text: 'Build a platform that connects brands with gaming and lifestyle creators to run data-driven influencer marketing campaigns.',
      },
      {
        icon: 'scale' as const,
        title: 'Challenges',
        text: 'Finding the right creators, ensuring transparent collaboration, and measuring real campaign performance across platforms.',
      },
      {
        icon: 'check' as const,
        title: 'Solution',
        text: 'An AI-powered platform with advanced creator discovery, campaign management, and ROI tracking tools to optimize influencer partnerships.',
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
          'Anna Williams is a marketing professional with 6+ years of experience in the gaming industry. She specializes in influencer marketing, focusing on recruiting, evaluating, and managing creators who can drive awareness and engagement for new game launches.',
        groups: [
          { title: 'Values', items: ['Efficiency', 'Creativity', 'Measurable results'] },
          {
            title: 'Goals',
            items: ['Find and recruit relevant influencers quickly', 'Track campaign performance effectively'],
          },
          {
            title: 'Pain points',
            items: ['Difficulty in identifying authentic and relevant influencers', 'Manual and time-consuming performance tracking'],
          },
        ],
        quote: '“I need to quickly find the right influencers who match my game’s audience and prove their impact with clear data.”',
        photoAlt: 'Anna Williams, influencer marketing manager, smiling in front of an orange wall and a window',
      },
    ],
  },

  visuals: {
    eyebrow: 'Visuals',
    title: 'Discovery, reports and outreach in one place.',
    tiles: [
      { key: 'channel', cols: 12, alt: 'A YouTube channel card: subscribers, total videos, views and likes, and three channel scores.' },
      { key: 'building', cols: 8, alt: 'The “Building Your Report” loading state with a report illustration.' },
      { key: 'views', cols: 4, alt: 'A views donut chart by influencer, with a legend of their numbers.' },
      { key: 'performance', cols: 12, alt: 'Campaign key numbers and a line chart of video views over four weeks.' },
      { key: 'email', cols: 12, alt: 'Send email: recipients, subject, a message editor and Cancel and Send buttons.' },
      { key: 'import', cols: 7, alt: 'Import YouTube Channels File: a CSV uploading with a progress bar.' },
      { key: 'comments', cols: 5, rows: 2, alt: 'Comments with the “No messages” empty state and a field to add a comment.' },
      { key: 'empty', cols: 7, alt: 'The “Report is not generated yet” empty state with an illustration.' },
      { key: 'filters', cols: 12, alt: 'Three range filters: recent videos, YT shorts ratio and average videos per month.' },
      { key: 'table', cols: 12, alt: 'Find influencers: a search, filters and a table of 100 influencers with their numbers.' },
    ],
  },
};
