/** GitHub Pages mirror — works well in China without VPN */
export const mirrorSiteUrl =
  process.env.NEXT_PUBLIC_MIRROR_URL ??
  "https://leonardlxl.github.io/teyvat-closet-intl/";

/**
 * Vercel URL — set NEXT_PUBLIC_PRIMARY_URL in Vercel dashboard to your real Visit link.
 * Do NOT use eona.vercel.app (that domain belongs to another project).
 */
export const primarySiteUrl =
  process.env.NEXT_PUBLIC_PRIMARY_URL || mirrorSiteUrl;

/** URL of the Chinese storefront */
export const cnSiteUrl =
  process.env.NEXT_PUBLIC_CN_SITE_URL ?? "http://localhost:3000";

/** @deprecated use primarySiteUrl */
export const intlSiteUrl = primarySiteUrl;

/** True when a separate Vercel URL is configured */
export const hasVercelMirror =
  Boolean(process.env.NEXT_PUBLIC_PRIMARY_URL) &&
  process.env.NEXT_PUBLIC_PRIMARY_URL !== mirrorSiteUrl;
