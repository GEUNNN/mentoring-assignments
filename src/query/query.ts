import { useQuery } from "@tanstack/react-query";
import {
  getMainList,
  getSearchList,
  getDetailList,
  getGenreList,
  getUpcomingMovies,
  getAiringTodayTVShows,
  getTvList,
} from "../apis/axiosClient";

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
