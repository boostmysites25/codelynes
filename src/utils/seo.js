export const SITE_URL =
  process.env.REACT_APP_SITE_URL?.replace(/\/+$/, "") || "https://www.codelynes.com";

export function canonicalUrl(pathname = "/") {
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SITE_URL}${cleanPath}`.replace(/\/+$/, "");
}


