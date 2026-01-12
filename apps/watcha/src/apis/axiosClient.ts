import instance from "./axiosInstance";

export const getMainList = () =>
  instance.get("/trending/all/day?language=en-US").then((res) => res.data);

export const getSearchList = (keyword: string) =>
  instance.get(`/search/movie?query=${keyword}`).then((res) => res.data);

export const getDetailList = (id: string, type: "movie" | "tv") =>
  instance.get(`/${type}/${id}`).then((res) => res.data);

export const getGenreList = () =>
  instance.get(`/genre/movie/list?language=en`).then((res) => res.data);

export const postFavorite = (movieId: number) =>
  instance
    .post(`/account/${process.env.NEXT_PUBLIC_ACCOUNT_ID}/favorite`, {
      media_type: "movie",
      media_id: movieId,
      favorite: true,
    })
    .then((res) => res.data);

export const getCredits = (id: string, type: "movie" | "tv") =>
  instance.get(`/${type}/${id}/credits`).then((res) => res.data);

export const getReviewList = (id: string) =>
  instance.get(`/movie/${id}/reviews`).then((res) => res.data);

export const getAiringTodayTVShows = () =>
  instance.get(`/tv/airing_today`).then((res) => res.data);

export const getUpcomingMovies = () =>
  instance.get(`/movie/upcoming`).then((res) => res.data);
