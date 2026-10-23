/*
 * ERMA case study: content only, no layout.
 * Lives in src/data/cases/erma.ts and is rendered by src/pages/work/erma.astro.
 *
 * The structure follows the "DRAFT · case study v2" frame in the Figma file (node 38:49372).
 * Anything in [square brackets] is a placeholder that stays visible on the page until it is filled in.
 */

export const ermaCase = {
  slug: 'erma',
  theme: 'mint', // the fallback accent; the page uses its brand palette (see tokens.css)

  seo: {
    title: 'Post-Storm Power Restoration Platform — Marina, Product Designer',
    description:
      'A multi-tenant platform that replaced phone-based crew callouts for U.S. utility contractors working against a 90-hour restoration window.',
  },

  hero: {
    // My scope (the business model, B2B SaaS, is in the Industry fact, not here).
    tags: ['Rosters', 'Dashboards', 'Roles and permissions', 'Timesheets', 'Fleet management', 'Workflow'],
    areasLabel: 'My scope',
    eyebrow: 'Power utilities · Storm response',
    title: 'Post-Storm Power Restoration Platform',
    lead: 'A multi-tenant platform that replaced phone-based crew callouts for U.S. utility contractors: several companies, about 15 roles, one 90-hour restoration window.',
    meta: [
      { label: 'Client', value: 'Vision Utilities, Inc.' },
      { label: 'Industry', value: 'B2B SaaS' },
      { label: 'Country', value: 'USA' },
      { label: 'Year', value: '2023 – 2025' },
    ],
    focus: [] as string[],
  },

  nav: [
    { id: 'problem', label: 'Problem' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'process', label: 'Process' },
    { id: 'decisions', label: 'Solution' },
    { id: 'outcome', label: 'Outcome' },
    { id: 'retrospective', label: 'Retrospective' },
  ],

  problem: {
    eyebrow: 'The problem',
    title: '90 hours on the clock, and the first ones went to phone calls.',
    lead: 'Contracts gave 90 hours to restore the grid, with penalties for missing the window. Here’s where those hours went.',
    flow: [
      { label: 'Storm hits' },
      { label: 'Utility callout' },
      { label: 'Crew built by phone', hot: true, note: '[X] h lost on calls' },
      { label: 'Paper rosters', hot: true, note: 'No field visibility' },
      { label: 'Paper timesheets', hot: true, note: 'Errors become disputes' },
      { label: 'Manual invoice' },
    ],
    quote: {
      text: '“During a storm I spend the first 12 hours on the phone instead of on the road.”',
      source: 'General foreman, utility storm crew · User interview',
    },
  },

  challenge: {
    eyebrow: 'The challenge',
    title: 'How do you coordinate several companies and about 15 roles inside a 90-hour window?',
    lead: 'The phone calls were the symptom. The platform had to hold several companies, about 15 roles and every billable hour in one place.',
    cards: [
      { icon: 'network', title: 'Several companies, in real time', text: 'Contractors, subcontractors and utilities coordinating crews during the same event.' },
      { icon: 'users', title: 'About 15 roles', text: 'Each with different permissions, from linemen in the field to finance in the office.' },
      { icon: 'route', title: 'Traceable end to end', text: 'Every job and every hour has to hold up from callout to invoice, or it turns into a dispute.' },
    ],
    solution: {
      title: 'One platform from callout to invoice.',
      intro: 'A multi-tenant platform for crew assembly and dispatch:',
      links: [
        { text: 'rosters instead of phone rounds', target: 'decision-roster' },
        { text: 'one page per event', target: 'decision-dashboard' },
        { text: 'one permission model for every company', target: 'decision-permissions' },
        { text: 'timesheet sign-off before invoicing', target: 'decision-timesheets' },
      ],
    },
  },

  process: {
    eyebrow: 'Process',
    title: 'From the field to the handoff.',
    phases: ['Discover', 'Define', 'Design', 'Validate', 'Handoff'],
    // start and length are in pixels on a 960px-wide chart; the chart turns them into percentages
    bars: [
      { label: 'Discovery with foremen and linemen', start: 0, length: 340 },
      { label: 'Study of their timesheets and process', start: 110, length: 370 },
      { label: 'Prototypes validated with the client', start: 420, length: 400 },
      { label: 'Final handoff', start: 770, length: 190 },
    ],
  },

  decisions: {
    eyebrow: 'Solution',
    title: 'Key design decisions.',
    lead: 'Four decisions that carried the business problem into the interface. Each one names the pain, the choice, the reason, and the trade-off.',
    map: {
      stages: ['Event', 'Roster', 'Assign', 'On site', 'Timesheets', 'Invoice'],
      bars: [
        { index: '01', label: 'Roster assembly', target: 'decision-roster', from: 2, to: 3, row: 1, kind: 'stage' },
        { index: '04', label: 'Timesheet sign-off', target: 'decision-timesheets', from: 5, to: 6, row: 1, kind: 'stage' },
        { index: '02', label: 'One page per event', target: 'decision-dashboard', from: 1, to: 6, row: 2, kind: 'event' },
        { index: '03', label: 'One permission model', target: 'decision-permissions', from: 1, to: 6, row: 3, kind: 'event' },
      ],
      legend: { stage: 'Fixes a specific stage', event: 'Holds the whole event together' },
    },
    tradeoff: '[What you gave up, simplified or deferred, and why it was acceptable.]',
    roster: {
      index: '01',
      title: 'Roster assembly instead of phone calls.',
      lead: 'What used to be 20 phone calls is now a roster with three states: draft, active, closed.',
      pain: 'Every callout started with the crew lead phoning N people one by one. Confirmations lived in his head.',
      decision:
        'A roster the crew lead builds by filtering people by skill, location, and availability. Each confirmation is tracked inside the roster; ops sees every roster of the event in one list, filtered by state.',
      why: 'The bottleneck was never the call itself but the follow-up: who said yes, who went quiet. Making confirmation visible removes the second round of calls.',
      listAlt: 'The My Rosters screen of an event: a grid of twelve roster cards, each with an ID, a name, a state tag (draft, pending approval, mobilized, activated, closed, demobilized) and a menu button.',
      menuAlt: 'The roster menu: Transfer to, Split Roster, Generate Timesheet, Delete, and Change status to, with an activated option.',
      resourcesAlt:
        'The Resources table of a roster: linemen with an invite status, a decline reason and an employment type, and filters for Linemen, Support and Fleet.',
    },
    dashboard: {
      index: '02',
      title: 'One page per event, in the order the questions come up.',
      pain: 'While crews were out, the state of an event lived in calls, spreadsheets and inboxes. Nobody could answer “are we staffed, where are the trucks, can we invoice yet” from one place.',
      decision:
        'An event dashboard that follows the lifecycle top to bottom: status and timeline, staffing, money, fleet, documents. Every number opens its source, and the utility gets a shareable link.',
      why: 'A general foreman checks the page between calls. Lifecycle order puts the question he has right now near the top.',
      parts: [
        { at: 171, title: 'Overview', text: 'Name, status, start and end dates, duration, utility company.' },
        { at: 335, title: 'Timeline', text: 'Hired, Activated, Closed, each with a timestamp.' },
        { at: 528, title: 'Event summary', text: 'Rosters by state: total, draft, active, closed, with the split shown on a gauge.' },
        { at: 528, title: 'Operational overview', text: 'People and vehicles mobilized, billable hours, final invoice amount, amount owed to the union.' },
        { at: 962, title: 'Timesheets', text: 'Signed, awaiting, and not signed, as one bar and a count.' },
        { at: 1293, title: 'Fleet GPS', text: 'Total, available, in use, with live positions of the fleet.' },
        {
          at: 1792,
          title: 'Documents',
          text: 'Hire and release notices, rosters, timesheets, expenses, invoices, MSA, invoice financing. Files grouped by day, signed and unsigned side by side.',
        },
      ],
    },
    permissions: {
      index: '03',
      title: '[15 roles, one permission model.]',
      lead: '[How 15 roles across several companies stayed one product instead of fifteen.]',
      pain: '[Who could see and do what before, and where it broke.]',
      decision: '[Role groups, permission matrix, a workspace per company: what you actually designed.]',
      groups: [
        '[Ops and dispatch: Event summary, all rosters and their states, fleet availability.]',
        '[Field: Own roster and assignment, event details, own timesheets.]',
        '[Finance and admin: Timesheets across rosters, invoices, workspace settings.]',
        '[Client: Event status and crews assigned to their request.]',
      ],
      missing: 'Missing screen · Users / roles and permissions',
      why: '[The reasoning behind the structure.]',
    },
    timesheets: {
      index: '04',
      title: '[Unsigned timesheets are what delay the invoice.]',
      lead: '[How hours logged on site turn into the client invoice without disputes.]',
      pain: '[Timesheet errors turned into invoice disputes.]',
      decision: '[Timesheet sign-off, then invoice upload with final amount and memo state.]',
      missing: 'Missing screen · timesheet sign-off',
      why: '[The reasoning.]',
      uploadAlt: 'The Upload Invoice dialog with a drop zone, a Final Amount field, a Memo and a Final + Submitted state, and Cancel and Save buttons.',
      attachmentAlt: 'An uploaded invoice: Invoice_20278.Pdf, final amount $23 000, marked Memo.',
    },
  },

  outcome: {
    eyebrow: 'Outcome',
    title: '[What changed.]',
    lead: '[One line on where the product is today.]',
    cards: [
      { label: 'Status', value: '[Shipped]', note: '[In production since 20XX]' },
      { label: 'Adoption', value: '[N companies]', note: '[N storm events run on the platform]' },
      { label: 'Process', value: '[Phone rounds → roster states]', note: '[What disappeared from the callout]' },
      { label: 'Client', value: '[“…”]', note: '[Feedback from the client]' },
    ],
  },

  retrospective: {
    eyebrow: 'Retrospective',
    title: '[What I’d do differently.]',
    columns: [
      { title: 'What worked', items: ['[2–3 sentences.]'] },
      { title: 'What I’d change', items: ['[2–3 sentences.]'] },
      { title: 'What’s next', items: ['[2–3 sentences.]'] },
    ],
  },
} as const;
