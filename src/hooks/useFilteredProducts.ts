import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  QueryConstraint,
} from "firebase/firestore";
import { db } from "../firebase";
import type { Product } from "../types/product";

export const useFilteredProducts = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // read filters from the URL
  const filters = useMemo(
    () => ({
      category: searchParams.get("category"),
      minPrice: searchParams.get("minPrice")
        ? Number(searchParams.get("minPrice"))
        : null,
      maxPrice: searchParams.get("maxPrice")
        ? Number(searchParams.get("maxPrice"))
        : null,
      sortBy: searchParams.get("sortBy") || "price_asc",
    }),
    [searchParams],
  );

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      if (isMounted) setLoading(true);

      try {
        const constraints: QueryConstraint[] = [];

        // filter by category
        if (filters.category && filters.category !== "all") {
          constraints.push(where("category", "==", filters.category));
        }

        // filters by price
        if (filters.minPrice !== null) {
          constraints.push(where("price", ">=", filters.minPrice));
        }
        if (filters.maxPrice !== null) {
          constraints.push(where("price", "<=", filters.maxPrice));
        }

        // sorting
        if (filters.sortBy === "price_desc") {
          constraints.push(orderBy("price", "desc"));
        } else {
          constraints.push(orderBy("price", "asc"));
        }

        // create a query
        const productsRef = collection(db, "products");
        const q = query(productsRef, ...constraints);
        const querySnapshot = await getDocs(q);

        const fetchedData: Product[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Product, "id">),
        }));

        if (isMounted) {
          setProducts(fetchedData);
          setError(null);
        }
      } catch (err: unknown) {
        if (isMounted) {
          console.error("Firestore Query Error:", err);
          setError(
            err instanceof Error ? err.message : "Unable to load products",
          );
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, [filters]);

  return { products, loading, error };
};
