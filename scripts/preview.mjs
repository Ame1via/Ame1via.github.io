import { createServer } from "node:http";
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
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
  const date = file.match(/(\d{4})-(\d{2})-(\d{2})/)?.slice(1).join("-") || "";
  const slug = file.replace(/^_posts\\?\/?/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");
  const url = `/${date.replaceAll("-", "/")}/${slug}.html`;
  const html = body
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${paragraph.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</p>`)
    .join("\n");

  return { title, date, url, body, html };
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

function renderFragments(template, posts) {
  const items = posts
    .map((post) => `
        <li class="fragment-item">
          <a class="fragment-link" href="${post.url}">
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
    .replaceAll("{{ post.url | relative_url }}", "#");
}

function build() {
  rmSync(out, { recursive: true, force: true });
  ensureDir(out);
  ensureDir(join(out, "assets"));
  ensureDir(join(out, "assets", "nun-agent"));

  copy("assets/fussli-fragments-bg.png");
  copy("assets/nun-agent/nun-agent-idle.gif");
  copy("assets/nun-agent/nun-agent-waving.gif");
  write("index.html", read("index.html"));

  const posts = ["_posts/2026-02-28-d2.md", "_posts/2026-02-27-day1.md"].map(parsePost);
  write("blog/index.html", page("Fragments", renderFragments(read("blog/index.html"), posts)));

  for (const post of posts) {
    write(
      post.url.replace(/^\//, ""),
      page(
        post.title,
        `<main style="min-height:100vh;padding:64px 24px;background:#0d0c0c;color:#f2f0eb;font-family:Georgia,'Times New Roman',serif;">
  <article style="max-width:680px;margin:0 auto;line-height:1.8;">
    <h1 style="font-weight:400;">${post.title}</h1>
    ${post.html}
    <p><a style="color:#9a958b;" href="/blog/">Back</a></p>
  </article>
</main>`
      )
    );
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

  const type = extname(filePath) === ".png" ? "image/png" : "text/html; charset=utf-8";
  response.writeHead(200, { "Content-Type": type });
  response.end(readFileSync(filePath));
}

build();

createServer((request, response) => {
  serveFile(new URL(request.url, `http://localhost:${port}`).pathname, response);
}).listen(port, () => {
  console.log(`Preview: http://localhost:${port}`);
});
