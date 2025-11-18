import { useMutation } from "@tanstack/react-query";
import { postFavorite } from "../apis/axiosClient";

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
