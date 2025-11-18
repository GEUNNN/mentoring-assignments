import React, { createContext, FC, ReactNode, useContext } from "react";
import { Link } from "react-router";
import { IMG_BASE_URL } from "../../../apis/config";
import { MainListResult } from "../../Main.type";
import { useCarousel } from "../../../hooks/useCarousel";

interface CarouselContextProps {
  extendedMovieList: MainListResult[];
  slideTransformStyle: React.CSSProperties;
  moveCarousel: (direction: number) => void;
}

const CarouselContext = createContext<CarouselContextProps | null>(null);

const Track: FC = () => {
  const context = useContext(CarouselContext)!;
  const { extendedMovieList, slideTransformStyle } = context;

  return (
    <div className="slide-container" style={slideTransformStyle}>
      {extendedMovieList.map((movie: MainListResult) => (
        <div key={movie.id} className="slide-item">
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
  movieList: MainListResult[] | [];
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
  const { moveCarousel, slideTransformStyle } = useCarousel({
    movieListLength: movieList.length,
  });

  const extendedMovieList = [
    movieList[movieList.length - 1],
    ...movieList,
    movieList[0],
  ] as MainListResult[];

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
