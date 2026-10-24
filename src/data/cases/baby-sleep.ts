/*
 * Baby Sleep Tracking Mobile App case study: content only, no layout.
 * Lives in src/data/cases/baby-sleep.ts and is rendered by src/pages/work/baby-sleep.astro.
 *
 * The structure follows the "Baby Sleep" frame in the Figma file (node 70:69484), arranged like the ERMA case.
 * Anything in [square brackets] is a placeholder that stays visible on the page until it is filled in.
 */

export const babySleepCase = {
  slug: 'baby-sleep',
  theme: 'lilac', // the fallback accent; the page uses its brand palette (see tokens.css)

  seo: {
    title: 'Baby Sleep Tracking Mobile App — Marina, Product Designer',
    description:
      'A mobile app for tracking baby sleep that connects parents with sleep experts: routine analysis, record keeping and easy communication.',
  },

  hero: {
    tags: ['Mobile app', 'Two user roles', 'Sleep diary', 'Trends and calendar', 'Subscriptions'],
    areasLabel: 'My scope',
    eyebrow: 'Parenting · Sleep consulting',
    title: 'Baby Sleep Tracking\nMobile App',
    lead: 'A mobile app for tracking baby sleep that connects parents with sleep experts, offering routine analysis, record keeping, and easy communication to improve sleep quality.',
    meta: [
      { label: 'Client', value: 'Sleep Consultant' },
      { label: 'Industry', value: 'B2C' },
      { label: 'Country', value: 'Ukraine' },
      { label: 'Year', value: '2024' },
    ],
    focus: [] as string[],
    image: 'Two phones: the sign-up screen for parents and consultants, and a baby profile with the sleep diary calendar.',
  },

  nav: [
    { id: 'goal', label: 'Goal' },
    { id: 'process', label: 'Process' },
    { id: 'persona', label: 'Persona' },
    { id: 'decisions', label: 'Decisions' },
    { id: 'theme', label: 'Light and dark' },
    { id: 'feedback', label: 'Feedback' },
    { id: 'screens', label: 'Screens' },
  ],

  goal: {
    eyebrow: 'Goal and challenge',
    title: 'One app for the parent who tracks and the expert who advises.',
    lead: 'The app starts from two roles with different needs, so the first decision was to build for both at once.',
    cards: [
      {
        icon: 'target' as const,
        title: 'Objective',
        text: 'Develop an app that helps parents track their baby’s sleep patterns and work together with sleep consultants to improve the child’s routine.',
      },
      {
        icon: 'scale' as const,
        title: 'Challenges',
        text: 'Balancing the needs of parents and consultants, ensuring accurate data tracking, and creating a simple way to share insights and progress.',
      },
      {
        icon: 'check' as const,
        title: 'Solution',
        text: 'A collaborative mobile platform with sleep tracking, notes, and direct communication tools that connect parents and experts to build healthier sleep habits for babies.',
      },
    ],
  },

  persona: {
    eyebrow: 'User persona',
    title: 'Two roles in the system: parent and sleep expert.',
    lead: 'Each role has its own goals and needs. The parent persona drove the tracking flows.',
    cards: [
      {
        photo: 'parent',
        name: 'Anna Smith',
        role: 'First-time mom',
        facts: [
          { label: 'Age', value: '29' },
          { label: 'Location', value: 'Lviv, Ukraine' },
        ],
        biography: 'Wants a simple way to track her baby’s sleep and get advice from someone she can trust.',
        groups: [
          { title: 'Goals', items: ['Understand her baby’s sleep patterns', 'Get recommendations she can act on'] },
          { title: 'Pain points', items: ['Doesn’t understand sleep cycles', 'Hard to find a reliable expert'] },
        ],
        quote: '“I just want to help my baby sleep better and feel less stressed myself.”',
        photoAlt: 'A young mother in a white dress holding her smiling baby',
      },
      {
        photo: 'expert',
        name: 'Olena Kovalenko',
        role: 'Certified sleep consultant',
        facts: [
          { label: 'Age', value: '36' },
          { label: 'Location', value: 'Kyiv, Ukraine' },
        ],
        biography: 'Enters every family’s sleep data into an Excel sheet by hand to spot trends and write summaries.',
        groups: [
          { title: 'Goals', items: ['See trends and summaries without building them by hand', 'Give recommendations faster'] },
          { title: 'Pain points', items: ['Manual data entry into Excel for every client', 'Trends and summaries take hours to put together'] },
        ],
        quote: '“Give me a clean diary, and I can help a family in one session.”',
        photoAlt: 'Olena Kovalenko, sleep consultant',
      },
    ],
  },

  process: {
    eyebrow: 'Process',
    title: 'From the problem to the handoff.',
    phases: ['Frame', 'Explore', 'Define', 'Design', 'Validate', 'Handoff'],
    // start and length are in pixels on a 960px-wide chart; the chart turns them into percentages
    bars: [
      { label: 'Framing the problem', start: 0, length: 330 },
      { label: 'User surveys', start: 100, length: 330 },
      { label: 'User interviews', start: 200, length: 330 },
      { label: 'Competitor analysis', start: 300, length: 330 },
      { label: 'Flows & behavioural patterns', start: 430, length: 380 },
      { label: 'Prototype', start: 560, length: 300 },
      { label: 'Test & validate', start: 650, length: 310 },
      { label: 'Handoff', start: 790, length: 170 },
    ],
  },

  screens: {
    eyebrow: 'Screens',
    pill: 'Selected screens',
    title: 'From sign-up to the sleep trend.',
    lead: 'Six of the screens, in the order a parent meets them.',
    items: [
      { key: 'signup', label: 'Sign-up', alt: 'Sign-up screen: choose Parent or Consultant, or log in.' },
      { key: 'plans', label: 'Subscription plans', alt: 'Subscription plans: Basic and Premium, yearly or monthly, with what the plan includes.' },
      { key: 'clients', label: 'Clients', alt: 'Consultant’s client list with diary status, package and dates.' },
      { key: 'tracker', label: 'Sleep tracker', alt: 'Day view of sleep with totals, a night sleep block and a running timer.' },
      { key: 'trend', label: 'Trend view', alt: 'Weekly trend chart of day, night and total sleep with averages and totals.' },
      { key: 'calendar', label: 'Calendar view', alt: 'Calendar view of night and day sleep blocks across a week.' },
    ],
  },

  decisions: {
    eyebrow: 'Key decisions',
    title: 'Five choices that shaped the app.',
    lead: 'Parents log sleep in a few taps and read it as a day, a trend or a calendar; consultants manage clients and see the same data.',
    items: [
      {
        tags: ['Onboarding', 'Roles'],
        title: 'Two roles from the first tap',
        description:
          'Parent or consultant is the first choice, so each person lands in a flow built for them. For parents it continues with an account, an email check, the child’s name and birthday, and an optional photo.',
        phones: [] as string[],
        demo: 'onboarding',
      },
      {
        tags: ['Tracking', 'Timer'],
        title: 'Log sleep without leaving the day',
        description:
          'Start a sleep from the timeline, add a note, and stop the running timer from the lock screen without opening the app. Totals and sleep blocks stay on the day view.',
        phones: [] as string[],
        demo: 'tracker',
      },
      {
        tags: ['Analysis', 'Calendar'],
        title: 'See the pattern, not just the trend',
        description:
          'The day opens its totals and each sleep’s details; the week switches between a calendar of sleep blocks and a trend chart with averages, so a whole week reads at a glance.',
        phones: [] as string[],
        demo: 'stats',
      },
      {
        tags: ['Consultants', 'Clients'],
        title: 'Every client and their diary status in one list',
        description:
          'An expert invites a client with a link from the empty list. Once they sign up, they appear with their diary status, the package they are on and its dates: everything needed before opening a diary, and one tap opens the client’s profile with her day.',
        phones: [] as string[],
        demo: 'clients',
      },
      {
        tags: ['Apple Watch', 'Quick actions'],
        title: 'Start and stop a sleep from the wrist',
        description:
          'Open the app, pick the child if there are two, and start the sleep with one tap, setting the time on two wheels if needed. The clock runs on the wrist; Stop sleep ends it, and a green check confirms it.',
        phones: [] as string[],
        demo: 'watch',
      },
    ],
  },

  theme: {
    eyebrow: 'Light and dark theme',
    tags: ['Light theme', 'Dark theme'],
    title: 'Light and dark were designed as one system.',
    lead: 'Both themes share one layout and one illustration, so a parent sees the same screen by day and at night.',
    alts: {
      light: 'The update screen in the light theme: a bottle-shaped rocket over clouds, “A fresh update is ready” and an Update now button.',
      dark: 'The same update screen in the dark theme, on a dark blue-grey sky.',
    },
  },

  feedback: {
    eyebrow: 'App Store reviews',
    title: 'Parents noticed how clear it is.',
    rating: { score: '5.0', label: '32 App Store ratings' },
    reviews: [
      {
        title: 'Finally a comprehensive baby sleep log app, that actually helps',
        text: 'This is not the first baby sleep app that I used, but definitely the best. It clearly shows the length of activity windows, totals for sleep and day activity. You don’t need to calculate anything in your head when you need to check daily numbers. Amazingly UX friendly.',
        author: 'Kateryna_se',
        date: '27 Feb',
      },
      {
        title: 'Total game changer!',
        text: 'We switched from a different app to this one and it was so far the best decision. The app is very intuitive, the UX is superb, doesn’t have too much information at once so you can get overwhelmed and lost. A separate thank you for a calendar-alike view. It gives a great insight to the sleep patterns rather than a typical trend that such apps offer. Totally recommend! 🔥',
        author: 'terebara',
        date: '1y ago',
      },
      {
        title: 'Invaluable Tool for New Parents',
        text: 'As a new parent, tracking my baby’s sleep was overwhelming—until I started using this app. It’s simple, reliable, and extremely helpful. Logging sleep times takes seconds, and the visual stats help me understand my child’s sleep patterns better. The averages and schedule insights have been especially useful in finding a healthy routine. It’s also a great way to share accurate data with our sleep consultant. Highly recommend for any parent trying to improve their baby’s sleep habits.',
        author: 'psaikevy',
        date: '1y ago',
      },
      {
        title: 'Wonderful app for me as a parent',
        text: 'We share the same parent account with my wife and thus are able to track our daughter’s sleep at the same time. Our consultant was able to quickly address our sleep training issues, seeing our activities real time. We had plenty of night wake-ups, so addressing the sleep schedule was the main goal with our consultant, and app helped there a lot. Much more convenient than separately tracking in other available apps and then manually moving the data to a spreadsheet that our consultant used before.',
        author: 'Sasha Rem',
        date: '1y ago',
      },
    ],
  },
};
