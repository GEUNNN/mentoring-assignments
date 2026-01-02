import React, {
  createContext,
  FC,
  ReactNode,
  Suspense,
  useContext,
} from "react";
import { useCarousel } from "./hooks/useCarousel";
import { MainItem } from "./Carousel.type";
import "./Carousel.css";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

interface CarouselContextProps {
  /** 슬라이드의 아이템 리스트 */
  extendedMovieList: MainItem[];
  /** 슬라이드의 transform 스타일 */
  slideTransformStyle: React.CSSProperties;
  /** 슬라이드 이동 함수 */
  moveCarousel: (direction: number) => void;
  /** 아이템 클릭 함수 */
  handleClickItem: (id: number, type: "movie" | "tv") => void;
}

const CarouselContext = createContext<CarouselContextProps | null>(null);

const Track: FC = () => {
  const context = useContext(CarouselContext)!;
  const { extendedMovieList, slideTransformStyle, handleClickItem } = context;

  return (
    <div className="ui-slide-container" style={slideTransformStyle}>
      {extendedMovieList.map((movie: MainItem) => (
        <div
          key={movie.id}
          className="ui-slide-item"
          onClick={() => handleClickItem(movie.id, "movie")}
        >
          <img
            src={`${IMG_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="ui-movie-poster"
          />
        </div>
      ))}
    </div>
  );
};

const PrevButton: FC = () => {
  const context = useContext(CarouselContext)!;
  const { moveCarousel } = context;

  return (
    <button onClick={() => moveCarousel(-1)} className="ui-nav-button left">
      <span>❮</span>
    </button>
  );
};

const NextButton: FC = () => {
  const context = useContext(CarouselContext)!;
  const { moveCarousel } = context;

  return (
    <button onClick={() => moveCarousel(1)} className="ui-nav-button right">
      <span>❯</span>
    </button>
  );
};

interface CarouselProps {
  movieList: MainItem[] | [];
  children: ReactNode;
  handleClickItem: (id: number, type: "movie" | "tv") => void;
}

type CarouselComponent = FC<CarouselProps> & {
  Track: FC;
  PrevButton: FC;
  NextButton: FC;
};

const Carousel: CarouselComponent = ({
  movieList,
  children,
  handleClickItem,
}: CarouselProps) => {
  const { moveCarousel, slideTransformStyle } = useCarousel({
    movieListLength: movieList.length,
  });

  const extendedMovieList = [
    movieList[movieList.length - 1],
    ...movieList,
    movieList[0],
  ] as MainItem[];

  const value = {
    extendedMovieList,
    slideTransformStyle,
    moveCarousel,
    handleClickItem,
  };

  if (!movieList || movieList.length === 0) {
    return <section className="ui-carousel-container">Loading...</section>;
  }

  return (
    <Suspense fallback={<div>Loading carousel...</div>}>
      <CarouselContext.Provider value={value}>
        <section className="ui-carousel-container">{children}</section>
      </CarouselContext.Provider>
    </Suspense>
  );
};

export default Carousel;

Carousel.Track = Track;
Carousel.PrevButton = PrevButton;
Carousel.NextButton = NextButton;
