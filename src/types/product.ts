export interface ProductSpecs {
  cpu?: string;
  gpu?: string;
  ram?: string;
  storage?: string;
  screenSize?: string;
  refreshRate?: string;
  resolution?: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  brand?: string;
  series?: string;
  oldPrice?: number;
  image: string;
  gallery: string[];
  category: "Custom Desktop" | "Laptop" | "Desktops" | "Monitors";
  inStock?: boolean;
  reviewsCount?: number;
  rating?: number;
  description?: string;
  specs?: ProductSpecs;
}
