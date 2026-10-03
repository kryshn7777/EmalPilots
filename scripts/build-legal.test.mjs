import { test } from 'node:test';
import assert from 'node:assert/strict';
import { render } from './build-legal.mjs';

test('headings, bullets, bold and links become HTML; paragraphs are wrapped', () => {
  const md = [
    '# Title',
    '',
    'Intro with **bold** and a [link](https://example.com/x).',
    '',
    '## Section',
    '* one',
    '* two & <three>',
    '',
    'Tail.',
  ].join('\n');
  const html = render(md);
  assert.equal(html, [
    '<h1>Title</h1>',
    '<p>Intro with <strong>bold</strong> and a <a href="https://example.com/x" rel="noopener">link</a>.</p>',
    '<h2>Section</h2>',
    '<ul>',
    '<li>one</li>',
    '<li>two &amp; &lt;three&gt;</li>',
    '</ul>',
    '<p>Tail.</p>',
  ].join('\n'));
});

test('a list is closed by a blank line or a heading', () => {
  assert.equal(render('* a\n## H'), '<ul>\n<li>a</li>\n</ul>\n<h2>H</h2>');
});

test('CRLF input renders the same as LF', () => {
  assert.equal(render('# T\r\n\r\n* a\r\n'), render('# T\n\n* a\n'));
});

test('both legal documents render without leaking raw markdown syntax', async () => {
  const { readFileSync } = await import('node:fs');
  for (const f of ['privacy-policy.md', 'terms-and-conditions.md']) {
    const html = render(readFileSync(f, 'utf8'));
    assert.match(html, /^<h1>/, `${f}: should start with the title heading`);
    assert.doesNotMatch(html, /\*\*/, `${f}: unconverted bold markers`);
    assert.doesNotMatch(html, /\]\(http/, `${f}: unconverted link syntax`);
    assert.doesNotMatch(html, /^[*-] /m, `${f}: unconverted bullet`);
    assert.doesNotMatch(html, /`/, `${f}: code spans are not supported — they print literal backticks`);
  }
});
