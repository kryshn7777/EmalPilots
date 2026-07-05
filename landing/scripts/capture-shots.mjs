// Automated REAL app screenshots: serve the built Electron renderer (dist-vite),
// inject a stubbed electronAPI with realistic (personal, non-spammy) fixtures,
// switch views, and capture each into landing/public/shots/.
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright-core'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const DIST = path.join(ROOT, 'dist-vite')
const OUT = path.join(ROOT, 'landing', 'public', 'shots')
fs.mkdirSync(OUT, { recursive: true })

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.json': 'application/json', '.ico': 'image/x-icon' }

const server = http.createServer((req, res) => {
  let rel = decodeURIComponent((req.url || '/').split('?')[0])
  if (rel === '/') rel = '/index.html'
  const file = path.join(DIST, rel)
  if (!file.startsWith(DIST) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); res.end('not found'); return
  }
  res.writeHead(200, { 'content-type': MIME[path.extname(file)] || 'application/octet-stream' })
  fs.createReadStream(file).pipe(res)
})

await new Promise((r) => server.listen(0, r))
const port = server.address().port
const url = `http://localhost:${port}/index.html`
console.log('serving dist-vite on', url)

// --- Stub electronAPI (runs before the page's scripts) ---
function injectStub() {
  const now = Date.now()
  const recipients = [
    { name: 'Jordan Lee', email: 'jordan.lee@acme.co', subject: 'Following up on our chat', active: true, messageType: 'text', messageContent: 'Hi {{name}}, lovely speaking earlier — sending the deck as promised.', scheduledDays: ['Mon', 'Wed', 'Fri'], scheduledTimes: ['09:30'], entropyMinutes: 15, campaignId: 'c1', sequenceId: 's1', attachments: [] },
    { name: 'Priya Patel', email: 'priya@brightlabs.io', subject: 'Great meeting you', active: true, messageType: 'text', messageContent: 'Hi {{name}}, enjoyed the conversation at the meetup!', scheduledDays: ['Tue', 'Thu'], scheduledTimes: ['11:00'], entropyMinutes: 10, campaignId: 'c2', sequenceId: '', attachments: [] },
    { name: 'Sam Rivera', email: 'sam.rivera@northwind.com', subject: 'Quick follow-up', active: true, messageType: 'text', messageContent: 'Hi {{name}}, circling back on my note from last week.', scheduledDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], scheduledTimes: ['08:45'], entropyMinutes: 20, campaignId: 'c1', sequenceId: 's1', attachments: [] },
    { name: 'Mei Chen', email: 'mei@studioform.design', subject: 'Loved your work', active: true, messageType: 'text', messageContent: 'Hi {{name}}, your portfolio is stunning — would love to chat.', scheduledDays: ['Wed'], scheduledTimes: ['14:00'], entropyMinutes: 0, campaignId: '', sequenceId: '', attachments: [] },
    { name: 'Tom Becker', email: 'tom.becker@hello.dev', subject: 'Thanks for the intro', active: false, messageType: 'text', messageContent: 'Hi {{name}}, thank you for the kind introduction.', scheduledDays: ['Fri'], scheduledTimes: ['10:15'], entropyMinutes: 15, campaignId: 'c2', sequenceId: '', attachments: [] },
  ]
  const accounts = [
    { id: 'default', label: 'Alex — Personal (Gmail)', host: 'smtp.gmail.com', port: 587, user: 'alex@gmail.com', enabled: true, hasPass: true, isDefault: true, status: { ok: true, error: undefined, at: now, kind: 'test' } },
    { id: 'work', label: 'Alex — Work (Outlook)', host: 'smtp.office365.com', port: 587, user: 'alex@brightlabs.io', enabled: true, hasPass: true, isDefault: false, status: { ok: true, error: undefined, at: now, kind: 'send' } },
  ]
  const campaigns = [
    { id: 'c1', name: 'Warm intros', subject: 'Following up, {{name}}' },
    { id: 'c2', name: 'Meetup contacts', subject: 'Great meeting you, {{name}}' },
  ]
  const sequences = [
    { id: 's1', name: 'Friendly follow-up', steps: [
      { subject: 'Following up', messageContent: 'Hi {{name}}, just following up on my last note — no rush at all.', delayDays: 0, stopOnReply: true },
      { subject: '', messageContent: 'Hi {{name}}, floating this back to the top of your inbox in case it slipped by.', delayDays: 3, stopOnReply: true },
      { subject: 'One last note', messageContent: 'Hi {{name}}, I’ll leave it here — always happy to reconnect down the line.', delayDays: 5, stopOnReply: true },
    ] },
  ]
  const config = {
    userName: 'Alex',
    smtp: { user: 'alex@gmail.com', host: 'smtp.gmail.com', port: 587, hasPass: true, pass: '' },
    email: { subject: 'Following up, {{name}}' },
    sender: { physicalAddress: '123 Market St, San Francisco, CA 94103', unsubscribeEnabled: true, inboxPlacement: 'primary' },
    limits: { maxPerDay: 50, maxPerWindow: 10, maxWindowsPerDay: 5, maxPerRecipientPerDay: 3, warmupEnabled: true, warmupCurve: [5, 10, 15, 20, 30, 40, 50] },
    paths: {},
    templateContent: '<p>Hi {{name}},</p>\n<div>{{{message}}}</div>\n<p>Best,<br>Alex</p>',
    cronSchedule: '0 9 * * *',
    accounts, campaigns, sequences,
  }
  const usage = { date: new Date().toISOString().slice(0, 10), emailsToday: 12, maxPerDay: 50, hardMaxPerDay: 50, warmupActive: false, windowsToday: 2, maxWindowsPerDay: 5, currentWindowCount: 3, maxPerWindow: 10, maxPerRecipientPerDay: 3 }
  const ok = (v) => () => Promise.resolve(v)
  window.electronAPI = {
    getConfig: ok(config),
    saveConfig: ok(true),
    signOut: ok({ ok: true }),
    startScheduler: ok(true),
    stopScheduler: ok(false),
    getSchedulerStatus: ok(true),
    runTestSend: ok({ total: 5, sent: 5, skipped: 0, failed: 0 }),
    openCsv: ok(undefined),
    openJson: ok(undefined),
    getRecipients: ok(recipients),
    saveRecipients: ok(true),
    importRecipientsCsv: ok({ canceled: true }),
    getStats: ok({ totalEmailsSent: 1284, totalReplies: 372, perAccount: { default: 904, work: 380 }, perAccountReplies: { default: 256, work: 116 } }),
    getUsage: ok(usage),
    getSuppressions: ok([{ email: 'optout@example.com', reason: 'unsubscribe', date: new Date(now - 8.64e7).toISOString() }]),
    getReplies: ok([
      { email: 'priya@brightlabs.io', repliedAt: new Date(now - 3.6e6).toISOString(), accountId: 'work', subject: 'Re: Great meeting you' },
      { email: 'jordan.lee@acme.co', repliedAt: new Date(now - 9e7).toISOString(), accountId: 'default', subject: 'Re: Following up' },
    ]),
    pollNow: ok({ ok: true }),
    removeSuppression: ok(true),
    addSuppression: ok({ ok: true }),
    sendTestEmail: ok({ ok: true, to: 'alex@gmail.com' }),
    verifyConnection: ok({ ok: true }),
    getAccounts: ok(accounts),
    saveAccount: ok({ ok: true, id: 'new' }),
    deleteAccount: ok({ ok: true }),
    getCampaigns: ok(campaigns),
    saveCampaign: ok({ ok: true, id: 'c3' }),
    deleteCampaign: ok({ ok: true }),
    getSequences: ok(sequences),
    saveSequence: ok({ ok: true, id: 's2' }),
    deleteSequence: ok({ ok: true }),
    selectFile: ok(null),
    previewEmail: ok({ subject: 'Following up, Jordan', body: '<p>Hi Jordan,</p><p>Lovely speaking earlier — sending the deck as promised.</p><p>Best,<br>Alex</p>' }),
    verifyEmail: ok({ valid: true }),
    onLog: () => {},
    onStatusChange: (cb) => { try { cb(true) } catch {} },
  }
}

