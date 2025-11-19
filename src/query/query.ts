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
import { queryKey } from "./query-key";

export const useQueryGetMainList = () =>
  useQuery({
    queryKey: queryKey.mainList,
    queryFn: getMainList,
  });

export const useQueryGetSearchList = (keyword: string) =>
  useQuery({
    queryKey: queryKey.searchList(keyword),
    enabled: !!keyword && keyword.length >= 2,
    queryFn: () => getSearchList(keyword),
  });

export const useQueryGetDetailList = (id: string, enabled: boolean) =>
  useQuery({
    queryKey: queryKey.detailList(id),
    queryFn: () => getDetailList(id),
    enabled: enabled,
  });

export const useQueryGetTvList = (id: string, enabled: boolean) =>
  useQuery({
    queryKey: queryKey.tvList(id),
    queryFn: () => getTvList(id),
    enabled: enabled,
  });

export const useQueryGetGenreList = () =>
  useQuery({
    queryKey: queryKey.genreList,
    queryFn: () => getGenreList(),
  });

export const useQueryGetAiringTodayTVShows = () =>
  useQuery({
    queryKey: queryKey.airingTodayTVShows,
    queryFn: () => getAiringTodayTVShows(),
  });

export const useQueryGetUpcomingMovies = () =>
  useQuery({
    queryKey: queryKey.upcomingMovies,
    queryFn: () => getUpcomingMovies(),
  });
