/* Postbuild: content-hash styles.css and script.js in _site so they can be cached
   immutably forever. Renames each to <name>.<hash>.<ext> and rewrites every
   reference in the built HTML. Runs after `eleventy` (see package.json `build`).
   The dev server (`eleventy --serve`) skips this and serves the plain filenames. */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const SITE = path.join(__dirname, "..", "_site");

function hash(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex").slice(0, 8);
}

function walk(dir, ext, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, ext, out);
    else if (entry.name.endsWith(ext)) out.push(p);
  }
  return out;
}

// Each asset: source name in _site, and the regex matching its references in HTML.
// The regex tolerates an optional leading "/" and an optional "?v=N" cache-bust.
const assets = [
  { src: "styles.css", name: "styles", ext: "css", re: /(href=")(\/?)styles\.css(?:\?v=\d+)?(")/g },
  { src: "script.js",  name: "script", ext: "js",  re: /(src=")(\/?)script\.js(?:\?v=\d+)?(")/g },
];

if (!fs.existsSync(SITE)) {
  console.error("fingerprint: _site not found — did eleventy run?");
  process.exit(1);
}

const renamed = {};
for (const a of assets) {
  const file = path.join(SITE, a.src);
  if (!fs.existsSync(file)) {
    console.warn(`fingerprint: ${a.src} not found in _site, skipping`);
    continue;
  }
  a.hashed = `${a.name}.${hash(file)}.${a.ext}`;
  fs.renameSync(file, path.join(SITE, a.hashed));
  renamed[a.src] = a.hashed;
}

const htmlFiles = walk(SITE, ".html");
for (const f of htmlFiles) {
  let html = fs.readFileSync(f, "utf8");
  for (const a of assets) {
    if (a.hashed) html = html.replace(a.re, `$1$2${a.hashed}$3`);
  }
  fs.writeFileSync(f, html);
}

console.log(`fingerprint: ${JSON.stringify(renamed)} across ${htmlFiles.length} html files`);
