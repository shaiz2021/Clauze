const PROD_SITE_URL = "https://clauze.xyz";

const normalizeSiteUrl = (value: string) => value.replace(/\/+$/, "");

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.trim()
    ? normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)
    : process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : PROD_SITE_URL;