const browser = await chromium.launch({ channel: 'chrome', headless: true })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })
const errors = []
page.on('pageerror', (e) => errors.push(String(e.message || e)))
await page.addInitScript(injectStub)
await page.goto(url, { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)

// Force past the login gate / onboarding regardless of app state.
await page.evaluate(() => {
  for (const sel of ['#login-screen', '#onboarding-modal']) {
    const el = document.querySelector(sel)
    if (el) el.style.display = 'none'
  }
  document.body.style.overflow = 'auto'
})
await page.waitForTimeout(400)

const targets = [
  ['dashboard', 'dashboard'],
  ['sequences', 'sequences'],
  ['recipients', 'recipients'],
  ['accounts', 'accounts'],
]

for (const [view, file] of targets) {
  await page.evaluate((v) => {
    const li = document.querySelector(`.nav-links li[data-view="${v}"]`)
    if (li) li.click()
    document.querySelectorAll('.view').forEach((el) => el.classList.toggle('active', el.id === v))
    document.querySelectorAll('.nav-links li').forEach((el) => el.classList.toggle('active', el.getAttribute('data-view') === v))
    window.scrollTo(0, 0)
  }, view)
  await page.waitForTimeout(900)
  await page.screenshot({ path: path.join(OUT, `${file}.png`) })
  console.log('captured', file)
}

console.log('PAGE ERRORS:' + (errors.length ? '\n - ' + errors.slice(0, 8).join('\n - ') : ' none'))
await browser.close()
server.close()
