import React from "react";
import { useEffect } from "react";
import { useTabProducts } from "../../../hooks/useTabProducts";
import useEmblaCarousel from "embla-carousel-react";
import { ProductCard } from "../../ProductCard/ProductCard";

interface CategoryBlockProps {
  title: string;
  category: string;
  bannerImage: string;
  seriesList?: string[];
  initialSeries?: string;
}

const EMBLA_OPTIONS = {
  align: "start" as const,
  loop: false,
  dragFree: true,
  containScroll: "trimSnaps" as const,
};

export const CategoryBlock: React.FC<CategoryBlockProps> = ({
  title,
  category,
  bannerImage,
  seriesList = [],
  initialSeries = seriesList[0] || "",
}) => {
  const { activeSeries, setActiveSeries, products, loading, error } =
    useTabProducts(category, initialSeries, 5);

  const [emblaRef, emblaApi] = useEmblaCarousel(EMBLA_OPTIONS);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, products]);

  return (
    <section className="text-white mb-10 container max-w-350 m-auto overflow-hidden">
      {/* Tab Switches */}
      {seriesList.length > 0 && (
        <div className="flex flex-wrap gap-6 border-b pb-3 mb-6 mx-3">
          {seriesList.map((series) => (
            <button
              key={series}
              onClick={() => setActiveSeries(series)}
              className={`text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                activeSeries === series
                  ? "text-black border-b-3 border-blue-500 -mb-3.5"
                  : "text-gray-400 -mb-3.5"
              }`}
            >
              MSI {series}
            </button>
          ))}
        </div>
      )}

      {/* Content Block */}
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 items-start">
        {/* Banner */}
        <div
          className="relative mx-2 h-20 md:h-90 overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="h-full m-auto flex flex-col justify-center md:justify-between text-center">
            <h3 className="relative z-10 text-xl font-bold uppercase md:top-1/2">
              {title}
            </h3>
            <a
              href={`/catalog?category=${category}`}
              className="relative z-10 text-xs md:mb-6 text-gray-300 underline hover:text-blue-400"
            >
              See All Products
            </a>
          </div>
        </div>

        {/* Product Grid */}
        <div className="min-w-0 w-full">
          {loading ? (
            <div className="h-80 flex items-center justify-center text-gray-500">
              Loading...
            </div>
          ) : error ? (
            <div className="h-80 flex items-center justify-center text-red-500">
              {error}
            </div>
          ) : (
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="flex-[0_0_230px] md:flex-[0_0_234px] relative min-w-0 rounded-xl p-4 md:p-0 flex flex-col justify-between select-none"
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
