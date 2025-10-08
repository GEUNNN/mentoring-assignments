import { IMG_BASE_URL } from "../../utils/apiConfig";
import "../Search.css";

interface ResultItemProps {
  title: string;
  image: string;
}

const ResultItems = ({ title, image }: ResultItemProps) => {
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
