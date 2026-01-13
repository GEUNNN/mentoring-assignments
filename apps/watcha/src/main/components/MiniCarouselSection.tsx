import { FC, Suspense, useRef } from "react";
import { IMG_BASE_URL } from "../../apis/config";
import { MainItem } from "../Main.type";
import { useCarousel } from "../../hooks/useCarousel";
import styles from "../Main.module.css";
import Image from "next/image";

interface MiniCarouselSectionProps {
  list: MainItem[];
  label?: string;
  handleClickItem: (id: number, type: "movie" | "tv") => void;
}

const MiniCarouselSection: FC<MiniCarouselSectionProps> = ({
  list,
  label,
  handleClickItem,
}) => {
  const { moveCarousel, slideTransformStyle } = useCarousel({
    movieListLength: list.length,
  });
  const carouselRef = useRef(null);

  const extenedList =
    list.length > 0
      ? ([list[list.length - 1], ...list, list[0]] as MainItem[])
      : [];

  const fallbackContent = (
    <section className={styles["mini-carousel-container"]}>Loading...</section>
  );

  return (
    <Suspense fallback={fallbackContent}>
      <div className={styles["mini-carousel-wrapper"]}>
        <section className={styles["mini-carousel-container"]}>
          <h2 className={styles["mini-carousel-label"]}>{label}</h2>
          <div
            className={styles["mini-slide-container"]}
            ref={carouselRef}
            style={slideTransformStyle}
          >
            {extenedList.map((item: MainItem, index: number) => (
              <div
                key={`${item.id}-${index}`}
                className={styles["mini-slide-item"]}
              >
                <div
                  onClick={() =>
                    handleClickItem(
                      item.id,
                      item.video === false ? "movie" : "tv"
                    )
                  }
                  className={styles["mini-carousel-card"]}
                >
                  <div className={styles["mini-poster-wrapper"]}>
                    <img
                      src={`${IMG_BASE_URL}${item.poster_path}`}
                      alt={item.title}
                      loading="lazy"
                      className={styles["mini-carousel-image"]}
                    />
                    <div className={styles["card-overlay"]}>
                      <h3
                        className={styles["card-logo"]}
                        style={{ fontSize: "20px", fontWeight: "bold" }}
                      >
                        {item.title}
                      </h3>
                      <p className={styles["card-description"]}>
                        {item.overview}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => moveCarousel(-1)}
            className={`${styles["nav-button"]} ${styles.left}`}
          >
            <span>❮</span>
          </button>
          <button
            onClick={() => moveCarousel(1)}
            className={`${styles["nav-button"]} ${styles.right}`}
          >
            <span>❯</span>
          </button>
        </section>
      </div>
    </Suspense>
  );
};

export default MiniCarouselSection;
