// Single source of truth for copy, pricing, and the full feature list.
// Positioning: a PERSONAL outreach + follow-up assistant that sends from your
// own mailbox. Deliberately NOT framed as cold-email / bulk / "anti-ban" — that
// language risks payment-processor bans and misreads as spam tooling.

/** Paste a real Stripe Payment Link / Lemon Squeezy / Gumroad URL here.
 *  Defaults to the on-page pricing anchor until you have one. */
export const CHECKOUT_URL = '#pricing'

export const PRICE = { amount: '$2.9', period: 'week', trialDays: 7 }

export const NAV = [
  { label: 'How it works', href: '#how' },
  { label: 'Features', href: '#features' },
  { label: 'Deliverability', href: '#deliverability' },
  { label: 'Pricing', href: '#pricing' },
]

export const HERO = {
  kicker: '✈ Personal outreach, automated',
  title: ['Personal outreach,', 'on autopilot.'],
  sub: 'Send personalized emails and follow-ups from your own mailbox — scheduled, naturally paced, and reply-aware. Private by default: your contacts and credentials never leave your computer.',
  trust: 'Sensible sending limits keep your mailbox healthy and your messages welcome.',
}

export const STATS = [
  { value: 'Your', label: 'mailbox — Gmail, Outlook or custom' },
  { value: '5', label: 'accounts, organized in one place' },
  { value: '100%', label: 'local — your data stays on your device' },
  { value: '0', label: 'cloud servers, zero per-contact fees' },
]

// How it works — 3 plain steps.
export const HOW = [
  {
    step: '01',
    title: 'Connect your mailbox',
    body: 'Sign in with your own Gmail, Outlook, or custom SMTP. Your password is encrypted on your device — it never touches a server.',
  },
  {
    step: '02',
    title: 'Add contacts & write once',
    body: 'Import a CSV or add people by hand, personalize with merge fields, and set when each message should go out. Run the pre-flight check to confirm you’re ready.',
  },
  {
    step: '03',
    title: 'Let the copilot follow up',
    body: 'It sends on schedule at a natural pace, follows up automatically, and stops the instant someone replies — so you only step in for real conversations.',
  },
]

// Reframed from "anti-ban" to responsible-sending / deliverability hygiene.
export const SAFEGUARDS = [
  { concern: 'Sending too much, too fast', guard: 'Daily and hourly sending limits you control, enforced precisely' },
  { concern: 'New mailboxes straining', guard: 'Gradual ramp-up so a fresh account eases into volume' },
  { concern: 'Emailing people who opted out', guard: 'Automatic do-not-contact list for opt-outs and bounces' },
  { concern: 'Unnatural sending bursts', guard: 'Natural spacing and timing between every send' },
  { concern: 'Pestering someone who replied', guard: 'Follow-ups stop automatically the moment they respond' },
  { concern: 'Credentials at risk', guard: 'Passwords encrypted on your device, never in the cloud' },
]

// Deliverability section points.
export const DELIVERABILITY = {
  title: 'Built to stay welcome in the inbox.',
  sub: 'Good sending habits, handled for you — so the people you actually mean to reach actually hear from you.',
  points: [
    { title: 'Reads like a real person', body: 'Defaults to a personal 1:1 style — plain, personalized messages from your own name and address, not a templated blast.' },
    { title: 'Respects sensible limits', body: 'Stays within healthy daily volumes and paces sends naturally, the way a careful human would.' },
    { title: 'Honors every opt-out', body: 'One-click unsubscribe support and a permanent do-not-contact list keep you respectful and compliant.' },
    { title: 'A pre-flight check before you send', body: 'A built-in review flags anything that could hurt deliverability before a single message leaves.' },
  ],
}

export type FeatureGroup = { title: string; blurb: string; items: string[] }

