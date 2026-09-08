// Renders the two legal markdown files to static HTML pages so they answer with
// a 200 on GitHub Pages. The React routes (/privacy, /terms) only exist after
// the SPA boots — a direct request (a reviewer's link check, a crawler) got a
// 404, which Google's OAuth verification treats as "no privacy policy".
//
// Deliberately tiny: the two documents use headings, paragraphs, `* ` bullets,
// **bold** and [links](https://…) and nothing else. Anything fancier should go
// through a real markdown library — do not grow this.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PAGES = [
  { src: 'privacy-policy.md', out: 'public/privacy/index.html', title: 'Privacy Policy' },
  { src: 'terms-and-conditions.md', out: 'public/terms/index.html', title: 'Terms and Conditions' },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const inline = (s) =>
  esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" rel="noopener">$1</a>');

export function render(md) {
  const out = [];
  let inList = false;
  const closeList = () => {
    if (inList) { out.push('</ul>'); inList = false; }
  };
  for (const raw of md.split(/\r?\n/)) {
    const line = raw.trimEnd();
    const heading = /^(#{1,3}) (.+)$/.exec(line);
    const bullet = /^[*-] (.+)$/.exec(line);
    if (heading) {
      closeList();
      const level = heading[1].length;
      out.push(`<h${level}>${inline(heading[2])}</h${level}>`);
    } else if (bullet) {
      if (!inList) { out.push('<ul>'); inList = true; }
      out.push(`<li>${inline(bullet[1])}</li>`);
    } else if (line === '') {
      closeList();
    } else {
      closeList();
      out.push(`<p>${inline(line)}</p>`);
    }
  }
  closeList();
  return out.join('\n');
}

const shell = (title, body) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} — Email Pilots</title>
<meta name="robots" content="index,follow">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<style>
  body{margin:0;font:16px/1.65 Inter,system-ui,-apple-system,Segoe UI,sans-serif;color:#0f172a;background:#fff}
  main{max-width:760px;margin:0 auto;padding:48px 20px 96px}
  h1{font-size:2rem;line-height:1.2;margin:0 0 8px}
  h2{font-size:1.25rem;margin:36px 0 8px}
  h3{font-size:1.05rem;margin:22px 0 6px}
  p{margin:0 0 12px}ul{padding-left:22px;margin:0 0 12px}li{margin:4px 0}
  a{color:#2563eb}
  nav{font-size:14px;margin-bottom:36px}nav a{margin-right:18px}
</style>
</head>
<body>
<main>
<nav><a href="/">← emailpilots.com</a><a href="/privacy/">Privacy Policy</a><a href="/terms/">Terms</a></nav>
${body}
</main>
</body>
</html>
`;

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  for (const page of PAGES) {
    const md = readFileSync(page.src, 'utf8');
    mkdirSync(path.dirname(page.out), { recursive: true });
    writeFileSync(page.out, shell(page.title, render(md)));
    console.log(`legal: ${page.src} → ${page.out}`);
  }
}
