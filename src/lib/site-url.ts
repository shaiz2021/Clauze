const PROD_SITE_URL = "https://clauze.xyz";

const normalizeSiteUrl = (value: string) => value.replace(/\/+$/, "");

export const siteUrl =
  process.env.NODE_ENV === "development"
    ? normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000")
    : PROD_SITE_URL;
