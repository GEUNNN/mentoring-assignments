import React, { FC } from "react";
import { ReviewDetail } from "../Contents.type";
import { IMG_BASE_URL } from "../../apis/config";
import styles from "../Contents.module.css";

interface ReviewItemProps {
  review: ReviewDetail;
}

const ReviewItem: FC<ReviewItemProps> = ({ review }) => {
  const { id, author, author_details, content } = review;

  return (
    <li className={styles["review-item"]} key={id}>
      <div className={styles["review-card"]}>
        <div className={styles["review-header"]}>
          <img
            className={styles["review-author-avatar"]}
            src={
              author_details.avatar_path
                ? `${IMG_BASE_URL}${author_details.avatar_path}`
                : ""
            }
            loading="lazy"
            alt={`${author} avatar`}
          />
          <div className={styles["review-author-info"]}>
            <span className={styles["review-author-name"]}>{author}</span>
            {author_details.rating && (
              <span className={styles["review-rating"]}>
                ⭐️ {author_details.rating.toFixed(1)}
              </span>
            )}
          </div>
        </div>
        <p className={styles["review-content"]}>{content}</p>
      </div>
    </li>
  );
};

export default ReviewItem;
