import { useEffect, useState } from "react";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import type { Product } from "../../../types/product";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
// import { motion } from "motion/react";

export const NewProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  //   const scrollPrev = useCallback(() => {
  //     if (emblaApi) emblaApi.scrollPrev();
  //   }, [emblaApi]);

  //   const scrollNext = useCallback(() => {
  //     if (emblaApi) emblaApi.scrollNext();
  //   }, [emblaApi]);

  useEffect(() => {
    const getNewProducts = async () => {
      try {
        const q = query(
          collection(db, "products"),
          orderBy("createdAt", "desc"),
          limit(6),
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];

        setProducts(data);
      } catch (error) {
        console.error("Error loading new products:", error);
      } finally {
        setLoading(false);
      }
    };

    getNewProducts();
  }, []);

  if (loading)
    return (
      <div className="text-center py-10 text-gray-400">
        Loading new products...
      </div>
    );

  return (
    <section className="py-9 px-3.5 max-w-350 m-auto text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-black ">New Products</h2>
          <a
            href="/catalog?sort=newest"
            className="text-sm text-blue-500 hover:underline"
          >
            See All New Products
          </a>
        </div>

        <div className="flex items-center justify-between mb-6">
          {/* <div className="flex gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={scrollPrev}
              className="p-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
              aria-label="Previous products"
            >
              ❮
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={scrollNext}
              className="p-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
              aria-label="Next products"
            >
              ❯
            </motion.button>
          </div> */}
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4 justify-between">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] max-w-52 min-w-0 pl-4"
              >
                <Link to="/">
                  <div className="p-4 h-full flex flex-col justify-between transition-colors">
                    <div>
                      <div className="h-48 w-full rounded-xl overflow-hidden mb-4">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-sm h-14 font-normal text-black line-clamp-1">
                        {product.title}
                      </h3>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xl font-bold text-black">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
