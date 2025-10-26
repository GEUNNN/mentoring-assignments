import React, { FC } from "react";
import { IMG_BASE_URL } from "../../apis/config";
import { Detail } from "../Contents.type";

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
    <section className="detail-section">
      <div className="detail-info">
        <h1 className="content-title">{title}</h1>
        <div className="detail-subinfo-primary">
          <span>{release_date?.substring(0, 4)}</span>
          <span>{`${runtime}분`}</span>
          <span>{genres?.[0]?.name}</span>
        </div>

        <p className="content-overview">{overview}</p>
        <div className="detail-rating-info">
          <div className="detail-rating-item">
            <div className="value">
              ⭐️ {vote_average ? vote_average.toFixed(1) : "N/A"}
            </div>
            <div className="label">평균 별점</div>
          </div>

          <div className="detail-rating-item">
            <div className="value">{vote_count?.toLocaleString()}</div>
            <div className="label">참여</div>
          </div>
        </div>
        <div className="detail-actions-wrapper">
          <ul className="action-button-list">
            <li className="action-button-item" onClick={() => postFavorite()}>
              <span className="icon">🤍</span>
              <span className="label">보고싶어요</span>
            </li>
            <li className="action-button-item">
              <span className="icon">⭐</span>
              <span className="label">평가하기</span>
            </li>
            <li className="action-button-item">
              <span className="icon">💬</span>
              <span className="label">왓챠파티</span>
            </li>
            <li className="action-button-item">
              <span className="icon">⋯</span>
              <span className="label">더보기</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="detail-movie-poster-wrapper">
        <img
          className="detail-movie-poster"
          src={`${IMG_BASE_URL}${poster_path}`}
          alt={title}
        />
      </div>
    </section>
  );
};

export default DetailSection;
