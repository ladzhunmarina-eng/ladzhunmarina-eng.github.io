import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.png';
import card3 from '../assets/images/card3.png';
import card4 from '../assets/images/card4.png';
import photo1 from '../assets/images/t1.png';
import photo2 from '../assets/images/t2.png';
import photo3 from '../assets/images/t3.png';

export const marquee = [
  { icon: 'grid', label: 'product thinking' },
  { icon: 'pen', label: 'illustrations' },
  { icon: 'globe', label: 'research' },
  { icon: 'sparkle', label: 'hypothesis' },
  { icon: 'arrow', label: 'metrics' },
  { icon: 'grid', label: 'A/B testings' },
  { icon: 'pen', label: 'discovery' },
  { icon: 'sparkle', label: 'ai-driven workflow' },
  { icon: 'grid', label: 'design systems' },
  { icon: 'pen', label: 'illustrations' },
  { icon: 'globe', label: 'websites' },
  { icon: 'social', label: 'social media' },
  { icon: 'arrow', label: 'marketing' },
  { icon: 'grid', label: 'products' },
] as const;

/*
 * Image placement is measured from Figma, as a share of the 726x433 panel:
 * left / width are fractions of the panel width, top / height of the panel height.
 */
export const work = [
  {
    number: '01',
    theme: 'yellow',
    category: 'C2C marketplace',
    title: 'OLX marketplace',
    href: '#',
    description:
      'Global classifieds marketplace connecting buyers and sellers of secondhand goods, part of OLX Group (Prosus), operating across Ukraine, Poland, Romania, Portugal, and Bulgaria.',
    tags: ['A/B tests', 'Research', 'User testing'],
    image: card1,
    alt: 'Two screens of the OLX app: a basket with two items ready for checkout, and an empty basket with favourites below.',
    place: { left: '20.06%', top: '0%', width: '61.44%', height: '100%' },
  },
  {
    number: '02',
    theme: 'cream',
    category: 'B2B',
    title: 'Service Marketplace Platform',
    href: '#',
    description:
      'Designed a platform connecting clients with professionals across 400+ services, with intuitive interfaces for requests, discovery, and communication.',
    tags: ['Fake-door tests', 'Research', 'Monetisation'],
    image: card2,
    alt: 'Analytics dashboard of a service marketplace for professionals, next to a mobile profile screen.',
    place: { left: '14.27%', top: '15.94%', width: '75.50%', height: '84.06%' },
  },
  {
    number: '03',
    theme: 'lilac',
    category: 'B2C',
    title: 'Baby Sleep Tracking Mobile App',
    href: '#',
    description:
      'A mobile app for tracking baby sleep that connects parents with sleep experts, offering routine analysis, record keeping, and easy communication to improve sleep quality.',
    tags: ['Surveys', 'Research', 'User testing'],
    image: card3,
    alt: 'Baby Sleep Expert app: a sign-up screen for parents and consultants, and a baby profile with a sleep diary.',
    place: { left: '25.21%', top: '0%', width: '53.45%', height: '100%' },
  },
  {
    number: '04',
    theme: 'mint',
    category: 'SaaS',
    title: 'Post-Storm Power Restoration Platform',
    href: '#',
    description:
      'A digital platform that helps U.S. utility and emergency teams restore power after storms by improving coordination, resource allocation, and communication.',
    tags: ['Web', 'User Roles', 'Discovery'],
    image: card4,
    alt: 'Storm event dashboard with a timeline, summary gauges and rosters, and a small card showing an empty fleet state.',
    place: { left: '17.63%', top: '14.55%', width: '64.77%', height: '85.43%' },
  },
];

