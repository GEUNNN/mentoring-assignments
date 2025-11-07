import { FC, Suspense, useEffect, useRef, useState } from "react";
import { IMG_BASE_URL } from "../../apis/config";
import { Link } from "react-router";

interface MiniCarouselSectionProps {
  list: any[];
  label?: string;
}

const MiniCarouselSection: FC<MiniCarouselSectionProps> = ({ list, label }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const isTransitioning = useRef(false);
  const carouselRef = useRef(null);

  const extenedList =
    list.length > 0 ? [list[list.length - 1], ...list, list[0]] : [];

  useEffect(() => {
    if (isTransitioning.current) {
      const timer = setTimeout(() => {
        isTransitioning.current = false;
        if (currentIndex >= list.length + 1) {
          setCurrentIndex(1);
        } else if (currentIndex <= 0) {
          setCurrentIndex(list.length);
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, list.length]);

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

  const fallbackContent = (
    <section className="mini-carousel-container">Loading...</section>
  );

  return (
    <Suspense fallback={fallbackContent}>
      <div className="mini-carousel-wrapper">
        <section className="mini-carousel-container">
          <h2 className="mini-carousel-label">{label}</h2>
          <div
            className="mini-slide-container"
            ref={carouselRef}
            style={slideTransformStyle}
          >
            {extenedList.map((item: any, idx: number) => (
              <div
                key={item.id ? `movie-${item.id}` : `clone-${idx}`}
                className="mini-slide-item"
              >
                <Link
                  to={`/contents/${item.id}`}
                  state={{ type: "tv" }}
                  className="mini-carousel-card"
                >
                  <div className="mini-poster-wrapper">
                    <img
                      src={`${IMG_BASE_URL}${item.poster_path}`}
                      alt={item.title}
                      loading="lazy"
                      className="mini-carousel-image"
                    />
                    <div className="card-overlay">
                      <h3
                        className="card-logo"
                        style={{ fontSize: "20px", fontWeight: "bold" }}
                      >
                        {item.title}
                      </h3>
                      <p className="card-description">{item.overview}</p>
                    </div>
                  </div>
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
      </div>
    </Suspense>
  );
};

export default MiniCarouselSection;
