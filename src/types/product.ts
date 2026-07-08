export type ProductCategory = "men" | "women" | "accessories";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  currency: string;
  category: ProductCategory;
  sizes: string[];
  description: string;
  longDescription: string;
  images: string[];
  featured?: boolean;
  element?: string;
};

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
};
