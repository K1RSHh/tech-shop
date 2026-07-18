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
        // 1. Посилаємось на нашу плоску колекцію 'products'
        const productsRef = collection(db, "products");

        // 2. Якщо передали категорію — робимо запит із фільтром, якщо ні — беремо все
        const q = category
          ? query(productsRef, where("category", "==", category))
          : query(productsRef);

        // 3. Отримуємо "знімок" даних від Firebase (це асинхронна операція!)
        const querySnapshot = await getDocs(q);

        // 4. Мапимо документи з бази у звичайний масив об'єктів для React
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
