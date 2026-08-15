import { db } from "../firebase";
import {
  collection,
  getDocs,
  query,
  //   addDoc,
  //   deleteDoc,
  //   doc,
  //   updateDoc,
} from "firebase/firestore";
import type { Product } from "../types/product";

const COLLECTION_NAME = "products";

export const productService = {
  getAllProducts: async (): Promise<Product[]> => {
    const productCollection = query(collection(db, COLLECTION_NAME));
    const snapshot = await getDocs(productCollection);

    return (await snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))) as Product[];
  },
};
