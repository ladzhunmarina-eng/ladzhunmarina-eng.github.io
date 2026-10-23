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
    lead: 'Four decisions that carried the business problem into the interface.',
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
    roster: {
      index: '01',
      tags: ['Rosters', 'Field ops'],
      title: 'Roster assembly instead of phone calls.',
      description: 'A crew lead builds the roster by skill, location and availability, and every yes, no and silence is tracked inside it. The second round of calls disappears.',
      listAlt: 'The My Rosters screen of an event: a grid of twelve roster cards, each with an ID, a name, a state tag (draft, pending approval, mobilized, activated, closed, demobilized) and a menu button.',
      detailAlt:
        'Inside a roster: two lists side by side, Available Support and the Roster, with checkboxes, an arrow to move the selected people across, and a person being dragged from one list to the other.',
      overviewAlt:
        'The roster Overview tab: a general info card with roster ID, display name, status, leaving from, start day and show up time, then empty Equipment and FTEs cards and a Contacts card.',
      menuAlt: 'The roster menu: Transfer to, Split Roster, Generate Timesheet, Delete, and Change status to, with an activated option.',
      resourcesAlt:
        'The Resources tab of an event: Linemen, Support and Fleet toggles, a legend for invite status, and a table of people with favorite, invite, invite status, declined, employment type and email.',
    },
    dashboard: {
      index: '02',
      tags: ['Dashboard', 'Ops'],
      title: 'Questions in the order they come up',
      description: 'Status, staffing, money, fleet and documents follow the event’s lifecycle. Every number opens its source.',
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
      tags: ['Roles and permissions', 'Multi-tenant'],
      title: 'Fifteen roles, one product',
      description: 'Each group sees its slice of the same event: ops the whole picture, the field their own roster, finance the money, the client their request.',
      alt: 'Settings, Permissions tab: a table of permissions grouped into Users and Incident permissions, with a checkbox for each of four roles: System Admin, Business Manager, General Foreman and Lineman.',
    },
    timesheets: {
      index: '04',
      tags: ['Timesheets', 'Invoicing'],
      title: 'Sign-off before invoice',
      description: '[How hours logged on site reach the invoice without disputes.]',
      missing: 'Missing screen · timesheet sign-off',
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
