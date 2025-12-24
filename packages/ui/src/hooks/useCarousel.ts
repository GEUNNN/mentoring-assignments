import { useEffect, useRef, useState } from "react";

interface UseCarouselProps {
  movieListLength: number;
}

export const useCarousel = ({ movieListLength }: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const isTransitioning = useRef(false);

  useEffect(() => {
    if (isTransitioning.current) {
      const timer = setTimeout(() => {
        isTransitioning.current = false;
        if (currentIndex >= movieListLength + 1) {
          setCurrentIndex(1);
        } else if (currentIndex <= 0) {
          setCurrentIndex(movieListLength);
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, movieListLength]);

  const moveCarousel = (direction: number) => {
    if (!isTransitioning.current) {
      isTransitioning.current = true;
      setCurrentIndex((prevIndex) => prevIndex + direction);
    }
  };

  const slideTransformStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
    transition: isTransitioning.current ? "transform 0.3s ease-in-out" : "none",
  };

  return { moveCarousel, slideTransformStyle };
};
