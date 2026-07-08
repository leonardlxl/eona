"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ShopRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/products");
  }, [router]);

  return (
    <p className="py-20 text-center text-slate-500">Redirecting to shop...</p>
  );
}
