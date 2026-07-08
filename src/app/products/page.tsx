"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import { categoryLabels } from "@/data/products";
import { getAllProducts } from "@/lib/products";
import type { ProductCategory } from "@/types/product";
import Link from "next/link";

const categories: (ProductCategory | "all")[] = [
  "all",
  "women",
  "men",
  "accessories",
];

const categoryTabLabels: Record<ProductCategory | "all", string> = {
  all: "All",
  ...categoryLabels,
};

function ProductsContent() {
  const searchParams = useSearchParams();
  const category =
    (searchParams.get("category") as ProductCategory | null) ?? "all";
  const all = getAllProducts();
  const filtered =
    category === "all" ? all : all.filter((p) => p.category === category);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-sky-900">Shop All</h1>
        <p className="mt-2 text-sm text-slate-500">
          Element-themed apparel for every adventurer
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={cat === "all" ? "/products" : `/products?category=${cat}`}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              category === cat
                ? "bg-gradient-to-r from-sky-400 to-cyan-400 text-white shadow-md"
                : "bg-white/80 text-slate-600 ring-1 ring-sky-200 hover:ring-sky-300"
            }`}
          >
            {categoryTabLabels[cat]}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-slate-400">No products in this category</p>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={<div className="py-20 text-center text-slate-400">Loading...</div>}
    >
      <ProductsContent />
    </Suspense>
  );
}
