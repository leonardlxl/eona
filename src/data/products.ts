import type { Product, ProductCategory } from "@/types/product";
import { productImagePath } from "@/lib/images";

const img = (id: string) => productImagePath(id);

export const products: Product[] = [
  {
    id: "1",
    slug: "wind-cape",
    name: "Anemo Wanderer Cape",
    price: 49,
    currency: "$",
    category: "men",
    sizes: ["S", "M", "L", "XL"],
    description: "Lightweight anime-style cape with mint-green gradient.",
    longDescription:
      "Inspired by free-spirited adventurers. Breathable fabric with a soft lining — perfect for conventions and everyday wear. Hidden back zipper and side pockets.",
    images: [img("1")],
    featured: true,
    element: "Anemo",
  },
  {
    id: "2",
    slug: "liyue-dress",
    name: "Liyue Cloudweave Dress",
    price: 59,
    currency: "$",
    category: "women",
    sizes: ["XS", "S", "M", "L"],
    description: "Gold cloud-sleeve design with elegant fantasy flair.",
    longDescription:
      "Soft ivory base with gold cloud embroidery and a flowing A-line skirt. Ideal for photoshoots and summer outings.",
    images: [img("2")],
    featured: true,
    element: "Geo",
  },
  {
    id: "3",
    slug: "electro-hoodie",
    name: "Electro Pulse Hoodie",
    price: 39,
    currency: "$",
    category: "men",
    sizes: ["S", "M", "L", "XL"],
    description: "Purple lightning gradient print, street anime style.",
    longDescription:
      "Heavyweight cotton hoodie with Electro emblem print. Relaxed fit. Fleece lining available on request.",
    images: [img("3")],
    element: "Electro",
  },
  {
    id: "4",
    slug: "dendro-hairband",
    name: "Dendro Floral Crown",
    price: 14,
    currency: "$",
    category: "accessories",
    sizes: ["One Size"],
    description: "Fresh botanical headpiece with cute anime charm.",
    longDescription:
      "Lightweight and comfortable — a convention essential. Pairs with cottagecore, fantasy, or daily casual looks.",
    images: [img("4")],
    element: "Dendro",
  },
  {
    id: "5",
    slug: "fontaine-hat-set",
    name: "Fontaine Top Hat Set",
    price: 69,
    currency: "$",
    category: "women",
    sizes: ["S", "M", "L"],
    description: "Vintage hat and lace blouse with playful elegance.",
    longDescription:
      "Court-inspired set including an adjustable top hat and puff-sleeve blouse. Skin-friendly fabrics for themed events and portraits.",
    images: [img("5")],
    featured: true,
    element: "Hydro",
  },
  {
    id: "6",
    slug: "cryo-scarf",
    name: "Cryo Gradient Scarf",
    price: 19,
    currency: "$",
    category: "accessories",
    sizes: ["One Size"],
    description: "Blue-white knit scarf for a crisp winter look.",
    longDescription:
      "Soft faux-cashmere, reversible wear. Ice-blue gradient pairs with coats and hoodies alike.",
    images: [img("6")],
    element: "Cryo",
  },
  {
    id: "7",
    slug: "natlan-vest",
    name: "Natlan Tribal Vest",
    price: 29,
    currency: "$",
    category: "men",
    sizes: ["S", "M", "L", "XL"],
    description: "Flame-pattern utility vest with bold cartoon energy.",
    longDescription:
      "Orange-red tribal motifs and multi-pocket design. Layer over tees for an adventurous, fiery vibe.",
    images: [img("7")],
    element: "Pyro",
  },
  {
    id: "8",
    slug: "sumeru-bag",
    name: "Sumeru Traveler Bag",
    price: 24,
    currency: "$",
    category: "accessories",
    sizes: ["One Size"],
    description: "Desert-oasis colorway in a compact crossbody.",
    longDescription:
      "Sand-gold and forest-green contrast with organized inner compartments. Great for commutes and cons.",
    images: [img("8")],
    element: "Dendro",
  },
  {
    id: "9",
    slug: "mondstadt-blouse",
    name: "Mondstadt Puff-Sleeve Blouse",
    price: 35,
    currency: "$",
    category: "women",
    sizes: ["XS", "S", "M", "L"],
    description: "White-green palette with fairy-tale puff sleeves.",
    longDescription:
      "Everyday blouse inspired by the City of Freedom. Lace collar and billowy cuffs — dress up or down with ease.",
    images: [img("9")],
    element: "Anemo",
  },
  {
    id: "10",
    slug: "geo-belt",
    name: "Geo Sigil Belt",
    price: 15,
    currency: "$",
    category: "accessories",
    sizes: ["S", "M", "L"],
    description: "Gold emblem buckle on a minimalist fantasy belt.",
    longDescription:
      "Antique Geo-inspired clasp on adjustable leather. A subtle statement piece for any outfit.",
    images: [img("10")],
    element: "Geo",
  },
];

export const categoryLabels: Record<ProductCategory, string> = {
  men: "Men",
  women: "Women",
  accessories: "Accessories",
};

export const elementColors: Record<string, string> = {
  Anemo: "bg-emerald-100 text-emerald-700",
  Geo: "bg-amber-100 text-amber-700",
  Electro: "bg-purple-100 text-purple-700",
  Dendro: "bg-green-100 text-green-700",
  Hydro: "bg-sky-100 text-sky-700",
  Cryo: "bg-cyan-100 text-cyan-700",
  Pyro: "bg-orange-100 text-orange-700",
};
