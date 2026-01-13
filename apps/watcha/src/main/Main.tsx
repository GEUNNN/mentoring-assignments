import Header from "../components/Header";
// ✅ 1. 'styles' 객체로 임포트
import styles from "./Main.module.css";
import { FC } from "react";
import {
  useQueryGetAiringTodayTVShows,
  useQueryGetMainList,
  useQueryGetUpcomingMovies,
} from "../query/query";
import MiniCarouselSection from "./components/MiniCarouselSection";
import { Carousel } from "@repo/ui";
import { useRouter } from "next/router";

const Main: FC = () => {
  const router = useRouter();
  const { data: mainList } = useQueryGetMainList();
  const { data: airingTodayList } = useQueryGetAiringTodayTVShows();
  const { data: upcomingList } = useQueryGetUpcomingMovies();

  const movieList = mainList?.results || [];
  const tvShowsArray = airingTodayList?.results || [];
  const upcomingListArray = upcomingList?.results || [];

  const handleClickItem = (id: number, type: "movie" | "tv") => {
    router.push({
      pathname: `/contents/${id}`,
      query: { type: type },
    });
  };

  return (
    <div className={styles["app-container"]}>
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
