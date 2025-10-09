import { useParams } from "react-router";
import Header from "../components/Header";
import "./Contents.css";
import { useEffect, useState } from "react";
import { Detail } from "./Contents.type";
import { getApiOptions, IMG_BASE_URL } from "../utils/apiConfig";

const Contents = () => {
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

  const url = `${process.env.API_URL}/movie/${id}`;

  useEffect(() => {
    if (!id) return;

    fetch(url, getApiOptions())
      .then((res) => res.json())
      .then((json) => setDetail(json))
      .catch((err) => console.error(err));
  }, [id]);

  console.log("detail >>>", detail);

  if (!detail) return <div className="content-container">Loading...</div>;

  return (
    <div className="content-container">
      <Header isSearchPage={false} />
      <section className="detail-section">
        <div className="detail-info">
          <div>{title}</div>
          <div className="detail-subinfo">
            <span>{release_date}</span>
            <span>{runtime}분</span>
            <span>{genres?.[0]?.name}</span>
          </div>
          <div>{overview}</div>
          <div className="detail-subinfo">
            <span>{vote_average}</span>
            <span>{vote_count?.toLocaleString()}</span>
          </div>
        </div>
        <div>
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
