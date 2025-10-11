import Header from "./components/Header";
import "./App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getApiOptions, IMG_BASE_URL } from "./utils/apiConfig";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const url = `${process.env.API_URL}/trending/movie/day?language=en-US`;

  useEffect(() => {
    fetch(url, getApiOptions())
      .then((res) => res.json())
      .then((json) => setMovieList(json.results))
      .catch((err) => console.error(err));
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movieList.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex === movieList.length - 1 ? 0 : nextIndex + 1
    );
  };

  const slideTransformStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
    transition: currentIndex === 0 ? "none" : "transform 0.5s ease-in-out",
  };

  return (
    <div className="app-container">
      <Header isSearchPage={false} />
      <section className="carousel-container">
        <div className="slide-container" style={slideTransformStyle}>
          {movieList.map((movie: any) => (
            <div key={movie.id} className="slide-item">
              <Link to={`/contents/${movie.id}`}>
                <img
                  src={`${IMG_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
              </Link>
            </div>
          ))}
        </div>
        <button onClick={handlePrevious} className="nav-button left">
          <span>❮</span>
        </button>
        <button onClick={handleNext} className="nav-button right">
          <span>❯</span>
        </button>
      </section>
    </div>
  );
};

export default App;
