const BLOG_API_BASE_URL =
  process.env.REACT_APP_BLOG_API_BASE_URL ||
  "https://blogplatform-backend-cloudinary-nine.vercel.app";

async function fetchJson(path) {
  const res = await fetch(`${BLOG_API_BASE_URL}${path}`, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `Request failed (${res.status}) ${path}${text ? ` - ${text}` : ""}`
    );
  }
  return res.json();
}

export async function getPublishedBlogs() {
  return fetchJson("/api/blogs/published");
}

export async function getBlogBySlug(slug) {
  return fetchJson(`/api/blogs/slug/${encodeURIComponent(slug)}`);
}

export { BLOG_API_BASE_URL };


