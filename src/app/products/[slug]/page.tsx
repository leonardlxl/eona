import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "@/components/ProductGallery";
import { elementColors } from "@/data/products";
import { products } from "@/data/products";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getRelatedProducts(product);
  const elementClass = product.element
    ? elementColors[product.element]
    : "bg-sky-100 text-sky-700";

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Link href="/products" className="text-sm text-sky-600 hover:text-sky-800">
        ← Back to shop
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <ProductGallery images={product.images} name={product.name} />

        <div>
          {product.element && (
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${elementClass}`}
            >
              {product.element}
            </span>
          )}
          <h1 className="mt-3 text-3xl font-bold text-sky-900">{product.name}</h1>
          <p className="mt-4 text-2xl font-bold text-amber-600">
            {product.currency}
            {product.price}
          </p>
          <p className="mt-1 text-xs text-slate-400">Free shipping over $75</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            {product.description}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {product.longDescription}
          </p>

          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-bold text-sky-900">You may also like</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
