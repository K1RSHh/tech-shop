import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  slides: {
    small: string;
    medium: string;
    large: string;
    alt: string;
  }[];
}

export default function ImageSlider({ slides }: ImageSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative max-w-86.25 mx-auto">
      <div
        className="overflow-hidden  shadow-2xl bg-neutral-900"
        ref={emblaRef}
      >
        <div className="flex">
          {slides.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative h-26 sm:h-96"
            >
              <img
                src={item.large}
                srcSet={`${item.small} 400w, ${item.medium} 800w, ${item.large} 1200w`}
                sizes="(max-width: 640px) 100vw, 800px"
                alt={item.alt}
                className="w-full h-full select-none"
              />
            </div>
          ))}
        </div>
      </div>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-zinc-800/80 text-white p-3 rounded-r-full cursor-pointer z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={25} color="#fff" />
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-zinc-800/80 text-white p-3 rounded-l-full cursor-pointer z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={25} color="#fff" />
      </motion.button>
    </div>
  );
}
