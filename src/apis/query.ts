import { useQuery } from "@tanstack/react-query";
import {
  getMainList,
  getSearchList,
  getDetailList,
  getGenreList,
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
