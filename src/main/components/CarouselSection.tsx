import { FC, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { IMG_BASE_URL } from "../../apis/config";
import { MainListResult } from "../Main.type";

interface CarouselSectionProps {
  movieList: MainListResult[];
}

const CarouselSection: FC<CarouselSectionProps> = ({ movieList }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const isTransitioning = useRef(false);
  const carouselRef = useRef(null);

  const extendedMovieList = [
    movieList[movieList.length - 1],
    ...movieList,
    movieList[0],
  ] as MainListResult[];

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
    if (!isTransitioning.current) {
      isTransitioning.current = true;
      setCurrentIndex((prevIndex) => prevIndex + direction);
    }
  };

  const slideTransformStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
    transition: isTransitioning.current ? "transform 0.3s ease-in-out" : "none",
  };

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
        {extendedMovieList.map((movie: MainListResult, idx: number) => (
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
