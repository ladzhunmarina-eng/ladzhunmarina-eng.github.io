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
    // Focus areas (the business model, B2B SaaS, is in the Industry fact, not here).
    tags: ['Roles and permissions', 'Workflow', 'Dashboards', 'Fleet management', 'Timesheets'],
    eyebrow: 'Power utilities · Storm response',
    title: 'Post-Storm Power Restoration Platform',
    lead: 'A multi-tenant platform that replaced phone-based crew callouts for U.S. utility contractors working against a 90-hour restoration window.',
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
    { id: 'research', label: 'Research' },
    { id: 'roles', label: 'Roles' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'decisions', label: 'Decisions' },
    { id: 'outcome', label: 'Outcome' },
    { id: 'retrospective', label: 'Retrospective' },
  ],

  problem: {
    eyebrow: 'The problem',
    title: '90 hours on the clock, and the first ones went to phone calls.',
    lead: 'How a storm callout worked before the platform, and where the hours and the money leaked.',
    flow: [
      { label: 'Storm hits' },
      { label: 'Utility requests crews' },
      { label: 'Crew lead phones [N] people one by one', hot: true, note: '[X] hours lost per event on calls and follow-ups' },
      { label: 'Rosters written by hand', hot: true, note: 'No visibility while crews are out' },
      { label: 'Timesheets on paper / spreadsheets', hot: true, note: 'Timesheet errors turn into invoice disputes' },
      { label: 'Invoice compiled by hand' },
    ],
    cards: [
      {
        title: 'Problem',
        text: 'Crews were assembled by phone. Contracts gave 90 hours to restore the grid and charged penalties for missing the window.',
      },
      {
        title: 'Challenges',
        text: 'Coordinate several companies and crews in real time, about 15 roles with different permissions, every job traceable from callout to invoice.',
      },
      {
        title: 'Solution',
        text: 'Multi-tenant platform for crew assembly and dispatch. My scope: dashboard, roles and permissions, workflow, rosters, fleet, timesheets → invoice.',
        highlight: true,
      },
    ],
    quote: {
      text: '“During a storm I spend the first 12 hours on the phone instead of on the road.”',
      source: '[Name or role], general foreman · [source: interview, date]',
    },
  },

  research: {
    eyebrow: 'Research',
    title: '[How I got to the problem.]',
    lead: '[One line: who you talked to and what you looked at.]',
    columns: [
      {
        title: 'Sources',
        items: ['[N interviews with general foremen]', '[Calls with the client’s ops team]', '[Existing rosters, timesheets, invoices]'],
      },
      {
        title: 'What we saw',
        items: ['[Confirmations lived in the crew lead’s head]', '[Nobody could answer “are we staffed?” from one place]'],
      },
      {
        title: 'What it changed',
        items: ['[Insight → decision 01]', '[Insight → decision 02]'],
      },
    ],
  },

  roles: {
    eyebrow: 'Roles',
    title: '[15] roles, 4 groups, one process.',
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
  },

  workflow: {
    eyebrow: 'Workflow',
    title: 'From event to invoice in six stages.',
    lead: 'The workflow that replaced the phone rounds. Every job moves through the same stages, and every role sees where it is.',
    before: ['Phone rounds', 'Rosters by hand', 'Paper timesheets', 'Invoice by hand'],
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
    lead: '[Four] decisions that carried the business problem into the interface. Each one names the pain, the choice, the reason, and the trade-off.',
    tradeoff: '[What you gave up, simplified or deferred, and why it was acceptable.]',
    roster: {
      index: '01',
      title: 'Roster assembly instead of phone calls.',
      lead: 'What used to be 20 phone calls is now a roster with three states: draft, active, closed.',
      pain: 'Every callout started with the crew lead phoning N people one by one. Confirmations lived in his head.',
      decision:
        'A roster the crew lead builds by filtering people by skill, location, and availability. Each confirmation is tracked inside the roster; ops sees every roster of the event in one list, filtered by state.',
      why: 'The bottleneck was never the call itself but the follow-up: who said yes, who went quiet. Making confirmation visible removes the second round of calls.',
      listAlt: 'The My Rosters screen of an event: a grid of roster cards, each with an ID, a name, and a state tag (draft, mobilized, activated).',
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
