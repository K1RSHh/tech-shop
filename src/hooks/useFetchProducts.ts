import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import type { Product } from "../types/product";

export const useFetchProducts = (category?: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        // 1. See the collection
        const productsRef = collection(db, "products");

        // 2. If a category was provided, we make a query with a filter; if not, we retrieve everything
        const q = category
          ? query(productsRef, where("category", "==", category))
          : query(productsRef);

        // 3. We retrieve a snapshot of data from Firebase
        const querySnapshot = await getDocs(q);

        // 4. Mapping documents from the database to a regular array of objects
        const fetchedProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];

        setProducts(fetchedProducts);
      } catch (err) {
        console.error("Error loading products:", err);
        setError("Unable to load products. Check the console..");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return { products, loading, error };
};
