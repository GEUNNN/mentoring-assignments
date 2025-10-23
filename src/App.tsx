import Header from "./components/Header";
import "./App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { IMG_BASE_URL } from "./apis/config";
import { useQueryGetMainList, useQueryGetUpcomingMovies } from "./apis/query";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: mainList } = useQueryGetMainList();
  const { data: upcomingList } = useQueryGetUpcomingMovies();

  useEffect(() => {
    if (!mainList) return;
    setMovieList(mainList.results);
  }, [mainList]);

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
      <section>
        <h2 className="upcoming-movies-label">Upcoming Movies</h2>
        <div className="upcoming-movies-container">
          {upcomingList &&
            upcomingList.results.map((movie: any) => (
              <div key={movie.id} className="upcoming-movies-item">
                <Link to={`/contents/${movie.id}`}>
                  <img
                    src={`${IMG_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    className="upcoming-movies-poster"
                  />
                </Link>
                <p className="upcoming-movies-title">{movie.title}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default App;
