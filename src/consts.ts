// Brand facts carried from Teleforce's public site. Do not add claims.

export const SITE = {
  name: 'Teleforce',
  url: 'https://myteleforce.com',
  title: 'Nearshore BPO for U.S. Companies | Teleforce',
  description:
    'Teleforce is a 30-year Latin America BPO for U.S. companies. Bilingual English/Spanish customer service, appointment setting, data entry, sales lead generation, SDR/BDR, tech support, and billing and account servicing.',
  tagline: 'Bilingual nearshore BPO · English/Spanish · U.S. hours',
  backbone: '30 years of Fortune 500 operating history',
} as const;

// FormSubmit alias — the raw inbox stays off the page. The first submission
// triggers a one-time confirmation email; after that, deliveries are automatic.
export const FORM_ALIAS = 'b51bbe084a1d3308de0df272e7e8dd49';
export const FORM_ACTION = `https://formsubmit.co/${FORM_ALIAS}`;

export const STATS = [
  { n: '30+', k: 'Years operating' },
  { n: '20+', k: 'Industries served' },
  { n: 'Fortune 500', k: 'Operating history' },
] as const;

export const LOGOS = [
  'UPS',
  'American Express',
  'SAP',
  'Procter & Gamble',
  'Nike',
  'Maersk',
  'Carnival',
  'Avis',
  'Aeroméxico',
  'Ternium',
  'Intertek',
  'Cemex',
] as const;

export const NAV_LINKS = [
  { href: '/services/', label: 'Services' },
  { href: '/about/', label: 'About' },
  { href: '/careers/', label: 'Careers' },
  { href: '/blog/', label: 'Signal' },
] as const;

export const CATEGORIES = [
  'Customer Service',
  'Tech Support',
  'Data Entry',
  'Appointment Setting',
  'Account Servicing',
  'Sales & Lead Gen',
  'Nearshore',
] as const;
export type Category = (typeof CATEGORIES)[number];

export interface Service {
  slug: string;
  name: string;
  navLabel: string;
  short: string;
  tagline: string;
  intro: string;
  included: string[];
  category: Category;
  ic: string;
}

export const SERVICES: Service[] = [
  {
    slug: 'customer-service',
    name: 'Customer Service',
    navLabel: 'Customer Service',
    ic: 'VOICE · CHAT · EMAIL',
    short: 'Bilingual inbound support that sounds like your brand.',
    tagline: 'Support that sounds like your brand — in both languages.',
    intro:
      'Inbound customer support across phone, live chat, and email — native English and Spanish from one seat, on U.S. business hours. Named agents trained on your product and your voice, who your customers can’t tell from in-house staff.',
    included: [
      'Voice, live chat, and email support on your tools and your SLAs',
      'Native English/Spanish from a single seat — no language routing',
      'Named agents trained on your product as brand staff',
      'QA, reporting, and a named point of contact from day one',
      'U.S.-hours coverage with same-day feedback loops',
    ],
    category: 'Customer Service',
  },
  {
    slug: 'data-entry',
    name: 'Data Entry',
    navLabel: 'Data Entry',
    ic: 'BACK OFFICE',
    short: 'Accurate back-office data work, off your plate.',
    tagline: 'Accurate back-office data work, off your plate.',
    intro:
      'Order entry, CRM hygiene, document processing, and data cleanup handled accurately by a managed bilingual team — so your in-house people stop spending nights in spreadsheets.',
    included: [
      'Order, claim, and form entry',
      'CRM and database hygiene / de-duplication',
      'Document and PDF processing and digitization',
      'QA and double-key verification for accuracy',
      'Flexible volume — scale up for peaks, down for lulls',
    ],
    category: 'Data Entry',
  },
  {
    slug: 'appointment-setting',
    name: 'Appointment Setting',
    navLabel: 'Appointment Setting',
    ic: 'INBOUND · OUTBOUND',
    short: 'More booked appointments, fewer no-shows.',
    tagline: 'A fuller calendar — and fewer no-shows.',
    intro:
      'Inbound and outbound scheduling for sales and service teams. Bilingual reps qualify, book, and confirm — filling your calendar with the right prospects and reminding them so they show up.',
    included: [
      'Outbound and inbound appointment scheduling',
      'Lead qualification before the booking',
      'Confirmations and reminders to cut no-shows',
      'Calendar and CRM integration',
      'Bilingual outreach for English- and Spanish-speaking prospects',
    ],
    category: 'Appointment Setting',
  },
  {
    slug: 'sales-lead-generation',
    name: 'Sales Lead Generation',
    navLabel: 'Sales & Lead Gen',
    ic: 'LISTS · LEADS',
    short: 'A bilingual top-of-funnel engine — lists, outreach, qualified leads.',
    tagline: 'A bilingual pipeline engine for your sales team.',
    intro:
      'Outbound prospecting, list building, and lead qualification that feeds your closers a steady stream of qualified, bilingual-ready leads — including the Hispanic market an English-only team can’t reach.',
    included: [
      'Outbound prospecting and cold outreach',
      'Lead qualification and scoring before handoff',
      'List building and CRM enrichment',
      'Warm handoff or appointment booking for your closers',
      'Bilingual outreach into English- and Spanish-speaking markets',
    ],
    category: 'Sales & Lead Gen',
  },
  {
    slug: 'sdr-bdr',
    name: 'SDR / BDR Teams',
    navLabel: 'SDR / BDR',
    ic: 'OUTBOUND · MEETINGS',
    short: 'Dedicated outbound reps who book qualified meetings.',
    tagline: 'Dedicated SDRs and BDRs who fill your pipeline with qualified meetings.',
    intro:
      'Dedicated, bilingual nearshore SDRs and BDRs who own your outbound — prospecting, sequencing, calling, and qualifying — and hand your closers booked, sales-ready meetings. Reps trained on your ICP and your pitch, on U.S. hours.',
    included: [
      'Dedicated outbound reps, ramped on your ICP and pitch',
      'Multi-touch sequences across call, email, and LinkedIn',
      'Lead qualification against your criteria before handoff',
      'Booked, confirmed meetings on your closers’ calendars',
      'Bilingual outreach into English- and Spanish-speaking markets',
      'CRM logging, reporting, and a named team lead',
    ],
    category: 'Sales & Lead Gen',
  },
];