export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    title: 'Sending',
    blurb: 'Personal email straight from your own mailbox.',
    items: [
      'Send via Gmail, Outlook, or any custom SMTP',
      'Rich HTML with an automatic plain-text version',
      'Your real name and address on every message',
      'Merge fields ({{name}}) for genuine personalization',
      'Per-recipient attachments with custom names',
      'Practice mode — send a copy to yourself first',
    ],
  },
  {
    title: 'Responsible sending',
    blurb: 'Sensible limits and pacing that protect your sender reputation.',
    items: [
      'Daily, hourly, and per-recipient sending limits',
      'Gradual ramp-up for newer mailboxes',
      'Natural spacing and timing between sends',
      'Stops cleanly when you reach your own limits',
      'Per-recipient daily cap',
      'Attachment-size guardrails',
    ],
  },
  {
    title: 'Multiple mailboxes',
    blurb: 'Keep several accounts organized in one place.',
    items: [
      'Your main mailbox plus up to 5 more',
      'Each account kept separate and tidy',
      'Independent limits per account',
      'Choose which account a contact is emailed from',
    ],
  },
  {
    title: 'Scheduling',
    blurb: 'Per-contact send times, not one big blast.',
    items: [
      'Pick the days and times for each contact',
      'Natural timing jitter so nothing looks robotic',
      'Today’s schedule on the dashboard',
    ],
  },
  {
    title: 'Follow-up sequences',
    blurb: 'Polite, reply-aware follow-ups that know when to stop.',
    items: [
      'Multi-step sequences with a wait between steps',
      'Stops automatically the moment they reply',
      'Per-step subject and message',
      'Retries a step later if you were at your limit',
    ],
  },
  {
    title: 'Reply tracking',
    blurb: 'Knows who answered so follow-ups behave.',
    items: [
      'Read-only inbox checks for replies',
      'Lightweight — never re-scans old mail',
      'Reply-rate insights per account',
      'Powers the “stop on reply” behavior',
    ],
  },
  {
    title: 'Lists & campaigns',
    blurb: 'Group contacts and give each group its own voice.',
    items: [
      'Organize contacts into named campaigns',
      'Per-campaign default subject and template',
      'Sensible precedence: contact > campaign > global',
    ],
  },
  {
    title: 'Contacts & CSV',
    blurb: 'Bring your own list without the spreadsheet pain.',
    items: [
      'CSV import with automatic column mapping',
      'Duplicate and invalid-address skipping',
      'Keeps every column as a merge variable',
      'Address validation (format + domain check)',
    ],
  },
  {
    title: 'Opt-out handling',
    blurb: 'Stay respectful, automatically.',
    items: [
      'Permanent do-not-contact list',
      'Auto-adds opt-outs and hard bounces',
      'Clear reason recorded for each entry',
      'Shared across every account',
    ],
  },
  {
    title: 'Deliverability & compliance',
    blurb: 'Land where you’re meant to, on the right side of the rules.',
    items: [
      'A pre-flight content review before you send',
      'Unsubscribe footer + one-click List-Unsubscribe',
      'Personal 1:1 style by default',
    ],
  },
  {
    title: 'Privacy & security',
    blurb: 'Your contacts and credentials never leave your laptop.',
    items: [
      '100% local desktop app — no cloud, no servers',
      'Credentials encrypted with your OS keychain',
      'Passwords never shown back in the app',
      'Sign-out wipes every stored secret',
    ],
  },
  {
    title: 'Dashboard',
    blurb: 'A cockpit that tells you you’re ready to go.',
    items: [
      'Pre-flight readiness check before any send',
      'Live usage against your own limits',
      'Sent and reply counts, per account',
      'Today’s schedule at a glance',
    ],
  },
]

// Who it's for — legitimate, permission-based personas.
export const WHO_FOR = [
  { who: 'Founders', body: 'Reach the partners, investors, and early customers you already have a reason to email — and actually follow up.' },
  { who: 'Recruiters', body: 'Stay in touch with candidates personally, on a schedule, without a candidate ever slipping through the cracks.' },
  { who: 'Job-seekers', body: 'Send thoughtful, personalized applications and polite follow-ups from your own inbox.' },
  { who: 'Freelancers & agencies', body: 'Nurture warm leads and past clients with personal check-ins that don’t feel automated.' },
]

// Comparison — no cold-email competitor names, no "vs spam" framing.
export const COMPARISON = [
  {
    them: 'vs email marketing platforms',
    point: 'Newsletter tools are built for one-to-many blasts from a shared sending domain. Email Pilots sends personal, 1:1 messages from your own address.',
  },
  {
    them: 'vs cloud outreach apps',
    point: 'They keep your contacts on their servers and bill per contact. Here your list and credentials stay on your machine — one simple price.',
  },
  {
    them: 'vs doing it by hand',
    point: 'Schedule, personalize, follow up, and track replies automatically — without living inside your inbox all day.',
  },
]

export const PRICING_INCLUDES = [
  'Sensible daily limits to protect your mailbox',
  'Up to 5 accounts (Gmail / Outlook / custom)',
  'Scheduling, personalization & merge fields',
  'Reply-aware follow-up sequences',
  'CSV import, lists & opt-out handling',
  '100% local — your data never leaves your machine',
]

