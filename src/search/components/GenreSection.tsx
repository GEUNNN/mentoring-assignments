import "../Search.css";
import { Genre } from "../Search.type";
import GenreItem from "./GenreItem";

interface GenreSectionProps {
  genres: Genre[];
}

const GenreSection = ({ genres }: GenreSectionProps) => {
  return (
    <section className="carousel-container">
      <p>비디오 장르</p>
      <div className="slide-container">
        {genres.map((genre: Genre) => (
          <div key={genre.id} className="genre-item-container">
            <GenreItem name={genre.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenreSection;
