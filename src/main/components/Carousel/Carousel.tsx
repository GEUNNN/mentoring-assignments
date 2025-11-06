import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router";
import { IMG_BASE_URL } from "../../../apis/config";

interface CarouselContextProps {
  extendedMovieList: any[];
  slideTransformStyle: React.CSSProperties;
  moveCarousel: (direction: number) => void;
}

const CarouselContext = createContext<CarouselContextProps | null>(null);

const Track: FC = () => {
  const context = useContext(CarouselContext)!;
  const { extendedMovieList, slideTransformStyle } = context;

  return (
    <div className="slide-container" style={slideTransformStyle}>
      {extendedMovieList.map((movie: any, idx: number) => (
        <div key={idx} className="slide-item">
          <Link to={`/contents/${movie.id}`} state={{ type: "movie" }}>
            <img
              src={`${IMG_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

const PrevButton: FC = () => {
  const context = useContext(CarouselContext)!;
  const { moveCarousel } = context;

  return (
    <button onClick={() => moveCarousel(-1)} className="nav-button left">
      <span>❮</span>
    </button>
  );
};

const NextButton: FC = () => {
  const context = useContext(CarouselContext)!;
  const { moveCarousel } = context;

  return (
    <button onClick={() => moveCarousel(1)} className="nav-button right">
      <span>❯</span>
    </button>
  );
};

interface CarouselProps {
  movieList: any[];
  children: ReactNode;
}

type CarouselComponent = FC<CarouselProps> & {
  Track: FC;
  PrevButton: FC;
  NextButton: FC;
};

const Carousel: CarouselComponent = ({
  movieList,
  children,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const isTransitioning = useRef(false);

  const extendedMovieList = [
    movieList[movieList.length - 1],
    ...movieList,
    movieList[0],
  ];

  useEffect(() => {
    if (isTransitioning.current) {
      const timer = setTimeout(() => {
        isTransitioning.current = false;
        if (currentIndex >= movieList.length + 1) {
          setCurrentIndex(1);
        } else if (currentIndex <= 0) {
          setCurrentIndex(movieList.length);
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, movieList.length]);

  const moveCarousel = (direction: number) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setCurrentIndex((prevIndex) => prevIndex + direction);
  };

  const slideTransformStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
    transition: isTransitioning.current ? "transform 0.3s ease-in-out" : "none",
  };

  const value = {
    extendedMovieList,
    slideTransformStyle,
    moveCarousel,
  };

  if (!movieList || movieList.length === 0) {
    return <section className="carousel-container">Loading...</section>;
  }

  return (
    <CarouselContext.Provider value={value}>
      <section className="carousel-container">{children}</section>
    </CarouselContext.Provider>
  );
};

export default Carousel;

Carousel.Track = Track;
Carousel.PrevButton = PrevButton;
Carousel.NextButton = NextButton;
