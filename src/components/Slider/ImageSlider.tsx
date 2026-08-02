import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { motion } from "framer-motion";
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
    <div className="relative w-full mt-4 lg:mt-0 max-w-7xl mx-auto px-4 md:px-8 group">
      <div className="overflow-hidden shadow-2xl bg-neutral-900" ref={emblaRef}>
        <div className="flex">
          {slides.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative h-24 sm:h-80 md:h-[173px] xl:h-[328px]"
            >
              <img
                src={item.large}
                srcSet={`${item.small} 480w, ${item.medium} 1024w, ${item.large} 1920w`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                alt={item.alt}
                className="w-full h-full select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={scrollPrev}
        className="absolute left-5 md:left-10 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 backdrop-blur-md text-white p-2.5 sm:p-3 rounded-full cursor-pointer z-10 transition-all "
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-white" />
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={scrollNext}
        className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 backdrop-blur-md text-white p-2.5 sm:p-3 rounded-full cursor-pointer z-10 transition-all "
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-white" />
      </motion.button>
    </div>
  );
}
