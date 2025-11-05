import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getMainList,
  getSearchList,
  getDetailList,
  getGenreList,
  postFavorite,
  getCredits,
  getReviewList,
  getUpcomingMovies,
  getAiringTodayTVShows,
  getTvList,
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

export const useQueryGetDetailList = (id: string, enabled: boolean) =>
  useQuery({
    queryKey: ["detail-list"],
    queryFn: () => getDetailList(id),
    enabled: enabled,
  });

export const useQueryGetTvList = (id: string, enabled: boolean) =>
  useQuery({
    queryKey: ["tv-list", id],
    queryFn: () => getTvList(id),
    enabled: enabled,
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

export const useQueryGetCredits = (id: string) =>
  useQuery({
    queryKey: ["credits", id],
    queryFn: () => getCredits(id),
  });

export const useQueryGetReviewList = (id: string) =>
  useQuery({
    queryKey: ["review-list", id],
    queryFn: () => getReviewList(id),
  });

export const useQueryGetAiringTodayTVShows = () =>
  useQuery({
    queryKey: ["airing-today-tv-shows"],
    queryFn: () => getAiringTodayTVShows(),
  });

export const useQueryGetUpcomingMovies = () =>
  useQuery({
    queryKey: ["upcoming-movies"],
    queryFn: () => getUpcomingMovies(),
  });
