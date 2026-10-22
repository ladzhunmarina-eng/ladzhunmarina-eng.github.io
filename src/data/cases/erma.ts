/*
 * ERMA case study (Storm360, Vision Utilities): content only, no layout.
 * Lives in src/data/cases/erma.ts and is rendered by src/pages/work/erma.astro.
 * The text follows the Figma "Portfolio" file, node 36:45959.
 */

export const ermaCase = {
  slug: 'erma',
  theme: 'mint', // the fallback accent; the page uses its brand palette (see tokens.css)

  seo: {
    title: 'Post-Storm Power Restoration Platform — Marina, Product Designer',
    description:
      'A B2B platform that replaced phone rounds with rosters, a status-based workflow and one dashboard per storm event, for U.S. utility contractors.',
  },

  hero: {
    tags: ['B2B SaaS', 'Roles and permissions', 'Workflow', 'Dashboards', 'Fleet management', 'Timesheets'],
    eyebrow: 'Vision Utilities · Storm360',
    title: 'Post-Storm Power Restoration Platform',
    lead: 'A digital platform that helps U.S. utility and emergency teams restore power after storms by improving coordination, resource allocation, and communication.',
    meta: [
      { label: 'Client', value: 'Vision Utilities, Inc.' },
      { label: 'Industry', value: 'B2B SaaS' },
      { label: 'Country', value: 'USA' },
      { label: 'Year', value: '2023 – 2025' },
    ],
    focus: ['Web', 'Mobile', 'Tablet'],
  },

  nav: [
    { id: 'problem', label: 'Problem' },
    { id: 'roles', label: 'Roles' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'decisions', label: 'Decisions' },
    { id: 'visuals', label: 'Visuals' },
    { id: 'brand', label: 'Fonts & colors' },
  ],

  problem: {
    eyebrow: 'The problem',
    title: '90 hours on the clock, and the first ones went to phone calls.',
    lead: 'How a storm callout worked before the platform, and where the hours and the money leaked.',
    flow: [
      { label: 'Storm hits' },
      { label: 'Utility requests crews' },
      { label: 'Crew lead phones N people one by one', hot: true, note: 'X hours lost per event on calls and follow-ups' },
      { label: 'Rosters written by hand', hot: true, note: 'Managers and clients have no visibility while crews are out' },
      { label: 'Timesheets in paper / spreadsheets', hot: true, note: 'Timesheet errors turn into invoice disputes' },
      { label: 'Invoice compiled by hand' },
    ],
    cards: [
      {
        title: 'Problem',
        text: 'Utility contractors that restore power after storms assembled crews by phone: a crew lead called every team member one by one. Contracts gave 90 hours to restore the grid and charged penalties for missing the window, so hours lost on phone calls translated directly into penalties.',
      },
      {
        title: 'Challenges',
        text: 'Replace that manual process with a system that coordinates several companies and crews in real time, supports about 15 roles with different permissions, and keeps every job traceable from callout to invoice.',
      },
      {
        title: 'Solution',
        text: 'A multi-tenant web platform that automates crew assembly and dispatch, with each client company working in its own workspace. My scope: the operational dashboard, role and permission model, status-based workflow, crew rosters, fleet management, and timesheets that feed the client invoice.',
        highlight: true,
      },
    ],
  },

  roles: {
    eyebrow: 'Roles',
    title: '15 roles, 4 groups, one process.',
    lead: 'Every role touches the same event at a different step and sees a different slice of it.',
    groups: [
      {
        name: 'Ops and dispatch',
        process: 'Create the event, assemble rosters, track readiness against the deadline.',
        sees: 'Event summary, all rosters and their states, fleet availability.',
        roles: ['Business manager', 'Super Admin', 'Storm Admin', 'Safety Manager', 'System Admin'],
      },
      {
        name: 'Field',
        process: 'Confirm availability, join a roster, log hours on site.',
        sees: 'Own roster and assignment, event details, own timesheets.',
        roles: ['Lineman', 'General foreman', 'Storm Admin', 'Mechanic', 'Yard Hand', 'Fleet Manager'],
      },
      {
        name: 'Finance and admin',
        process: 'Review timesheets, build and upload the client invoice, manage users and roles.',
        sees: 'Timesheets across rosters, invoices, workspace settings.',
        roles: ['System Admin', 'General Foreman', 'Safety Manager'],
      },
      {
        name: 'Client',
        process: 'Request crews, follow progress, receive the invoice.',
        sees: 'Event status and crews assigned to their request.',
        roles: ['Utility company', 'Subcontractor', 'Contractor'],
      },
    ],
    persona: {
      name: 'Mark Johnson',
      role: 'General Foreman electrician',
      age: '34',
      location: 'Philadelphia, Miami',
      bio: 'Mark Johnson is an experienced electrician with over 10 years of industry experience. He started his career as an apprentice electrician and has worked his way up through the ranks. Mark possesses a strong technical knowledge of electrical systems and codes, along with excellent leadership and project management skills.',
      values: ['Time', 'Communication', 'Team work'],
      goals: ['Time tracking', 'Quick communication', 'Team coordination and leadership'],
      pains: ['No visible understanding of available fleet / lineman', 'Long communication', 'Effective team work'],
      channels: ['Tablet', 'Cell phone', 'SMS', 'Phone calls'],
      quote: '“During a storm I spend the first 12 hours on the phone instead of on the road.”',
      photoAlt: 'Portrait of Mark Johnson: an electrician in a yellow hard hat and a plaid shirt, arms crossed, next to a fuse box.',
    },
  },

  workflow: {
    eyebrow: 'Workflow',
    title: 'From event to invoice in six states.',
    lead: 'The workflow that replaced the phone rounds. Every job moves through the same states, and every role sees where it is.',
    steps: [
      { label: 'Event created', role: 'Ops and dispatch' },
      { label: 'Roster created', role: 'Crew lead, ops' },
      { label: 'Assignments', role: 'Crew lead' },
      { label: 'Work on site', role: 'Field' },
      { label: 'Timesheets', role: 'Field, finance' },
      { label: 'Invoice', role: 'Finance, client' },
    ],
  },

  decisions: {
    eyebrow: 'Decisions',
    title: 'Key design decisions.',
    lead: 'Five decisions that carried the business problem into the interface. Each one names the pain, the choice, the reason, and what it cost.',
    rosters: {
      title: 'What used to be 20 phone calls is now a roster with three states.',
      paragraphs: [
        'The crew lead picks people by skill, location, and availability. The roster starts as a draft, goes active when it is staffed, and closes when the work is done. Confirmations are tracked in the roster, so nobody has to call back to check.',
        'Ops sees every roster of the event in one list. That list, filtered by state, is the answer to the only question that matters in the first hours: are we staffed?',
      ],
      imageAlt: 'The My Rosters screen of an event: a grid of roster cards, each with an ID, a name, and a state tag (draft, mobilized, activated).',
    },
    assembly: {
      title: 'Roster assembly instead of phone calls.',
      pain: 'Every callout started with the crew lead phoning N people one by one. Confirmations lived in his head.',
      decision:
        'A roster the crew lead builds by filtering people by skill, location, and availability. Each person’s confirmation is tracked inside the roster.',
      why: 'The bottleneck was never the call itself but the follow-up: who said yes, who went quiet. Making confirmation visible removes the second round of calls.',
      imageAlt:
        'The Resources table of a roster: linemen with an invite status, a decline reason and an employment type, and filters for Linemen, Support and Fleet.',
    },
    dashboard: {
      title: 'One page per event, in the order the questions come up.',
      pain: 'While crews were out, the state of an event lived in phone calls, spreadsheets, and inboxes. Nobody could answer “are we staffed, where are the trucks, can we invoice yet” from one place, and the utility waited for a call back.',
      decision:
        'An event dashboard that follows the event’s lifecycle from top to bottom: status and timeline, staffing, money, fleet, documents. Every number opens its source, and the page has a shareable link for the utility company.',
      why: 'A general foreman does not read a dashboard, he checks it between calls. Ordering the blocks by lifecycle puts the question he has right now near the top: staffing early in the event, signed timesheets and the invoice at the end. The timesheet overview sits next to the invoice amount because unsigned timesheets are what delays invoicing.',
      imageAlt:
        'The Event Dashboard: an overview bar, a timeline, a roster summary gauge, operational numbers, a timesheet overview, a vehicle map and a documents list.',
      parts: [
        { title: 'Event overview', text: 'Name, status, start and end dates, duration, utility company.' },
        { title: 'Event timeline', text: 'Hired, Activated, Closed, each with a timestamp.' },
        { title: 'Event summary', text: 'Rosters by state: total, draft, active, closed, with the split shown on a gauge.' },
        { title: 'Operational overview', text: 'People and vehicles mobilized, billable hours, final invoice amount, amount owed to the union.' },
        { title: 'Timesheet overview', text: 'Signed, awaiting, and not signed, as one bar and a count.' },
        { title: 'Vehicles GPS map', text: 'Total, available, in use, with live positions of the fleet.' },
        {
          title: 'Event documentation',
          text: 'Hire and release notices, rosters, timesheets, expenses, invoices, MSA, invoice financing. Files grouped by day, signed and unsigned side by side.',
        },
      ],
    },
  },

  visuals: {
    eyebrow: 'Screens',
    title: 'Visuals.',
    alts: {
      rosters: 'The My Rosters screen with eight roster cards and a Create Roster button.',
      battery: 'An isometric yellow illustration of a battery connected to three houses with solar panels, and an event card: Event Katalina, North Lima, 26 June 2023.',
      empty: 'The empty state: a lineman in a hard hat and the text No Rosters Created.',
      uploading: 'An upload in progress: Users_Vision_Utility_1.pdf at 100%.',
      attachment: 'An uploaded invoice: Invoice_20278.Pdf, final amount $23 000, marked Memo.',
      upload: 'The Upload Invoice dialog with a drop zone, a Final Amount field, a Memo and a Final + Submitted state, and Cancel and Save buttons.',
      createEvent: 'The Create An Event dialog with tabs, a system control number, name, utility, location and assignee fields, and Cancel, Save As Draft and Activate buttons.',
      summary: 'The event summary: a gauge with 40 rosters, and cards for total, draft, active and closed rosters.',
      owed: 'The Amount Owed to Union card: $12000, down 3 against the previous month.',
    },
  },

  brand: {
    eyebrow: 'Brand',
    title: 'Fonts & colors.',
    alt: 'Poppins, with its alphabet in upper and lower case, over the colors #000000, #FF5000, #FFB600, #F9F9F9 and #054FB9.',
  },
} as const;
