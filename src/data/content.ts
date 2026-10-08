import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.png';
import card3 from '../assets/images/card3.png';
import card4 from '../assets/images/card4.png';
import projectorLogo from '../assets/images/projector-logo.png';
import robotDreamsLogo from '../assets/images/robot-dreams-logo.png';

export const marquee = [
  { icon: 'grid', label: 'product thinking' },
  { icon: 'pen', label: 'illustrations' },
  { icon: 'globe', label: 'research' },
  { icon: 'sparkle', label: 'hypothesis' },
  { icon: 'arrow', label: 'metrics' },
  { icon: 'grid', label: 'A/B testings' },
  { icon: 'search', label: 'discovery' },
  { icon: 'sparkle', label: 'ai-driven workflow' },
  { icon: 'grid', label: 'design systems' },
  { icon: 'pen', label: 'illustrations' },
  { icon: 'globe', label: 'websites' },
  { icon: 'globe', label: 'research' },
  { icon: 'arrow', label: 'metrics' },
  { icon: 'grid', label: 'design systems' },
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
    href: '/work/olx',
    description:
      'Global classifieds marketplace connecting buyers and sellers of secondhand goods, part of OLX Group (Prosus), operating across Ukraine, Poland, Romania, Portugal, and Bulgaria.',
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
    image: card2,
    alt: 'Analytics dashboard of a service marketplace for professionals, next to a mobile profile screen.',
    place: { left: '14.27%', top: '15.94%', width: '75.50%', height: '84.06%' },
    bleed: true, // the screenshot runs off the bottom of the panel
  },
  {
    number: '03',
    theme: 'lilac',
    category: 'B2C',
    title: 'Baby Sleep Tracking Mobile App',
    href: '#',
    description:
      'A mobile app for tracking baby sleep that connects parents with sleep experts, offering routine analysis, record keeping, and easy communication to improve sleep quality.',
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
    image: card4,
    alt: 'Storm event dashboard with a timeline, summary gauges and rosters, and a small card showing an empty fleet state.',
    place: { left: '17.63%', top: '14.55%', width: '64.77%', height: '85.43%' },
    bleed: true,
  },
];

export const experience = [
  {
    title: 'Product designer at Rebbix, OLX Group contractor',
    dates: 'Jul 2021 — Oct 2026',
    bullets: [
      'Designed both sides of Fixly, a home services marketplace in Poland',
      'Owned contractor monetization: credit packages and pricing',
      'Ran price A/B and fake door tests with ARPU as the primary metric',
      'Designed installment payments for OLX buyers',
      'Led discovery with shop owners: interviews and usability tests',
      'Shipped on Web, iOS and Android within the Nexus design system',
      'Adopted a prototype-first process with Lovable and Claude',
    ],
    summary:
      'Covered the full marketplace loop inside OLX Group, from client flows to contractor monetization, with pricing tests showing the mid-tier package out-earned the most expensive one.',
  },
  {
    title: 'SoftServe',
    dates: 'May 2016 - Jan 2021',
    bullets: [
      "Designed Overhaul's real-time supply chain visibility platform from scratch",
      'Built the core product as a map-first web app for live shipment data',
      'Prioritized what an operator needs to see first over showing everything',
      "Extended the platform into fleet management as the client's scope grew",
      'Designed a mobile app for long-haul truck drivers to accept loads',
      'Started People Excellence, an internal tool for building competency models',
      'Led a team of three designers from kick-off through delivery',
    ],
    summary:
      "Took Overhaul's logistics platform from a blank page to a suite for shippers, fleets and truck drivers, led a team of three designers, and started an internal competency tool on the side.",
  },
];

export const education = [
  {
    icon: 'graduation',
    name: 'Lviv National Academy of Arts',
    dates: 'Jul 2009 - Oct 2014',
    bullet: 'Graphic design Master degree',
  },
  {
    icon: 'graduation',
    name: 'LITS / Lviv IT School',
    dates: 'Apr 2015 - Jun 2015',
    bullet: 'UI/UX Design',
  },
  {
    icon: 'certificate',
    name: 'Projector Institute',
    dates: '2020',
    card: { theme: 'blue', logo: projectorLogo, logoWidth: 103, logoHeight: 47, kind: '🎓 Certificate', title: 'UX Research Course', year: '2020' },
  },
  {
    icon: 'certificate',
    name: 'Robot_dreams',
    dates: '2025',
    card: { theme: 'cream', logo: robotDreamsLogo, logoWidth: 59, logoHeight: 33, kind: '📚 Course', title: 'Product Hypothesis', year: '2025' },
  },
];
