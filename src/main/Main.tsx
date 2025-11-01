import Header from "../components/Header";
import "./Main.css";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { IMG_BASE_URL } from "../apis/config";
import { useQueryGetMainList, useQueryGetUpcomingMovies } from "../apis/query";
import CarouselSection from "./components/CarouselSection";

const Main = () => {
  const [movieList, setMovieList] = useState([]);

  const { data: mainList } = useQueryGetMainList();
  const { data: upcomingList } = useQueryGetUpcomingMovies();

  useEffect(() => {
    if (!mainList) return;
    setMovieList(mainList.results);
  }, [mainList]);

  return (
    <div className="app-container">
      <Header isSearchPage={false} />
      <CarouselSection movieList={movieList} />
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
                    loading="lazy"
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

export default Main;
