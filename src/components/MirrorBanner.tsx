import { mirrorSiteUrl, primarySiteUrl } from "@/lib/site";

export default function MirrorBanner() {
  if (primarySiteUrl === mirrorSiteUrl) return null;

  return (
    <div className="border-b border-amber-200/80 bg-amber-50 px-4 py-2 text-center text-xs text-amber-950 sm:text-sm">
      <span className="font-medium">Slow or blocked?</span>{" "}
      Try the{" "}
      <a
        href={mirrorSiteUrl}
        className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-sky-900"
      >
        GitHub mirror
      </a>
      {" · "}
      访问不畅？请试{" "}
      <a
        href={mirrorSiteUrl}
        className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-sky-900"
      >
        备用链接
      </a>
    </div>
  );
}
