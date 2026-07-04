import { chromium } from 'playwright-core'

const url = process.env.SHOT_URL || 'http://localhost:5174'
const browser = await chromium.launch({ channel: 'chrome', headless: true })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })

const errors = []
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + (e.message || e)))

await page.goto(url, { waitUntil: 'networkidle' })
await page.waitForTimeout(1800) // let the lazy 3D scene mount + first frames

// Real wheel scroll so Lenis advances and whileInView reveals fire (once:true keeps them shown).
await page.mouse.move(720, 450)
for (let i = 0; i < 60; i++) {
  await page.mouse.wheel(0, 450)
  await page.waitForTimeout(110)
}
await page.waitForTimeout(700)

await page.screenshot({ path: 'preview-full.png', fullPage: true })

// Back to top for a clean hero shot with the scene running.
await page.evaluate(() => { const l = (window).__lenis; if (l) l.scrollTo(0, { immediate: true }); else window.scrollTo(0, 0) })
await page.mouse.wheel(0, -40000)
await page.waitForTimeout(1500)
await page.screenshot({ path: 'preview-hero.png' })

// True bottom-of-page viewport shot (avoids fullPage + smooth-scroll artifacts).
await page.mouse.wheel(0, 80000)
await page.waitForTimeout(1400)
await page.screenshot({ path: 'preview-bottom.png' })

console.log('CONSOLE/PAGE ERRORS:' + (errors.length ? '\n - ' + errors.join('\n - ') : ' none'))
await browser.close()
