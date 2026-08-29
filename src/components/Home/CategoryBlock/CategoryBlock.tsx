import React from "react";
import { useEffect } from "react";
import { useTabProducts } from "../../../hooks/useTabProducts";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import { Star, Heart, ShoppingCart } from "lucide-react";

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
                      className="flex-[0_0_230px] md:flex-[0_0_234px] group relative min-w-0 rounded-xl p-4 md:p-0 flex flex-col justify-between select-none"
                    >
                      <Link to="/" draggable={false} className="select-none">
                        <div>
                          <div className="flex w-40 h-40 md:w-56 md:h-56 m-auto mb-3 mt-3 justify-center">
                            {/* hover element */}
                            <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-200 ease-out">
                              <button
                                title="Add to Wishlist"
                                className="p-2 bg-white rounded-full shadow cursor-pointer hover:bg-red-50 hover:text-red-500 text-black transition-colors"
                              >
                                <Heart size={16} />
                              </button>
                              <button
                                title="Add to Cart"
                                className="p-2 bg-white rounded-full shadow cursor-pointer hover:bg-red-50 hover:text-red-500 text-black transition-colors"
                              >
                                <ShoppingCart size={16} />
                              </button>
                            </div>
                            <img
                              src={product.image}
                              alt={product.title}
                              draggable={false}
                              className="max-w-40 max-h-40 md:max-w-56 md:max-h-56 m-auto pointer-events-none"
                            />
                          </div>
                          {/* product rating */}
                          <div className="flex gap-0.5 items-center">
                            <Star color="#ffbb00" fill="#ffbb00" size={13} />
                            <Star color="#ffbb00" fill="#ffbb00" size={13} />
                            <Star color="#ffbb00" fill="#ffbb00" size={13} />
                            <Star color="#ffbb00" fill="#ffbb00" size={13} />
                            <Star color="#c4c4c4" fill="#c4c4c4" size={13} />
                            <div>
                              <p className="text-sm text-stone-300 pl-1">
                                Reviews (4)
                              </p>
                            </div>
                          </div>
                          <h4 className="text-sm font-normal mt-1 text-black">
                            {product.title}
                          </h4>
                        </div>

                        <div className="mt-2">
                          <span className="text-base font-bold text-black mb-2">
                            ${product.price}
                          </span>
                        </div>
                      </Link>
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
