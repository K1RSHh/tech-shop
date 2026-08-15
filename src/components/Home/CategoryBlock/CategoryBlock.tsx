import React from "react";
import { useTabProducts } from "../../../hooks/useTabProducts";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
// import { useCartStore } from "../../store/useCartStore";

interface CategoryBlockProps {
  title: string;
  category: string;
  bannerImage: string;
  seriesList?: string[];
  initialSeries?: string;
}

export const CategoryBlock: React.FC<CategoryBlockProps> = ({
  title,
  category,
  bannerImage,
  seriesList = [],
  initialSeries = seriesList[0] || "",
}) => {
  const { activeSeries, setActiveSeries, products, loading, error } =
    useTabProducts(category, initialSeries, 5);

  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  //   const addToCart = useCartStore((state) => state.addToCart);

  return (
    <section className="py-8 text-white container max-w-350 m-auto overflow-hidden">
      {/* Перемикачі табів */}
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

      {/* Контент блоку */}
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 items-start">
        {/* Банер */}
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
              className="relative z-10 text-xs xl:mb-6 text-gray-300 underline hover:text-blue-400"
            >
              See All Products
            </a>
          </div>
        </div>

        {/* Сітка товарів */}
        {loading ? (
          <div className="h-80 flex items-center justify-center text-gray-500">
            Завантаження...
          </div>
        ) : error ? (
          <div className="h-80 flex items-center justify-center text-red-500">
            {error}
          </div>
        ) : (
          <div className="relative group">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex-[0_0_230px] md:flex-[0_0_234px] min-w-0 rounded-xl p-4 md:p-0 flex flex-col justify-between select-none"
                  >
                    <Link to="/">
                      <div>
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-40 h-40 md:w-56 md:h-56 m-auto mb-3 pointer-events-none mt-3"
                        />

                        <h4 className="text-xs font-normal mt-1 text-black">
                          {product.title}
                        </h4>
                      </div>

                      <div className="mt-2">
                        <p className="text-base font-bold text-white mb-2">
                          ${product.price}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
