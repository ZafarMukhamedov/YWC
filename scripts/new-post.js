#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const slug = process.argv[2];
if (!slug) {
  console.error('Usage: pnpm new:post <slug>');
  process.exit(1);
}
const dir = path.join('content', 'blog');
fs.mkdirSync(dir, {recursive: true});
const file = path.join(dir, `${slug}.mdx`);
const frontMatter = `---\ntitle: "${slug}"\ndate: ${new Date().toISOString()}\n---\n\nPost content here.\n`;
fs.writeFileSync(file, frontMatter);
console.log(`Created ${file}`);