export const FAQ = [
  { q: 'Is this a bulk or spam tool?', a: 'No. Email Pilots is for personal, permission-based email you have a genuine reason to send — to your own contacts, from your own mailbox. It defaults to a personal 1:1 style, supports one-click unsubscribe, and keeps a do-not-contact list. It is not built for buying lists or blasting strangers.' },
  { q: 'Will it keep my mailbox in good standing?', a: 'That’s the whole point of the sending limits, gradual ramp-up, and natural pacing: to send the way a careful person would, stay within healthy volumes, and keep your messages welcome.' },
  { q: 'Where does my data live?', a: 'Entirely on your computer. There is no cloud backend — your contact list and credentials never leave your machine, and passwords are encrypted with your operating system’s keychain.' },
  { q: 'Which email providers work?', a: 'Anything that uses standard email protocols — Gmail, Outlook / Microsoft 365, and custom domains. Reply tracking uses a standard read-only inbox check.' },
  { q: 'How does billing work?', a: `${PRICE.amount}/week, everything included, cancel anytime. It starts with a ${PRICE.trialDays}-day trial.` },
]

export const FINAL = {
  title: 'Cleared for takeoff.',
  sub: 'Set up your outreach once, schedule it, and let the copilot handle the follow-ups — while you focus on the replies that matter.',
}

// Real app screenshots (captured into /public/shots by scripts/capture-shots.mjs).
export const SHOTS = [
  { src: 'shots/dashboard.png', label: 'Dashboard', caption: 'Pre-flight check, live usage, and today’s schedule at a glance.' },
  { src: 'shots/sequences.png', label: 'Sequences', caption: 'Reply-aware follow-up steps, built in minutes.' },
  { src: 'shots/recipients.png', label: 'Contacts', caption: 'Import, personalize, and schedule per contact.' },
  { src: 'shots/accounts.png', label: 'Accounts', caption: 'Keep several mailboxes organized in one place.' },
]

// --- Brand logo slot ---------------------------------------------------------
// Drop your asset at landing/public/logo.svg and set logoSrc to '/logo.svg'.
// While these are empty, <Logo> renders an animated wordmark fallback.
export const BRAND = {
  name: 'Email Pilots',
  logoSrc: '',      // e.g. '/logo.svg'
  logoDarkSrc: '',  // optional variant for dark backgrounds, e.g. '/logo-dark.svg'
}

// Current single plan, relabeled so Business & Teams reads as a future tier.
export const PLAN = {
  name: 'Solo',
  tagline: 'One person, your own mailbox.',
}

// HUD chapter metadata. ids match the section[id]s used for nav anchors.
export const CHAPTERS = [
  { id: 'top', code: '00', name: 'Preflight' },
  { id: 'how', code: '01', name: 'Flight plan' },
  { id: 'deliverability', code: '02', name: 'Takeoff' },
  { id: 'features', code: '03', name: 'The cockpit' },
  { id: 'landing', code: '04', name: 'Landing & reply' },
  { id: 'why', code: '05', name: 'Why fly with us' },
  { id: 'business', code: '06', name: 'Next frontier' },
  { id: 'pricing', code: '07', name: 'Boarding pass' },
  { id: 'faq', code: '08', name: 'Final approach' },
] as const

// --- Coming soon: Business & Teams (NOT yet available) -----------------------
export const COMING_SOON = {
  badge: 'Coming soon · not yet available',
  eyebrow: 'On the horizon',
  title: 'Built for Business & Teams.',
  sub: 'A longer-haul tier we’re charting now. Planned, not yet available — and we don’t promise dates. Leave your address and we’ll tell you when it boards.',
  waitlistHref: 'mailto:hello@emailpilots.app?subject=Business%20%26%20Teams%20waitlist',
  waitlistLabel: 'Get notified when Business & Teams launches',
  items: [
    { title: 'SSO sign-in', body: 'One-click Google & Microsoft sign-in (OAuth2) — no app passwords to generate.' },
    { title: 'Managed domain authentication', body: 'Guided SPF, DKIM and DMARC setup, so your domain is verified for you.' },
    { title: 'Open & click analytics', body: 'See opens and click-throughs per message, with privacy-respecting measurement.' },
    { title: 'Team workspace + secure sync', body: 'Share campaigns and contacts across a team, synced securely across devices.' },
    { title: 'Visual email builder', body: 'Design emails with drag-and-drop blocks — no HTML required.' },
  ],
}
