import React, { FC } from "react";
import { ReviewDetail } from "../Contents.type";
import ReviewItem from "./ReviewItem";
import styles from "../Contents.module.css";

interface ReviewSectionProps {
  reviewShowing: ReviewDetail[];
}

const ReviewSection: FC<ReviewSectionProps> = ({ reviewShowing }) => {
  return (
    <section className={styles["detail-reviews-section"]}>
      <h2 className={styles["detail-reviews-title"]}>사용자 평</h2>
      {reviewShowing.length > 0 ? (
        <ul className={styles["review-list"]}>
          {reviewShowing.map((review) => (
            <ReviewItem review={review} key={review.id} />
          ))}
        </ul>
      ) : (
        <p className={styles["no-reviews"]}>아직 작성된 평이 없습니다.</p>
      )}
    </section>
  );
};

export default ReviewSection;