export const SERVICES_LEGACY: Service[] = [
  {
    slug: 'tech-support',
    name: 'Tech Support',
    navLabel: 'Tech Support',
    ic: 'TIER 1 · TIER 2',
    short: 'Tier 1–2 technical support that resolves, not just deflects.',
    tagline: 'Technical support that actually resolves — in two languages.',
    intro:
      'Bilingual Tier 1 and Tier 2 technical support for software and hardware products — troubleshooting, onboarding, and product help from agents who can resolve the issue, not just route the ticket.',
    included: [
      'Tier 1–2 troubleshooting across phone, chat, and email',
      'Ticketing, triage, and clean escalation paths',
      'Product onboarding and how-to guidance',
      'Knowledge-base authoring and upkeep',
      'Bilingual coverage on U.S. hours',
    ],
    category: 'Tech Support',
  },
  {
    slug: 'billing-account-servicing',
    name: 'Billing & Account Servicing',
    navLabel: 'Account Servicing',
    ic: 'FIRST-PARTY · 1–60 DAYS',
    short: 'Keep accounts current — in your brand’s voice.',
    tagline: 'Keep accounts current, without souring the relationship.',
    intro:
      'First-party, pre-delinquency and early-stage account servicing, conducted in your name — billing questions, payment reminders, and friendly early outreach that keep accounts current before they age. Native-Spanish reach to Hispanic customers, relationship-preserving by design.',
    included: [
      'Billing and payment-question support',
      'Pre-delinquency payment reminders — first-party, in your name',
      'Early-stage (1–60 day) account servicing',
      'Native-Spanish outreach to Hispanic accounts',
      'Consent-aware outbound, set up at onboarding',
    ],
    category: 'Account Servicing',
  },
];

export const ALL_SERVICES: Service[] = [...SERVICES, ...SERVICES_LEGACY];

export const PHONE = '1-866-252-3961';
export const PHONE_HREF = 'tel:+18662523961';

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  img: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'I’m on the East Coast — nearshore Teleforce beats the offshore setups I tried. Same-day hours, not overnight lag.',
    name: 'Jessica Simon',
    company: 'Bioceramics',
    img: '/brand/customers/simon.jpg',
    avatar: '/brand/customers/simon-avatar.jpg',
  },
];
