import instance from "./axiosInstance";

export const getMainList = async () => {
  const response = await instance.get("/trending/movie/day?language=en-US");
  return response.data;
};

export const getSearchList = async (keyword: string) => {
  const response = await instance.get(`/search/movie?query=${keyword}`);
  return response.data;
};

export const getDetailList = async (id: string) => {
  const response = await instance.get(`/movie/${id}`);
  return response.data;
};

export const getGenreList = async () => {
  const response = await instance.get(`/genre/movie/list?language=en`);
  return response.data;
};

export const postFavorite = async (movieId: number) => {
  const response = await instance.post(
    `/account/${process.env.ACCOUNT_ID}/favorite`,
    {
      media_type: "movie",
      media_id: movieId,
      favorite: true,
    }
  );

  console.log("postFavorite response:", response);

  return response.data;
};
