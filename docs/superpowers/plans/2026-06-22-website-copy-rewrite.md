# Website Copy Rewrite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite landing-page marketing copy in a punchy high-energy voice and remove every em/en dash from rendered text.

**Architecture:** Pure string edits inside existing React/TSX components. No structural, prop, logic, or styling changes. Each task edits one component file, verifies that file is free of em/en dashes, then commits.

**Tech Stack:** React 19, TypeScript, Vite 8, Tailwind 4, motion/react. Build = `npm run build` (runs `tsc && vite build`).

## Global Constraints

- Voice: punchy, high-energy, natural. Sales energy, short hooks. No hype that changes facts.
- Remove ALL em dashes `—` (U+2014) and en dashes `–` (U+2013) from rendered text. Replace with natural sentences or, in fixed-format labels, the middot `·` (U+00B7).
- KEEP hyphens in compounds/numbers: `7-day`, `60-sec`, `4.9/5`, `follow-ups`, `copy-paste`, `decision-makers`.
- Numeric/product facts unchanged: `98.7%`, `2,000+`, `2,400+`, `€1.99/wk`, `≈ €0.28 / day`, `50 emails/day`, `5 accounts`, `7-day trial`, `~0%`, `€140/mo`, `€500+/mo`, `€59/mo`, `~6 hrs / 100 emails`.
- Brand `Email Pilots`, merge tags `{{Name}}` `{{Company}}` `{{Co}}` unchanged.
- Functional microcopy (form errors, success/status labels, mock terminal text) keeps its meaning.
- No JSX/markup/className/`<br>`/`<span>`/bold-wrapper changes beyond the text strings.
- Per-file dash check command (expect NO output):
  `grep -nP "\xe2\x80\x93|\xe2\x80\x94" src/components/<File>.tsx`
  (If `grep -P` is unavailable, use the Grep tool with pattern `—|–` on the file.)
- Branch: `marketing-copy-rewrite` (already checked out and pushed).

---

### Task 1: Hero.tsx

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Edit badge (line ~37)**
Old: `Works on your computer · Connect any email`
New: `Runs on your machine · Connects to any inbox`

- [ ] **Step 2: Edit H1 line 1 (line ~41)**
Old: `Personalized emails,{' '}`
New: `Emails they actually open,{' '}`
(Leave line 2 `sent from <span ...>your own inbox.</span>` unchanged.)

- [ ] **Step 3: Edit subhead (line ~46), removes em dash**
Old: `Email Pilots is your personal sending assistant. Connect your Gmail or Outlook account, upload your contact list, and we'll send each message individually — <span className="font-semibold text-ink">paced naturally</span>. This ensures your emails land in the primary inbox, avoiding the spam folder.`
New: `Email Pilots is your personal sending assistant. Connect Gmail or Outlook, drop in your contact list, and we send every message <span className="font-semibold text-ink">one by one at a natural human pace</span>. The payoff: you land in the primary inbox, not the spam folder.`

- [ ] **Step 4: Edit primary CTA (line ~51)**
Old: `Join the Early Access Waitlist`
New: `Get Early Access Now`

- [ ] **Step 5: Edit secondary CTA (line ~56)**
Old: `Watch 60-sec demo`
New: `Watch the 60-sec demo`

- [ ] **Step 6: Edit chips (lines ~61-62)**
Old: `Less than a coffee a week` → New: `Cheaper than your weekly coffee`
Old: `No credit card to try` → New: `No card needed to start`
(`Cancel anytime` unchanged.)

- [ ] **Step 7: Edit mockup tab label (line ~81), removes em dash**
Old: `Email Pilots — Campaign: Q3 Outreach`
New: `Email Pilots · Campaign: Q3 Outreach`

- [ ] **Step 8: Edit trust strip (line ~167)**
Old: `loved by 2,000+ solo senders`
New: `trusted by 2,000+ solo senders`

- [ ] **Step 9: Verify no em/en dash in file**
Run: `grep -nP "\xe2\x80\x93|\xe2\x80\x94" src/components/Hero.tsx`
Expected: no output.

- [ ] **Step 10: Commit**
```bash
git add src/components/Hero.tsx
git commit -m "copy: rewrite Hero in punchy voice, drop em dash"
```

---

### Task 2: HowItWorks.tsx

**Files:**
- Modify: `src/components/HowItWorks.tsx`

- [ ] **Step 1: Edit sub (line ~19)**
Old: `No complex DNS setup required. If you can send an email, you can launch a campaign.`
New: `No DNS headaches. If you can send an email, you can launch a full campaign.`

- [ ] **Step 2: Edit Step 1 desc (line ~38), removes em dash**
Old: `Securely link your existing email provider. There's no complicated API setup — it sends reliably through the inbox you already trust.`
New: `Securely link the email provider you already use. No API wrangling, no setup maze. It sends through the inbox you already trust.`

