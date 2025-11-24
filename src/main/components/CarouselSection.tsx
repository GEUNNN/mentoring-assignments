import { FC, useRef } from "react";
import { IMG_BASE_URL } from "../../apis/config";
import { MainListResult } from "../Main.type";
import { useCarousel } from "../../hooks/useCarousel";

interface CarouselSectionProps {
  movieList: MainListResult[];
}

const CarouselSection: FC<CarouselSectionProps> = ({ movieList }) => {
  const { moveCarousel, slideTransformStyle, handleClickItem } = useCarousel({
    movieListLength: movieList.length,
  });
  const carouselRef = useRef(null);

  const extendedMovieList = [
    movieList[movieList.length - 1],
    ...movieList,
    movieList[0],
  ] as MainListResult[];

  if (!movieList || movieList.length === 0) {
    return <section className="carousel-container">Loading...</section>;
  }

  return (
    <section className="carousel-container">
      <div
        className="slide-container"
        style={slideTransformStyle}
        ref={carouselRef}
      >
        {extendedMovieList.map((movie: MainListResult) => (
          <div
            key={movie.id}
            className="slide-item"
            onClick={() => handleClickItem(movie.id, "movie")}
          >
            <img
              src={`${IMG_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
          </div>
        ))}
      </div>
      <button onClick={() => moveCarousel(-1)} className="nav-button left">
        <span>❮</span>
      </button>
      <button onClick={() => moveCarousel(1)} className="nav-button right">
        <span>❯</span>
      </button>
    </section>
  );
};

export default CarouselSection;