export const testimonials = [
  {
    theme: '1',
    quote:
      'Marina is not only very competent and talented at creating beautiful UI’s, she is also very knowledgeable about UI/UX and good at communicating her ideas. She is honest and productive, and we have been impressed by the amount of work we got in the hours spent. In Marina we didn’t just find a trustworthy business partner, we also got the best and most creative designs that matched our high expectations.  I therefor give Marina my highest recommendation.',
    name: 'Kenneth Lambæk Jensen',
    role: 'Chief Innovation Officer',
    photo: photo1,
    alt: 'Portrait of Kenneth Lambæk Jensen',
  },
  {
    theme: '2',
    quote:
      'Marina was a fantastic contributor to the team - she brought thoughtful and strategic UX/UI recommendations to a complex product. While the leadership of the product changed several times throughout the lifecycle of the product, Marina maintained an excellent level of work - she is both agile and focused, works',
    name: 'Jen Volmer',
    role: 'Head of Product',
    photo: photo2,
    alt: 'Portrait of Jen Volmer',
  },
  {
    theme: '3',
    quote:
      'Maryna is not afraid of any challenge - starting from simple user flows, going through payments topics and ending with complex Legal projects. She is very fast in preparing designs and prototyping, open for a discussion and feedback from the whole Team, different stakeholders and also users. She can adapt to the new situations...quite quickly, juggling different topics and parts of the flow all together with different tools and advanced AI usage. With all of that, you are able to quickly get the working protypes, support with hypothesis and experiments creation, metrics etc. as Maryna is always open and eager to explore and discuss the topic fully, understanding the whole Business, Product and Tech impact, and not only focus on designs.  I\'m constantly impressed that very often she\'s able to tackle the topics not only from a design perspective but also act as a true Researcher building hypothesis, users tests using different tools or simply interviewing users live.  She is always a priceless team member that can bring a lot of positive changes for your Team and Customers.',
    name: 'Agata Woźniak',
    role: 'Product Manager',
    photo: photo3,
    alt: 'Portrait of Agata Woźniak',
  },
];

export const experience = [
  {
    title: 'Product designer at Rebbix, OLX Group contractor',
    dates: 'Jul 2021 — Oct 2026',
    bullets: [
      'Designed both sides of Fixly, OLX Group\'s home services marketplace in Poland: the client flow (job posting, contractor selection, reviews, payment) and the contractor-facing B2B side, on Web, iOS and Android',
      'Owned contractor monetization on Fixly: credit packages, premium options and pricing, treating price as a design element that affects both sides of the marketplace',
      'Ran price A/B tests and fake door tests with ARPU as the primary metric; the pricing test showed the mid-tier package earning the most revenue, not the most expensive one',
      'Designed installment payments for OLX buyers and led discovery with shop owners: in-depth interviews and prototype usability tests in UserZoom, recruited through the platform itself',
      'Worked within Nexus, the OLX marketplace design system for Ukraine, Poland and Romania: built new scenarios from existing patterns and raised component gaps only where the library genuinely lacked one',
      'Moved to a prototype-first process: working prototypes in Lovable or Claude, validation with design critique and dev, then Figma as the handoff source of truth; for web, a Claude Code implementation delivered as a PR',
    ],
    summary:
      'Embedded in OLX Group products as a contractor, covering the full marketplace loop: demand-side flows, supply-side monetization with pricing experiments measured on revenue, and multi-market delivery on Web, iOS, Android and Flutter inside a shared design system.',
  },
  {
    title: 'SoftServe',
    dates: 'May 2016 - Jan 2021',
    bullets: [
      'Started the Overhaul engagement from scratch: designed the first version of a real-time supply chain visibility platform for Overhaul, a US logistics visibility and risk management company',
      'Designed the core product as a map-first single-page web app carrying a high density of live shipment data, prioritising what an operator needs to see first over showing everything at once',
      'Extended the platform into fleet management sub-products as the client\'s scope grew',
      'Designed a mobile app for long-haul truck drivers to accept loads: the driver-facing side of the same visibility platform',
      'Started an internal product for People Excellence, SoftServe\'s People team: a competency design system for building and maintaining competency models across roles and levels',
      'Led a team of three designers on that project as design lead, from kick-off through delivery',
    ],
    summary:
      'Real-time operations design end to end for Overhaul: a map-first platform for the people managing shipments, fleet management on top of it, and a mobile app for the drivers on the road, all from the first screen onward. Also started and led an internal People Excellence product with a team of three designers.',
  },
];
