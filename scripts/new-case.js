#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const slug = process.argv[2];
if (!slug) {
  console.error('Usage: pnpm new:case <slug>');
  process.exit(1);
}
const dir = path.join('content', 'cases');
fs.mkdirSync(dir, {recursive: true});
const file = path.join(dir, `${slug}.mdx`);
const frontMatter = `---\ntitle: "${slug}"\nindustry: ""\ntech: []\n---\n\nCase content here.\n`;
fs.writeFileSync(file, frontMatter);
console.log(`Created ${file}`);
