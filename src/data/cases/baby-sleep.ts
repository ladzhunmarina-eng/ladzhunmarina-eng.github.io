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
    { id: 'persona', label: 'Persona' },
    { id: 'screens', label: 'Screens' },
    { id: 'decisions', label: 'Decisions' },
    { id: 'feedback', label: 'Feedback' },
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

  screens: {
    eyebrow: 'Screens',
    title: 'From sign-up to the sleep trend.',
    lead: 'Six of the screens, from sign-up to the sleep trend. Scroll sideways.',
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
    title: 'Four choices that shaped the app.',
    lead: 'Parents log sleep in a few taps and read it as a day, a trend or a calendar; consultants manage clients and see the same data.',
    items: [
      {
        tags: ['Onboarding', 'Roles'],
        title: 'Two roles from the first tap',
        description:
          'Parent or consultant is the first choice, so each person lands in a flow built for them: a sleep diary for parents, a client list for experts.',
        phones: ['signup'],
      },
      {
        tags: ['Tracking', 'Timer'],
        title: 'Log sleep without leaving the day',
        description:
          'The day view keeps totals on top, night and day sleep as blocks on a timeline, and a running timer within thumb reach.',
        phones: ['tracker'],
      },
      {
        tags: ['Analysis', 'Calendar'],
        title: 'See the pattern, not just the trend',
        description:
          'The period view switches between a trend chart with averages and totals, and a calendar of sleep blocks, so a whole week reads at a glance.',
        phones: ['trend', 'calendar'],
      },
      {
        tags: ['Consultants', 'Clients'],
        title: 'Every client and their diary status in one list',
        description:
          'Active and archived clients, whether their diary has started, the package they are on and its dates: everything an expert needs before opening a diary.',
        phones: ['clients'],
      },
    ],
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
        // The review is in Ukrainian, as written on the App Store; its title is cut off in the screenshot, so none is shown.
        text: 'Додаток зручний у користуванні, з досить простим для користувача інтерфейсом та цікавими функціями. Зручно трекати час та писати замітки щодо сну малечі.',
        author: 'likaoas',
        date: '21 Sep',
        lang: 'uk',
      },
    ],
  },
};
