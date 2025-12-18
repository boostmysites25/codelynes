/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const SITE_URL = (process.env.REACT_APP_SITE_URL || "https://www.codelynes.com")
  .replace(/\/+$/, "");
const BLOG_API_BASE_URL = (
  process.env.REACT_APP_BLOG_API_BASE_URL ||
  "https://blogplatform-backend-cloudinary-nine.vercel.app"
).replace(/\/+$/, "");

async function fetchJson(url) {
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Failed ${res.status} ${url}${text ? ` - ${text}` : ""}`);
  }
  return res.json();
}

function xmlEscape(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function urlEntry(loc, lastmod) {
  return [
    "  <url>",
    `    <loc>${xmlEscape(loc)}</loc>`,
    lastmod ? `    <lastmod>${xmlEscape(lastmod)}</lastmod>` : null,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");
}

async function main() {
  const staticPaths = [
    "/",
    "/about-us",
    "/services",
    "/services/web-development",
    "/services/app-development",
    "/services/ai-ml-development",
    "/services/blockchain-solutions",
    "/services/cloud-computing-services",
    "/services/vr-ar-development",
    "/contact",
    "/blogs",
    "/thank-you",
    "/web-development",
    "/app-development",
  ];

  let blogs = [];
  try {
    const published = await fetchJson(`${BLOG_API_BASE_URL}/api/blogs/published`);
    blogs = Array.isArray(published?.blogs) ? published.blogs : [];
  } catch (e) {
    console.warn(
      "[sitemap] Warning: could not fetch published blogs; sitemap will include only static routes."
    );
    console.warn(String(e?.message || e));
  }

  const urls = [];

  // Static routes
  for (const p of staticPaths) {
    urls.push(urlEntry(`${SITE_URL}${p}`));
  }

  // Blog detail routes
  for (const b of blogs) {
    if (!b?.slug) continue;
    const lastmod = b.updatedAt ? new Date(b.updatedAt).toISOString() : undefined;
    urls.push(urlEntry(`${SITE_URL}/blogs/${encodeURIComponent(b.slug)}`, lastmod));
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls.join("\n"),
    "</urlset>",
    "",
  ].join("\n");

  const outPath = path.join(process.cwd(), "public", "sitemap.xml");
  fs.writeFileSync(outPath, xml, "utf8");
  console.log(`[sitemap] Wrote ${urls.length} URLs to ${outPath}`);
}

main().catch((err) => {
  console.error("[sitemap] Failed:", err);
  process.exit(1);
});


