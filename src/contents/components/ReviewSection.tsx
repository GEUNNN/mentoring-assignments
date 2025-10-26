import React, { FC } from "react";
import { ReviewDetail } from "../Contents.type";
import { IMG_BASE_URL } from "../../apis/config";

interface ReviewSectionProps {
  reviewShowing: ReviewDetail[];
}

const ReviewSection: FC<ReviewSectionProps> = ({ reviewShowing }) => {
  return (
    <section className="detail-reviews-section">
      <h2 className="detail-reviews-title">사용자 평</h2>
      {reviewShowing.length > 0 ? (
        <ul className="review-list">
          {reviewShowing.map((review) => (
            <li className="review-item" key={review.id}>
              <div className="review-card">
                <div className="review-header">
                  <img
                    className="review-author-avatar"
                    src={
                      review.author_details.avatar_path
                        ? `${IMG_BASE_URL}${review.author_details.avatar_path}`
                        : ""
                    }
                    loading="lazy"
                    alt={`${review.author} avatar`}
                  />
                  <div className="review-author-info">
                    <span className="review-author-name">{review.author}</span>
                    {review.author_details.rating && (
                      <span className="review-rating">
                        ⭐️ {review.author_details.rating.toFixed(1)}
                      </span>
                    )}
                  </div>
                </div>
                <p className="review-content">{review.content}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-reviews">아직 작성된 평이 없습니다.</p>
      )}
    </section>
  );
};

export default ReviewSection;
