import React from "react";
import { IMG_BASE_URL } from "../../apis/config";
import styles from "../Search.module.css";
import { Link } from "react-router";

interface ResultItemProps {
  id: number;
  title: string;
  image: string;
  year: string;
  voteAverage: number;
}

const ResultItems: React.FC<ResultItemProps> = ({
  id,
  title,
  image,
  year,
  voteAverage,
}) => {
  return (
    <Link
      className={styles["result-item-container"]}
      to={`/contents/${id}`}
      state={{ type: "movie" }}
    >
      <img
        className={styles["result-movie-poster"]}
        src={`${IMG_BASE_URL}${image}`}
        alt={title}
      />
      <div className={styles["item-info"]}>
        <h3 className={styles["item-title"]}>{title}</h3>
        <div className={styles["item-details"]}>
          <span className={styles["item-year"]}>{year}</span>
          <span className={styles["item-vote"]}>
            ⭐️ {voteAverage ? voteAverage.toFixed(1) : "N/A"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ResultItems;