- [ ] **Step 3: Edit Step 2 desc (line ~53)** (keep the `{{Name}}` span markup intact)
Old text run: `Upload a spreadsheet or add recipients manually. Use variables like ` ... ` to automatically personalize every message, or save a specific message for them to be sent automatically.`
New: replace the leading run with `Upload a spreadsheet or add people by hand. Drop in variables like ` and the trailing run with ` to personalize every message automatically, or write a custom note for anyone special.`

- [ ] **Step 4: Edit Step 3 title (line ~67), removes em dash**
Old: `Hit send — walk away`
New: `Hit send and walk away`

- [ ] **Step 5: Edit Step 3 desc (line ~68)**
Old: `Email Pilots paces every message naturally and stops on bounces. Watch it fly from a live dashboard.`
New: `Email Pilots paces every send like a human and stops the second something bounces. Kick back and watch it fly on the live dashboard.`

- [ ] **Step 6: Verify**
Run: `grep -nP "\xe2\x80\x93|\xe2\x80\x94" src/components/HowItWorks.tsx` — expect no output.

- [ ] **Step 7: Commit**
```bash
git add src/components/HowItWorks.tsx
git commit -m "copy: rewrite HowItWorks in punchy voice, drop em dash"
```

---

### Task 3: DontBcc.tsx

**Files:**
- Modify: `src/components/DontBcc.tsx`

- [ ] **Step 1: Edit P1 (line ~65)**
Old: `Sending a mass BCC email almost guarantees you'll land in the spam folder. But writing them individually takes hours of manual work.`
New: `Blast 100 people on BCC and you basically book a one way ticket to spam. Write each one by hand and you burn hours you don't have.`

- [ ] **Step 2: Edit P2 (line ~66), removes em dash**
Old: `Email Pilots sends each message individually, with natural pauses between sends — mimicking human behavior while you focus on other work.`
New: `Email Pilots sends every message on its own, with natural pauses in between, exactly like a human would. You handle real work while it handles the sending.`

- [ ] **Step 3: Verify**
Run: `grep -nP "\xe2\x80\x93|\xe2\x80\x94" src/components/DontBcc.tsx` — expect no output.

- [ ] **Step 4: Commit**
```bash
git add src/components/DontBcc.tsx
git commit -m "copy: rewrite DontBcc in punchy voice, drop em dash"
```

---

### Task 4: Deliverability.tsx

**Files:**
- Modify: `src/components/Deliverability.tsx`

- [ ] **Step 1: Edit sub (line ~105), removes em dash**
Old: `Five safeguards protect your sender reputation so your messages actually get read — not buried under Promotions.`
New: `Five safeguards guard your sender reputation so your messages actually get read, not buried under Promotions.`

- [ ] **Step 2: Edit Rate Limiting desc (line ~156)**
Old: `Controlled daily limits ensure consistent delivery without triggering provider flags.`
New: `Smart daily limits keep delivery steady and keep provider red flags away.`

- [ ] **Step 3: Edit Verification desc (line ~201)**
Old: `Validates email addresses before sending to maintain an almost zero bounce rate.`
New: `Checks every address before it sends, keeping your bounce rate near zero.`

- [ ] **Step 4: Verify**
Run: `grep -nP "\xe2\x80\x93|\xe2\x80\x94" src/components/Deliverability.tsx` — expect no output.

- [ ] **Step 5: Commit**
```bash
git add src/components/Deliverability.tsx
git commit -m "copy: rewrite Deliverability in punchy voice, drop em dash"
```

---

### Task 5: CapabilitiesUI.tsx

**Files:**
- Modify: `src/components/CapabilitiesUI.tsx` (the `capabilities` array, lines ~10-41)

- [ ] **Step 1: Edit cap 0 description**
Old: `Your data stays securely on your device. We never store or monetize your contact lists, ensuring complete privacy.`
New: `Your data never leaves your device. We never store or sell your contact lists. Full stop.`

- [ ] **Step 2: Edit cap 1 description**
Old: `Before sending, we check your email for common spam triggers (like ALL CAPS or broken links) to maximize deliverability.`
New: `We scan every email for spam triggers like ALL CAPS and broken links before it goes out, so you hit the inbox more often.`

- [ ] **Step 3: Edit cap 2 description**
Old: `Use simple tags like {{Name}} to customize every message. You can even automatically attach unique documents for each recipient.`
New: `Drop in simple tags like {{Name}} to tailor every message, and auto attach a unique document for each recipient.`

- [ ] **Step 4: Edit cap 3 description**
Old: `Schedule emails to send when your prospects are active. We add randomized delays so the outreach appears completely manual.`
New: `Send when your prospects are actually awake. Randomized delays make every message look hand typed.`

