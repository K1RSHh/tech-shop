import { db } from "../firebase";
import {
  collection,
  getDocs,
  // addDoc,
  // deleteDoc,
  // doc,
  // updateDoc,
} from "firebase/firestore";
import { create } from "zustand";
import type { Product } from "../types/product";

interface PProductStore {
  products: Product[];
  isLoading: boolean;
  fetchProducts: () => Promise<Product[]>;
}

const COLLECTION_NAME = "products";

export const productStore = create<PProductStore>(() => ({
  products: [],
  isLoading: false,

  fetchProducts: async () => {
    const productCollection = collection(db, COLLECTION_NAME);

    const snapshot = await getDocs(productCollection);

    return (await snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))) as Product[];
  },
}));
