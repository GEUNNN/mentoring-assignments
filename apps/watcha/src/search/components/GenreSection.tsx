import React from "react";
import styles from "../Search.module.css";
import { Genre } from "../Search.type";
import GenreItem from "./GenreItem";

interface GenreSectionProps {
  genres: Genre[];
}

const GenreSection: React.FC<GenreSectionProps> = ({ genres }) => {
  return (
    <section className={styles["carousel-container"]}>
      <p>비디오 장르</p>
      <div className={styles["slide-container"]}>
        {genres.map((genre: Genre) => (
          <div key={genre.id} className={styles["genre-item-container"]}>
            <GenreItem name={genre.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenreSection;
