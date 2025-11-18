import { useQuery } from "@tanstack/react-query";
import { getReviewList } from "../apis/axiosClient";

export const useQueryGetReviewList = (id: string) =>
  useQuery({
    queryKey: ["review-list", id],
    queryFn: () => getReviewList(id),
  });
