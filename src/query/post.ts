import { useMutation } from "@tanstack/react-query";
import { postFavorite } from "../apis/axiosClient";
import { queryKey } from "./query-key";

export const useMutationPostFavorite = (movieId: number) =>
  useMutation({
    mutationKey: queryKey.postFavorite(movieId),
    mutationFn: () => postFavorite(movieId),
    onSuccess: () => {
      alert("Successfully added to favorites!");
    },
    onError: (error) => {
      console.error("Error posting favorite:", error);
    },
  });
