/** Vercel / primary URL */
export const primarySiteUrl =
  process.env.NEXT_PUBLIC_PRIMARY_URL ?? "https://eona.vercel.app";

/** GitHub Pages mirror — often more reachable in China without VPN */
export const mirrorSiteUrl =
  process.env.NEXT_PUBLIC_MIRROR_URL ??
  "https://leonardlxl.github.io/teyvat-closet-intl/";

/** URL of the Chinese storefront */
export const cnSiteUrl =
  process.env.NEXT_PUBLIC_CN_SITE_URL ?? "http://localhost:3000";

/** @deprecated use primarySiteUrl */
export const intlSiteUrl = primarySiteUrl;
