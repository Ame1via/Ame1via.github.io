import { createServer } from "node:http";
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, extname, join } from "node:path";

const root = process.cwd();
const out = join(root, ".preview");
const port = Number(process.env.PORT || 4173);

function ensureDir(path) {
  mkdirSync(path, { recursive: true });
}

function read(path) {
  return readFileSync(join(root, path), "utf8");
}

function write(path, content) {
  const target = join(out, path);
  ensureDir(dirname(target));
  writeFileSync(target, content);
}

function copy(path) {
  const target = join(out, path);
  ensureDir(dirname(target));
  copyFileSync(join(root, path), target);
}

function parsePost(file) {
  const raw = read(file);
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const frontmatter = match ? match[1] : "";
  const body = (match ? match[2] : raw).trim();
  const title = frontmatter.match(/^title:\s*"?([^"\n]+)"?/m)?.[1] || file;
  const symbol = frontmatter.match(/^symbol:\s*"?([^"\n]+)"?/m)?.[1] || "ashes";
  const accent = frontmatter.match(/^accent:\s*"?([^"\n]+)"?/m)?.[1] || "#5b1417";
  const date = file.match(/(\d{4})-(\d{2})-(\d{2})/)?.slice(1).join("-") || "";
  const slug = file.replace(/^_posts\\?\/?/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");
  const url = `/${date.replaceAll("-", "/")}/${slug}.html`;
  const html = body
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${paragraph.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</p>`)
    .join("\n");

  return { title, symbol, accent, date, url, body, html };
}

function page(title, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body>
${content}
</body>
</html>`;
}

function renderLayout(template, post) {
  return template
    .replaceAll("{{ page.title }}", post.title)
    .replaceAll("{{ site.title }}", "Fragments")
    .replaceAll('{{ page.accent | default: "#5b1417" }}', post.accent)
    .replaceAll("{{ page.date | date_to_xmlschema }}", post.date)
    .replaceAll('{{ page.date | date: "%Y-%m-%d" }}', post.date)
    .replaceAll("{{ content }}", post.html)
    .replaceAll("{{ '/blog/' | relative_url }}", "/blog/");
}

function stripFrontMatter(template) {
  return template.replace(/^---\n[\s\S]*?\n---\n/, "");
}

function renderFragments(template, posts) {
  const items = posts
    .map((post) => `
        <li class="fragment-item">
          <a class="fragment-link" href="${post.url}">
            <span class="fragment-symbol">${post.symbol}</span>
            <span class="fragment-name">${post.title}</span>
            <time class="fragment-date" datetime="${post.date}">${post.date}</time>
            <span class="fragment-excerpt">${post.body.replaceAll("<", "&lt;").slice(0, 160)}</span>
          </a>
        </li>`)
    .join("\n");

  return template
    .replace(/^---\n[\s\S]*?\n---\n/, "")
    .replace(/{% for post in site\.posts %}[\s\S]*?{% endfor %}/, items)
    .replaceAll("{{ '/' | relative_url }}", "/")
    .replaceAll("{{ '/archive/' | relative_url }}", "/archive/")
    .replaceAll("{{ post.url | relative_url }}", "#");
}

function renderArchive(template, posts) {
  const items = posts
    .map((post) => `
      <li>
        <a href="${post.url}">
          <time datetime="${post.date}">${post.date}</time>
          <span>${post.title}</span>
        </a>
      </li>`)
    .join("\n");

  return stripFrontMatter(template)
    .replace(/{% for post in site\.posts %}[\s\S]*?{% endfor %}/, items)
    .replaceAll("{{ '/blog/' | relative_url }}", "/blog/");
}

function build() {
  rmSync(out, { recursive: true, force: true });
  ensureDir(out);
  ensureDir(join(out, "assets"));
  ensureDir(join(out, "assets", "nun-agent"));

  copy("assets/fussli-fragments-bg.png");
  copy("assets/nun-agent/nun-agent-idle.gif");
  copy("assets/nun-agent/nun-agent-waving.gif");
  copy("assets/nun-agent/nun-agent-running-left.gif");
  copy("assets/nun-agent/nun-agent-running-right.gif");
  copy("assets/site-interactions.js");
  write("index.html", read("index.html"));
  write("hidden/index.html", read("hidden/index.html"));
  write("404.html", read("404.html"));

  const posts = readdirSync(join(root, "_posts"))
    .filter((file) => file.endsWith(".md"))
    .sort()
    .reverse()
    .map((file) => parsePost(`_posts/${file}`));
  write("blog/index.html", page("Fragments", renderFragments(read("blog/index.html"), posts)));
  write("archive/index.html", page("Archive", renderArchive(read("archive/index.html"), posts)));
  const postLayout = read("_layouts/post.html");

  for (const post of posts) {
    write(post.url.replace(/^\//, ""), renderLayout(postLayout, post));
  }
}

function serveFile(requestPath, response) {
  const normalized = requestPath === "/" ? "/index.html" : requestPath.endsWith("/") ? `${requestPath}index.html` : requestPath;
  const filePath = join(out, decodeURIComponent(normalized.replace(/^\//, "")));

  if (!existsSync(filePath)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  const types = {
    ".gif": "image/gif",
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".png": "image/png",
    ".webp": "image/webp",
  };
  const type = types[extname(filePath)] || "application/octet-stream";
  response.writeHead(200, { "Content-Type": type });
  response.end(readFileSync(filePath));
}

build();

createServer((request, response) => {
  serveFile(new URL(request.url, `http://localhost:${port}`).pathname, response);
}).listen(port, () => {
  console.log(`Preview: http://localhost:${port}`);
});
