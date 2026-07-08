import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { elementColors } from "@/data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const elementClass = product.element
    ? elementColors[product.element]
    : "bg-sky-100 text-sky-700";

  return (
    <Link
      href={`/products/${product.slug}`}
      className="card-soft group overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-sky-50">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, 25vw"
        />
        {product.element && (
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-xs font-medium ${elementClass}`}
          >
            {product.element}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-700 group-hover:text-sky-700">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs text-slate-400">
          {product.description}
        </p>
        <p className="mt-2 text-base font-bold text-amber-600">
          {product.currency}
          {product.price}
        </p>
      </div>
    </Link>
  );
}
