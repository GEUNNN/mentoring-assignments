import React from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import "./Contents.css";
import { IMG_BASE_URL } from "../apis/config";
import {
  useMutationPostFavorite,
  useQueryGetDetailList,
  useQueryGetCredits,
  useQueryGetReviewList,
} from "../apis/query";

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

  const { mutate: postFavorite } = useMutationPostFavorite(Number(id));

  const { data: credits } = useQueryGetCredits(id!);
  const { cast, crew } = credits || {};
  const castMembers = cast?.slice(0, 5);
  const crewMembers = crew?.slice(0, 5);

  const { data: reviewList } = useQueryGetReviewList(id!);
  const reviews = reviewList?.results || [];
  const reviewShowing = reviews.slice(0, 6);

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
            src={`${IMG_BASE_URL}${detail?.poster_path}`}
            alt={detail?.title}
          />
        </div>
      </section>
      <section className="detail-credits">
        <h2>출연/제작진</h2>
        <ul className="detail-cast-list">
          {castMembers?.map((cast, idx) => (
            <li className="detail-cast-item" key={idx}>
              <img
                className="detail-cast-item-image"
                loading="lazy"
                src={`${IMG_BASE_URL}${cast.profile_path}`}
                alt={cast.name}
              />
              <div className="detail-cast-item-info">
                <div className="detail-cast-item-name">{cast.name}</div>
                <div className="detail-cast-item-character">
                  {cast.character}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ul className="detail-crew-list">
          {crewMembers?.map((crew, idx) => (
            <li className="detail-crew-item" key={idx}>
              {crew.profile_path && (
                <img
                  className="detail-crew-item-image"
                  loading="lazy"
                  src={`${IMG_BASE_URL}${crew.profile_path}`}
                  alt={crew.name}
                />
              )}
              <div className="detail-crew-item-info">
                <div className="detail-crew-item-name">{crew.name}</div>
                <div className="detail-crew-item-job">{crew.job}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>

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
                      <span className="review-author-name">
                        {review.author}
                      </span>
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
    </div>
  );
};

export default Contents;
