export const queryKey = {
  mainList: ["main-list"] as const,
  searchList: (keyword: string) => ["search-list", keyword] as const,
  detailList: (id: string) => ["detail-list", id] as const,
  tvList: (id: string) => ["tv-list", id] as const,
  genreList: ["genre-list"] as const,
  airingTodayTVShows: ["airing-today-tv-shows"] as const,
  upcomingMovies: ["upcoming-movies"] as const,
  credits: (id: string) => ["credits", id] as const,
  review: (id: string) => ["review-list", id] as const,
  postFavorite: (movieId: number) => ["post-favorite", movieId] as const,
};
