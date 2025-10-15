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
