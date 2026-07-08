"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function AddToCartButton({ product }: Props) {
  const { addItem } = useCart();
  const [size, setSize] = useState("");
  const [added, setAdded] = useState(false);
  const needsSize =
    product.sizes.length > 0 && product.sizes[0] !== "One Size";

  const handleAdd = () => {
    const chosenSize = needsSize ? size : product.sizes[0] ?? "One Size";
    if (needsSize && !chosenSize) return;

    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      size: chosenSize,
      price: product.price,
      image: product.images[0],
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-4">
      {needsSize && (
        <div>
          <p className="mb-2 text-sm font-medium text-slate-600">Select size</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={`min-w-[3rem] rounded-full px-4 py-2 text-sm font-medium transition ${
                  size === s
                    ? "bg-gradient-to-r from-sky-400 to-cyan-400 text-white shadow-md"
                    : "bg-white text-slate-600 ring-1 ring-sky-200 hover:ring-sky-300"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={handleAdd}
        disabled={needsSize && !size}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
      >
        {added ? "✓ Added to cart" : "Add to cart"}
      </button>
    </div>
  );
}
