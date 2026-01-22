import { FC } from "react";
import { IMG_BASE_URL } from "../../apis/config";
import { Detail } from "../Contents.type";
import styles from "../Contents.module.css";

interface DetailProps {
  detail: Detail;
  postFavorite: () => void;
}

const DetailSection: FC<DetailProps> = ({ detail, postFavorite }) => {
  const {
    title,
    release_date,
    runtime,
    genres,
    overview,
    vote_average,
    vote_count,
    poster_path,
  } = detail;

  return (
    <section className={styles["detail-section"]}>
      <div className={styles["detail-info"]}>
        <h1 className={styles["content-title"]}>{title}</h1>
        <div className={styles["detail-subinfo-primary"]}>
          <span>{release_date?.substring(0, 4)}</span>
          <span>{`${runtime}분`}</span>
          <span>{genres?.[0]?.name}</span>
        </div>

        <p className={styles["content-overview"]}>{overview}</p>
        <div className={styles["detail-rating-info"]}>
          <div className={styles["detail-rating-item"]}>
            <div className={styles["value"]}>
              ⭐️ {vote_average ? vote_average.toFixed(1) : "N/A"}
            </div>
            <div className={styles["label"]}>평균 별점</div>
          </div>

          <div className={styles["detail-rating-item"]}>
            <div className={styles["value"]}>
              {vote_count?.toLocaleString()}
            </div>
            <div className={styles["label"]}>참여</div>
          </div>
        </div>
        <div className={styles["detail-actions-wrapper"]}>
          <ul className={styles["action-button-list"]}>
            <li className={styles["action-button-item"]} onClick={postFavorite}>
              <span className={styles["icon"]}>🤍</span>
              <span className={styles["label"]}>보고싶어요</span>
            </li>
            <li className={styles["action-button-item"]}>
              <span className={styles["icon"]}>⭐</span>
              <span className={styles["label"]}>평가하기</span>
            </li>
            <li className={styles["action-button-item"]}>
              <span className={styles["icon"]}>💬</span>
              <span className={styles["label"]}>왓챠파티</span>
            </li>
            <li className={styles["action-button-item"]}>
              <span className={styles["icon"]}>⋯</span>
              <span className={styles["label"]}>더보기</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["detail-movie-poster-wrapper"]}>
        <img
          className={styles["detail-movie-poster"]}
          src={`${IMG_BASE_URL}${poster_path}`}
          alt={title}
        />
      </div>
    </section>
  );
};

export default DetailSection;
