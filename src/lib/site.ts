/** GitHub Pages site URL */
export const mirrorSiteUrl =
  process.env.NEXT_PUBLIC_MIRROR_URL ?? "https://leonardlxl.github.io/eona/";

/**
 * Vercel URL — set NEXT_PUBLIC_PRIMARY_URL in Vercel dashboard to your Visit link.
 * Note: eona.vercel.app is used by another project; use your assigned *.vercel.app URL.
 */
export const primarySiteUrl =
  process.env.NEXT_PUBLIC_PRIMARY_URL || mirrorSiteUrl;

/** URL of the Chinese storefront */
export const cnSiteUrl =
  process.env.NEXT_PUBLIC_CN_SITE_URL ?? "http://localhost:3000";

/** @deprecated use primarySiteUrl */
export const intlSiteUrl = primarySiteUrl;

export const hasVercelMirror =
  Boolean(process.env.NEXT_PUBLIC_PRIMARY_URL) &&
  process.env.NEXT_PUBLIC_PRIMARY_URL !== mirrorSiteUrl;
