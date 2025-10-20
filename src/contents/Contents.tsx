import React from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import "./Contents.css";
import { IMG_BASE_URL } from "../apis/config";
import { useQueryGetDetailList } from "../apis/query";

const Contents: React.FC = () => {
  const { id } = useParams();

  const { data: detail } = useQueryGetDetailList(id!);
  const {
    title,
    release_date,
    runtime,
    genres,
    overview,
    vote_average,
    vote_count,
  } = detail || {};

  if (!detail) return <div className="content-container">Loading...</div>;

  return (
    <div className="content-container">
      <Header isSearchPage={false} />
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
              <li className="action-button-item">
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
            src={`${IMG_BASE_URL}${detail?.poster_path}`}
            alt={detail?.title}
          />
        </div>
      </section>
    </div>
  );
};

export default Contents;
