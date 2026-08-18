import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { Link } from "react-router-dom";

const reviews = [
  {
    review:
      "My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.",
  },
  {
    review:
      "My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.",
  },
  {
    review:
      "My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.",
  },
];

export default function CompanyReviews() {
  const options: EmblaOptionsType = { loop: false, align: "start" };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;

    const onInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
    };

    const onSelectHandler = () => {
      onSelect();
    };

    emblaApi.on("init", onInit);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelectHandler);

    queueMicrotask(() => {
      onInit();
      onSelectHandler();
    });

    return () => {
      emblaApi.off("init", onInit);
      emblaApi.off("reInit", onInit);
      emblaApi.off("select", onSelectHandler);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="max-w-290 mx-2 xl:mx-auto bg-slate-100 px-4 py-2.5 xl:px-28 xl:py-6">
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Container */}
        <div className="flex touch-pan-y">
          {/* Slides */}
          {reviews.map((content, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 w-full">
              <div className="flex rounded-xl text-xl font-semibold text-black">
                <div className="mr-4 text-6xl">‘’</div>
                <div className="text-sm">{content.review}</div>
              </div>
              <div className="flex w-full text-black justify-end mt-3">
                - Tama Brown
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Pagination */}
      <div className="flex items-center text-center justify-between mt-2">
        <Link
          to="/"
          className="text-blue-600 border-3 border-blue-600 text-sm font-semibold px-6 py-2 rounded-3xl"
        >
          Leave Us A Review
        </Link>
        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === selectedIndex
                  ? "bg-blue-600"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
