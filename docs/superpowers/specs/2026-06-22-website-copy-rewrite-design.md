# Website Copy Rewrite — Marketing Voice, Dash-Free

**Date:** 2026-06-22
**Scope:** Rewrite user-facing marketing copy across the Email Pilots landing page.

## Goals

- Rewrite copy in a **punchy, high-energy marketing voice**: bolder, shorter hooks, more sales energy, light urgency.
- Remove **em dashes (—) and en dashes (–)** used as punctuation. Rewrite into natural flowing sentences.
- **Keep** hyphens inside real compounds and numbers: `7-day`, `60-sec`, `4.9/5`, `follow-ups`, `copy-paste`, `decision-makers`, `hand typed` (no hyphen), `one way` (no hyphen).

## Constraints (do NOT change)

- Numeric/product facts stay exact: `98.7%`, `2,000+`, `2,400+`, `€1.99/wk`, `≈ €0.28 / day`, `50 emails/day`, `5 accounts`, `7-day trial`, `~0%` bounce, `€140/mo`, `€500+/mo`, `€59/mo`, `~6 hrs / 100 emails`.
- Brand name: `Email Pilots`.
- Merge tags: `{{Name}}`, `{{Company}}`, `{{Co}}` unchanged.
- Functional microcopy (form errors, success states, status labels, mock terminal text) keeps its meaning.
- No code/markup/structure changes beyond the text strings. JSX spans, `<br>`, bold wrappers preserved.

## Files in scope

`src/components/`: Hero, HowItWorks, DontBcc, Deliverability, CapabilitiesUI, MultiAccountSupport, WhoItsFor, Comparison, Features, Pricing, Waitlist.
Out of scope (already clean / no copy change): Header, Footer, FAQ.

---

## Change Map (before → after)

### Hero.tsx
- Badge: `Works on your computer · Connect any email` → `Runs on your machine · Connects to any inbox`
- H1 line 1: `Personalized emails,` → `Emails they actually open,`
- H1 line 2: `sent from <span>your own inbox.</span>` (unchanged)
- Subhead (em dash): → `Email Pilots is your personal sending assistant. Connect Gmail or Outlook, drop in your contact list, and we send every message <span>one by one at a natural human pace</span>. The payoff: you land in the primary inbox, not the spam folder.`
- Primary CTA: `Join the Early Access Waitlist` → `Get Early Access Now`
- Secondary CTA: `Watch 60-sec demo` → `Watch the 60-sec demo`
- Chips: `Less than a coffee a week` → `Cheaper than your weekly coffee`; `No credit card to try` → `No card needed to start`; `Cancel anytime` (unchanged)
- Trust strip: `loved by 2,000+ solo senders` → `trusted by 2,000+ solo senders`
- Mockup/stat microcopy: unchanged.

### HowItWorks.tsx
- Sub: → `No DNS headaches. If you can send an email, you can launch a full campaign.`
- Step 1 (em dash): → `Securely link the email provider you already use. No API wrangling, no setup maze. It sends through the inbox you already trust.`
- Step 2: → `Upload a spreadsheet or add people by hand. Drop in variables like {{Name}} to personalize every message automatically, or write a custom note for anyone special.`
- Step 3 title (em dash): `Hit send — walk away` → `Hit send and walk away`
- Step 3 desc: → `Email Pilots paces every send like a human and stops the second something bounces. Kick back and watch it fly on the live dashboard.`

### DontBcc.tsx
- P1 (em dash): → `Blast 100 people on BCC and you basically book a one way ticket to spam. Write each one by hand and you burn hours you don't have.`
- P2 (em dash): → `Email Pilots sends every message on its own, with natural pauses in between, exactly like a human would. You handle real work while it handles the sending.`

### Deliverability.tsx
- Sub (em dash): → `Five safeguards guard your sender reputation so your messages actually get read, not buried under Promotions.`
- Intelligent Rate Limiting desc: → `Smart daily limits keep delivery steady and keep provider red flags away.`
- Verification desc: → `Checks every address before it sends, keeping your bounce rate near zero.`

### CapabilitiesUI.tsx
1. Local Privacy: → `Your data never leaves your device. We never store or sell your contact lists. Full stop.`
2. Spam Protection: → `We scan every email for spam triggers like ALL CAPS and broken links before it goes out, so you hit the inbox more often.`
3. Personalization: → `Drop in simple tags like {{Name}} to tailor every message, and auto attach a unique document for each recipient.`
4. Scheduling: → `Send when your prospects are actually awake. Randomized delays make every message look hand typed.`
5. Bounce Prevention: → `Quit babysitting your lists. We verify addresses up front and instantly stop sending to dead inboxes.`

### MultiAccountSupport.tsx
- P: → `Run all your outreach from one local command center. Connect up to 5 accounts, hit send, and let Email Pilots fire off your daily emails straight from your desktop.`

### WhoItsFor.tsx (persona desc)
1. Job Seekers: `Hit 50 hiring managers a week with a personal intro. Stop refreshing job boards and run your own search.`
2. Recruiters: `Reach top candidates without dropping thousands on LinkedIn Recruiter. Personalized follow-ups fire on their own.`
3. Freelancers: `Pitch local businesses on autopilot. Keep your calendar packed without the copy-paste grind.`
4. Community: `Personally invite early users, speakers, and members to your project without burning out before launch day.`
5. Agencies: `Scale client outreach without the overhead. Automated personal emails book you more meetings.`
6. Consultants: `Grow your practice by landing in front of decision-makers with sharp, tailored proposals.`
7. Founders: `Reach investors and early adopters directly and build real traction, minus the busywork.`
8. Sales Professionals: `Keep your pipeline full and close more deals. Timely, relevant follow-ups that actually get replies.`

### Comparison.tsx
- Sub (em dash): → `Most platforms charge a premium just to send cold email. You already pay for an inbox, so Email Pilots automates the whole thing for the price of one weekly coffee.`
- Footer line: → `Same inbox you already trust. Zero monthly bloat. <span>Unlimited emails included.</span>`

### Features.tsx
- Local privacy desc (em dash): → `Your contacts and lead lists never touch a cloud server. Everything runs on your machine, so your data stays yours. Full stop.`
- Deep personalization desc (em dash): → `Merge tags reshape every message on the fly, right down to a unique PDF or pitch deck for each recipient.`
- Clean bounced desc (em dash): → `Checks domains up front and instantly stops sending to dead inboxes. Zero manual cleanup.`

### Pricing.tsx
- CTA: `Start your subscription` → `Start Sending Today`

### Waitlist.tsx
- H2: `Get early access to the Email Pilots platform.` → `Be first on Email Pilots.`
- P: → `Email Pilots is in private beta right now. Hop on the waitlist and lock in your spot as we open the doors.`

---

## Verification

- Grep the 11 files for `—` and `–` (em/en dash) after edit: expect zero matches.
- `npm run build` (tsc + vite) passes: no string-edit breakage of JSX.
- Visual spot check: bold/`<span>`/`<br>` wrappers intact, merge tags render literally.
