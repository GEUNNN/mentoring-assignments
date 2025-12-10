import { FC, Suspense, useRef } from "react";
import { IMG_BASE_URL } from "../../apis/config";
import { MainListResult } from "../Main.type";
import { useCarousel } from "../../hooks/useCarousel";

interface MiniCarouselSectionProps {
  list: MainListResult[];
  label?: string;
}

const MiniCarouselSection: FC<MiniCarouselSectionProps> = ({ list, label }) => {
  const { moveCarousel, slideTransformStyle, handleClickItem } = useCarousel({
    movieListLength: list.length,
  });
  const carouselRef = useRef(null);

  const extenedList =
    list.length > 0
      ? ([list[list.length - 1], ...list, list[0]] as MainListResult[])
      : [];

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
            {extenedList.map((item: MainListResult) => (
              <div key={item.id} className="mini-slide-item">
                <div
                  onClick={() =>
                    handleClickItem(
                      item.id,
                      item.video === false ? "movie" : "tv"
                    )
                  }
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
                </div>
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
