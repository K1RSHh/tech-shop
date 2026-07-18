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
  oldPrice: number;
  image: string;
  gallery: string[];
  category: "custom-builds" | "laptop" | "desktops" | "monitors";
  inStock: boolean;
  reviewsCount: number;
  rating: number;
  description: string;
  specs?: ProductSpecs;
}
