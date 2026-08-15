import { create } from "zustand";
import type { Product } from "../types/product";
import { productService } from "../service/productService";

interface PProductStore {
  products: Product[];
  isLoading: boolean;
  fetchProducts: () => Promise<void>;
}

export const productStore = create<PProductStore>((set) => ({
  products: [],
  isLoading: false,

  fetchProducts: async () => {
    set({ isLoading: true });
    try {
      const data = await productService.getAllProducts();
      console.log("Fetched data:", data);
      set({ products: data });
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
