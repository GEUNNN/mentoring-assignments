import Header from "../components/Header";
import "./Main.module.css";
import { FC } from "react";
import {
  useQueryGetAiringTodayTVShows,
  useQueryGetMainList,
  useQueryGetUpcomingMovies,
} from "../query/query";
import MiniCarouselSection from "./components/MiniCarouselSection";
import { Carousel } from "@repo/ui";
import { useNavigate } from "react-router";

const Main: FC = () => {
  const navigate = useNavigate();
  const { data: mainList } = useQueryGetMainList();
  const { data: airingTodayList } = useQueryGetAiringTodayTVShows();
  const { data: upcomingList } = useQueryGetUpcomingMovies();

  const movieList = mainList?.results || [];
  const tvShowsArray = airingTodayList?.results || [];
  const upcomingListArray = upcomingList?.results || [];

  const handleClickItem = (id: number, type: "movie" | "tv") => {
    console.log("type >>>", type);
    navigate(`/contents/${id}`, { state: type });
  };

  return (
    <div className="app-container">
      <Header isSearchPage={false} />
      <Carousel movieList={movieList} handleClickItem={handleClickItem}>
        <Carousel.Track />
        <Carousel.PrevButton />
        <Carousel.NextButton />
      </Carousel>
      <MiniCarouselSection
        label="Tv show"
        list={tvShowsArray}
        handleClickItem={handleClickItem}
      />
      <MiniCarouselSection
        label="Upcoming Movies"
        list={upcomingListArray}
        handleClickItem={handleClickItem}
      />
    </div>
  );
};

export default Main;
