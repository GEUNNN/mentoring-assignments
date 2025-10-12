import React from "react";
import { IMG_BASE_URL } from "../../utils/apiConfig";
import "../Search.css";

interface ResultItemProps {
  title: string;
  image: string;
}

const ResultItems: React.FC<ResultItemProps> = ({ title, image }) => {
  return (
    <div className="result-item-container">
      <img
        className="movie-poster"
        src={`${IMG_BASE_URL}${image}`}
        alt={title}
      />
      <h3 className="title">{title}</h3>
    </div>
  );
};

export default ResultItems;