- [ ] **Step 5: Edit cap 4 description**
Old: `Stop wasting time cleaning lists. We verify email addresses before sending and automatically halt outreach to invalid addresses.`
New: `Quit babysitting your lists. We verify addresses up front and instantly stop sending to dead inboxes.`

- [ ] **Step 6: Verify**
Run: `grep -nP "\xe2\x80\x93|\xe2\x80\x94" src/components/CapabilitiesUI.tsx` — expect no output.

- [ ] **Step 7: Commit**
```bash
git add src/components/CapabilitiesUI.tsx
git commit -m "copy: rewrite Capabilities in punchy voice"
```

---

### Task 6: MultiAccountSupport.tsx

**Files:**
- Modify: `src/components/MultiAccountSupport.tsx`

- [ ] **Step 1: Edit paragraph (line ~96-98)**
Old: `Manage your entire outreach from a single local command center. Sync up to 5 accounts, hit send, and let Email Pilots securely handle your daily sending right from your desktop.`
New: `Run all your outreach from one local command center. Connect up to 5 accounts, hit send, and let Email Pilots fire off your daily emails straight from your desktop.`

- [ ] **Step 2: Verify**
Run: `grep -nP "\xe2\x80\x93|\xe2\x80\x94" src/components/MultiAccountSupport.tsx` — expect no output.

- [ ] **Step 3: Commit**
```bash
git add src/components/MultiAccountSupport.tsx
git commit -m "copy: rewrite MultiAccountSupport in punchy voice"
```

---

### Task 7: WhoItsFor.tsx

**Files:**
- Modify: `src/components/WhoItsFor.tsx` (the `personas` array, lines ~10-83; edit only the `desc` fields)

- [ ] **Step 1: Edit each persona desc**
- 01 Job Seekers → `Hit 50 hiring managers a week with a personal intro. Stop refreshing job boards and run your own search.`
- 02 Recruiters → `Reach top candidates without dropping thousands on LinkedIn Recruiter. Personalized follow-ups fire on their own.`
- 03 Freelancers → `Pitch local businesses on autopilot. Keep your calendar packed without the copy-paste grind.`
- 04 Community → `Personally invite early users, speakers, and members to your project without burning out before launch day.`
- 05 Agencies → `Scale client outreach without the overhead. Automated personal emails book you more meetings.`
- 06 Consultants → `Grow your practice by landing in front of decision-makers with sharp, tailored proposals.`
- 07 Founders → `Reach investors and early adopters directly and build real traction, minus the busywork.`
- 08 Sales Professionals → `Keep your pipeline full and close more deals. Timely, relevant follow-ups that actually get replies.`

- [ ] **Step 2: Verify**
Run: `grep -nP "\xe2\x80\x93|\xe2\x80\x94" src/components/WhoItsFor.tsx` — expect no output.

- [ ] **Step 3: Commit**
```bash
git add src/components/WhoItsFor.tsx
git commit -m "copy: rewrite WhoItsFor personas in punchy voice"
```

---

### Task 8: Comparison.tsx

**Files:**
- Modify: `src/components/Comparison.tsx`

- [ ] **Step 1: Edit sub (line ~29), removes em dash**
Old: `Most platforms charge a premium to send cold emails. You already pay for an email provider — Email Pilots simply automates your outreach for the price of a weekly coffee.`
New: `Most platforms charge a premium just to send cold email. You already pay for an inbox, so Email Pilots automates the whole thing for the price of one weekly coffee.`

- [ ] **Step 2: Edit footer line (line ~122)** (keep the `<span>` bold wrapper on the last sentence)
Old run: `Same inbox you already trust. None of the monthly bills. ` + span `Unlimited emails included.`
New: leading run → `Same inbox you already trust. Zero monthly bloat. ` ; span text `Unlimited emails included.` unchanged.

- [ ] **Step 3: Verify**
Run: `grep -nP "\xe2\x80\x93|\xe2\x80\x94" src/components/Comparison.tsx` — expect no output.

- [ ] **Step 4: Commit**
```bash
git add src/components/Comparison.tsx
git commit -m "copy: rewrite Comparison in punchy voice, drop em dash"
```

---

### Task 9: Features.tsx

**Files:**
- Modify: `src/components/Features.tsx`

- [ ] **Step 1: Edit local-privacy desc (line ~35), removes em dash**
Old: `Your contacts and lead lists never touch a cloud server. Everything runs on your machine — your proprietary data stays yours, full stop.`
New: `Your contacts and lead lists never touch a cloud server. Everything runs on your machine, so your data stays yours. Full stop.`

