export interface Product {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  category?: string;
  inStock?: boolean;
}
