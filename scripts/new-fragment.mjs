import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const title = process.argv.slice(2).join(" ").trim();

if (!title) {
  console.error('Usage: node scripts/new-fragment.mjs "Title Here"');
  process.exit(1);
}

const now = new Date();
const date = now.toISOString().slice(0, 10);
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "")
  .slice(0, 64) || "fragment";
const postsDir = join(process.cwd(), "_posts");
const file = join(postsDir, `${date}-${slug}.md`);

if (existsSync(file)) {
  console.error(`Already exists: ${file}`);
  process.exit(1);
}

mkdirSync(postsDir, { recursive: true });
writeFileSync(
  file,
  `---\nlayout: post\ntitle: "${title.replaceAll('"', '\\"')}"\nsymbol: "ashes"\naccent: "#5b1417"\n---\n\nWrite here.\n`
);

console.log(`Created ${file}`);
