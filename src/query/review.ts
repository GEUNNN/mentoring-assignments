import { useQuery } from "@tanstack/react-query";
import { getReviewList } from "../apis/axiosClient";
import { queryKey } from "./query-key";

export const useQueryGetReviewList = (id: string) =>
  useQuery({
    queryKey: queryKey.review(id),
    queryFn: () => getReviewList(id),
  });
