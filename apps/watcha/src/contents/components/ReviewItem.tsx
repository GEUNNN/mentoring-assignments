import React, { FC } from "react";
import { ReviewDetail } from "../Contents.type";
import { IMG_BASE_URL } from "../../apis/config";

interface ReviewItemProps {
  review: ReviewDetail;
}

const ReviewItem: FC<ReviewItemProps> = ({ review }) => {
  const { id, author, author_details, content } = review;

  return (
    <li className="review-item" key={id}>
      <div className="review-card">
        <div className="review-header">
          <img
            className="review-author-avatar"
            src={
              author_details.avatar_path
                ? `${IMG_BASE_URL}${author_details.avatar_path}`
                : ""
            }
            loading="lazy"
            alt={`${author} avatar`}
          />
          <div className="review-author-info">
            <span className="review-author-name">{author}</span>
            {author_details.rating && (
              <span className="review-rating">
                ⭐️ {author_details.rating.toFixed(1)}
              </span>
            )}
          </div>
        </div>
        <p className="review-content">{content}</p>
      </div>
    </li>
  );
};

export default ReviewItem;
