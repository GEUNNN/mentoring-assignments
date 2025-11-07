import Header from "../components/Header";
import "./Main.css";
import { FC } from "react";
import {
  useQueryGetAiringTodayTVShows,
  useQueryGetMainList,
  useQueryGetUpcomingMovies,
} from "../apis/query";
import MiniCarouselSection from "./components/MiniCarouselSection";
import Carousel from "./components/Carousel/Carousel";

const Main: FC = () => {
  const { data: mainList } = useQueryGetMainList();
  const { data: airingTodayList } = useQueryGetAiringTodayTVShows();
  const { data: upcomingList } = useQueryGetUpcomingMovies();

  const movieList = mainList?.results || [];
  const tvShowsArray = airingTodayList?.results || [];
  const upcomingListArray = upcomingList?.results || [];

  return (
    <div className="app-container">
      <Header isSearchPage={false} />
      <Carousel movieList={movieList}>
        <Carousel.Track />
        <Carousel.PrevButton />
        <Carousel.NextButton />
      </Carousel>
      <MiniCarouselSection label="Tv show" list={tvShowsArray} />
      <MiniCarouselSection label="Upcoming Movies" list={upcomingListArray} />
    </div>
  );
};

export default Main;
