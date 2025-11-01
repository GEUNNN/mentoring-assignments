import { FC, useRef, useState } from "react";
import { Link } from "react-router";
import { IMG_BASE_URL } from "../../apis/config";

interface CarouselSectionProps {
  movieList: any[];
}

const CarouselSection: FC<CarouselSectionProps> = ({ movieList }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movieList.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex === movieList.length - 1 ? 0 : nextIndex + 1
    );
  };

  const slideTransformStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
    transition: currentIndex === 0 ? "none" : "transform 0.5s ease-in-out",
  };

  return (
    <section className="carousel-container">
      <div className="slide-container" style={slideTransformStyle}>
        {movieList.map((movie: any) => (
          <div key={movie.id} className="slide-item">
            <Link to={`/contents/${movie.id}`}>
              <img
                src={`${IMG_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
            </Link>
          </div>
        ))}
      </div>
      <button onClick={handlePrevious} className="nav-button left">
        <span>❮</span>
      </button>
      <button onClick={handleNext} className="nav-button right">
        <span>❯</span>
      </button>
    </section>
  );
};

export default CarouselSection;
