import Header from "../components/Header";
import "./Main.css";
import { FC, useEffect, useState } from "react";
import {
  useQueryGetAiringTodayTVShows,
  useQueryGetMainList,
  useQueryGetUpcomingMovies,
} from "../apis/query";
import CarouselSection from "./components/CarouselSection";
import MiniCarouselSection from "./components/MiniCarouselSection";

const Main: FC = () => {
  const [movieList, setMovieList] = useState([]);

  const { data: mainList } = useQueryGetMainList();
  const { data: airingTodayList } = useQueryGetAiringTodayTVShows();
  const { data: upcomingList } = useQueryGetUpcomingMovies();

  useEffect(() => {
    if (!mainList) return;
    setMovieList(mainList.results);
  }, [mainList]);

  const tvShowsArray = airingTodayList?.results || [];

  return (
    <div className="app-container">
      <Header isSearchPage={false} />
      <CarouselSection movieList={movieList} />
      <MiniCarouselSection label="Tv show" list={tvShowsArray} />
      <MiniCarouselSection
        label="Upcoming Movies"
        list={upcomingList?.results || []}
      />
    </div>
  );
};

export default Main;
