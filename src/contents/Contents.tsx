import React from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import "./Contents.css";
import { useEffect, useState } from "react";
import { Detail } from "./Contents.type";
import { IMG_BASE_URL } from "../apis/config";
import instance from "../apis/axiosInstance";

const Contents: React.FC = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<Detail>();
  const {
    title,
    release_date,
    runtime,
    genres,
    overview,
    vote_average,
    vote_count,
  } = detail || {};

  const url = `/movie/${id}`;

  useEffect(() => {
    if (!id) return;

    instance.get(url).then((res) => {
      setDetail(res.data);
    });
  }, [id]);

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