- [ ] **Step 2: Edit personalization desc (line ~55), removes em dash**
Old: `Merge tags adapt every message on the fly — even attaching a unique PDF or pitch deck per recipient.`
New: `Merge tags reshape every message on the fly, right down to a unique PDF or pitch deck for each recipient.`

- [ ] **Step 3: Edit clean-bounced desc (line ~95), removes em dash**
Old: `Checks domains in advance and instantly stops sending to dead inboxes — no manual cleanup.`
New: `Checks domains up front and instantly stops sending to dead inboxes. Zero manual cleanup.`

- [ ] **Step 4: Verify**
Run: `grep -nP "\xe2\x80\x93|\xe2\x80\x94" src/components/Features.tsx` — expect no output.

- [ ] **Step 5: Commit**
```bash
git add src/components/Features.tsx
git commit -m "copy: rewrite Features in punchy voice, drop em dash"
```

---

### Task 10: Pricing.tsx

**Files:**
- Modify: `src/components/Pricing.tsx`

- [ ] **Step 1: Edit CTA (line ~79)**
Old: `Start your subscription`
New: `Start Sending Today`

- [ ] **Step 2: Verify**
Run: `grep -nP "\xe2\x80\x93|\xe2\x80\x94" src/components/Pricing.tsx` — expect no output.

- [ ] **Step 3: Commit**
```bash
git add src/components/Pricing.tsx
git commit -m "copy: punch up Pricing CTA"
```

---

### Task 11: Waitlist.tsx

**Files:**
- Modify: `src/components/Waitlist.tsx`

- [ ] **Step 1: Edit H2 (line ~52)**
Old: `Get early access to the Email Pilots platform.`
New: `Be first on Email Pilots.`

- [ ] **Step 2: Edit P (line ~55)**
Old: `Email Pilots is currently in private beta. Join the waitlist to secure your spot as we open up access for new users.`
New: `Email Pilots is in private beta right now. Hop on the waitlist and lock in your spot as we open the doors.`

- [ ] **Step 3: Verify**
Run: `grep -nP "\xe2\x80\x93|\xe2\x80\x94" src/components/Waitlist.tsx` — expect no output.

- [ ] **Step 4: Commit**
```bash
git add src/components/Waitlist.tsx
git commit -m "copy: rewrite Waitlist headline and intro in punchy voice"
```

---

### Task 12: PrivacyPolicy.tsx (punctuation only, no voice change)

**Files:**
- Modify: `src/components/PrivacyPolicy.tsx:26`

Legal text, kept factual. Only swap the two em dashes for commas so the site is fully dash-free. Meaning unchanged.

- [ ] **Step 1: Edit (line ~26), removes 2 em dashes**
Old: `All configuration and operational data—including your recipient lists, sending limits, suppressed emails, and email templates—are stored securely and solely on your local hard drive.`
New: `All configuration and operational data, including your recipient lists, sending limits, suppressed emails, and email templates, are stored securely and solely on your local hard drive.`

- [ ] **Step 2: Verify**
Run: `grep -nP "\xe2\x80\x93|\xe2\x80\x94" src/components/PrivacyPolicy.tsx` — expect no output.

- [ ] **Step 3: Commit**
```bash
git add src/components/PrivacyPolicy.tsx
git commit -m "copy: replace em dashes in privacy policy with commas"
```

---

### Task 13: Full verification and push

**Files:** none (verification only)

- [ ] **Step 1: Global dash sweep**
Run: `grep -rnP "\xe2\x80\x93|\xe2\x80\x94" src/`
Expected: no output. (If Grep tool used instead, pattern `—|–` over `src/`, zero matches.)

- [ ] **Step 2: Confirm facts/tags intact**
Run: `grep -rn "98.7%\|2,000+\|2,400+\|1.99\|{{Name}}" src/components/`
Expected: matches still present (Hero 98.7% and 2,000+, Waitlist 2,400+, Pricing/Comparison 1.99, merge tags).

- [ ] **Step 3: Build**
Run: `npm run build`
Expected: exits 0, no TS errors, `dist/` written.

- [ ] **Step 4: Push**
```bash
git push
```

---

## Self-Review

- **Spec coverage:** Every spec change-map entry maps to a task — Hero (T1), HowItWorks (T2), DontBcc (T3), Deliverability (T4), Capabilities (T5), MultiAccount (T6), WhoItsFor (T7), Comparison (T8), Features (T9), Pricing (T10), Waitlist (T11). Hero:81 mock label and PrivacyPolicy:26 dashes (found via grep, beyond original spec map) added as T1.S7 and T12. Final build+grep+push = T13.
- **Placeholder scan:** No TBD/TODO. Every edit shows exact old and new strings.
- **Consistency:** Dash-check command and commit pattern identical across tasks. Facts/tags listed once in Global Constraints, enforced in T13.
