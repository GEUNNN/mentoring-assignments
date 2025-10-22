import React from "react";
import { IMG_BASE_URL } from "../../apis/config";
import "../Search.css";
import { Link } from "react-router";

interface ResultItemProps {
  id: number;
  title: string;
  image: string;
  year: string;
  voteAverage: number;
}

const ResultItems: React.FC<ResultItemProps> = ({
  id,
  title,
  image,
  year,
  voteAverage,
}) => {
  return (
    <Link className="result-item-container" to={`/contents/${id}`}>
      <img
        className="result-movie-poster"
        src={`${IMG_BASE_URL}${image}`}
        alt={title}
      />
      <div className="item-info">
        <h3 className="item-title">{title}</h3>
        <div className="item-details">
          <span className="item-year">{year}</span>
          <span className="item-vote">
            ⭐️ {voteAverage ? voteAverage.toFixed(1) : "N/A"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ResultItems;
