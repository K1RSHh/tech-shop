// import { useEffect, useMemo } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
// import {
//   collection,
//   query,
//   where,
//   orderBy,
//   getDocs,
//   QueryConstraint,
// } from "firebase/firestore";
// import { db } from "../firebase";
// import type { Product } from "../types/product";
// import { fileURLToPath } from "url";

type SortOption = "position" | "price_asc" | "price_desc" | "newest";

interface FilterState {
  categories: string[];
  minPrice: number | null;
  maxPrice: number | null;
  sortBy: SortOption;
}

export const DEFAULT_FILTERS: FilterState = {
  categories: [],
  minPrice: null,
  maxPrice: null,
  sortBy: "newest",
};

export const useFilteredProducts = () => {
  const [searchParams] = useSearchParams();

  const initialCategoryFromUrl = searchParams.get("category");

  const [filters, setFilters] = useState<FilterState>({
    ...DEFAULT_FILTERS,
    categories: initialCategoryFromUrl ? [initialCategoryFromUrl] : [],
  });

  const toggleCategory = () => {
    filters.categories.map((item) =>
      item === initialCategoryFromUrl
        ? setFilters({
            ...filters,
            categories: filters.categories.filter(item !== useFilteredProducts),
          })
        : "",
    );
  };
};
