import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  limit,
  getDocs,
  QueryConstraint,
} from "firebase/firestore";
import { db } from "../firebase";
import type { Product } from "../types/product";

export const useTabProducts = (
  category: string,
  initialSeries: string = "",
  itemsLimit: number = 5,
) => {
  const [activeSeries, setActiveSeries] = useState<string>(initialSeries);
  const [cache, setCache] = useState<Record<string, Product[]>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const cacheKey = activeSeries
    ? `${category}-${activeSeries}`
    : `${category}-all`;

  useEffect(() => {
    if (cache[cacheKey]) {
      return;
    }

    const fetchSeriesProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const productsRef = collection(db, "products");

        const constraints: QueryConstraint[] = [
          where("category", "==", category),
        ];

        if (activeSeries) {
          constraints.push(where("series", "==", activeSeries));
        }

        constraints.push(limit(itemsLimit));

        const q = query(productsRef, ...constraints);
        const snapshot = await getDocs(q);

        const fetchedData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];

        setCache((prev) => ({
          ...prev,
          [cacheKey]: fetchedData,
        }));
      } catch (err) {
        console.error(`Помилка завантаження товарів для ${cacheKey}:`, err);
        setError("Не вдалося отримати товари");
      } finally {
        setLoading(false);
      }
    };

    fetchSeriesProducts();
  }, [category, activeSeries, cacheKey, itemsLimit, cache]);

  return {
    activeSeries,
    setActiveSeries,
    products: cache[cacheKey] || [],
    loading: loading && !cache[cacheKey],
    error,
  };
};
