import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getMainList,
  getSearchList,
  getDetailList,
  getGenreList,
  postFavorite,
} from "./axiosClient";

export const useQueryGetMainList = () =>
  useQuery({
    queryKey: ["main-list"],
    queryFn: getMainList,
  });

export const useQueryGetSearchList = (keyword: string) =>
  useQuery({
    queryKey: ["search-list", keyword],
    enabled: !!keyword && keyword.length >= 2,
    queryFn: () => getSearchList(keyword),
  });

export const useQueryGetDetailList = (id: string) =>
  useQuery({
    queryKey: ["detail-list"],
    queryFn: () => getDetailList(id),
  });

export const useQueryGetGenreList = () =>
  useQuery({
    queryKey: ["genre-list"],
    queryFn: () => getGenreList(),
  });

export const useMutationPostFavorite = (movieId: number) =>
  useMutation({
    mutationKey: ["post-favorite", movieId],
    mutationFn: () => postFavorite(movieId),
    onSuccess: () => {
      alert("Successfully added to favorites!");
    },
    onError: (error) => {
      console.error("Error posting favorite:", error);
    },
  });
