"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, subtotal, removeItem, updateQuantity, hydrated } = useCart();

  if (!hydrated) {
    return <div className="py-20 text-center text-slate-400">Loading cart...</div>;
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-sky-900">Your Cart</h1>
      <p className="mt-2 text-sm text-slate-500">
        Saved locally in your browser · Online checkout not yet available
      </p>

      {items.length === 0 ? (
        <div className="card-soft mt-10 rounded-3xl p-12 text-center">
          <p className="text-4xl">🛍️</p>
          <p className="mt-4 text-slate-500">Your cart is empty</p>
          <Link href="/products" className="btn-primary mt-6">
            Start shopping
          </Link>
        </div>
      ) : (
        <>
          <ul className="mt-8 space-y-4">
            {items.map((item) => (
              <li
                key={`${item.productId}-${item.size}`}
                className="card-soft flex gap-4 rounded-2xl p-4"
              >
                <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-sky-50">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <Link
                      href={`/products/${item.slug}`}
                      className="font-semibold text-slate-700 hover:text-sky-700"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-slate-400">Size: {item.size}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          if (item.quantity <= 1) {
                            removeItem(item.productId, item.size);
                          } else {
                            updateQuantity(
                              item.productId,
                              item.size,
                              item.quantity - 1,
                            );
                          }
                        }}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-sky-700 hover:bg-sky-200"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.size,
                            item.quantity + 1,
                          )
                        }
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-sky-700 hover:bg-sky-200"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-amber-600">
                        ${item.price * item.quantity}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.productId, item.size)}
                        className="text-xs text-slate-400 hover:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="card-soft mt-8 rounded-3xl p-6">
            <div className="flex items-center justify-between text-lg">
              <span className="text-slate-600">Subtotal</span>
              <span className="font-bold text-amber-600">${subtotal}</span>
            </div>
            <p className="mt-2 text-xs text-slate-400">
              Shipping and taxes calculated at checkout
            </p>
            <button
              type="button"
              onClick={() => alert("Checkout coming soon — stay tuned! ✦")}
              className="btn-primary mt-6 w-full"
            >
              Proceed to checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
