import { useQuery } from "@tanstack/react-query";
import { getCredits } from "../apis/axiosClient";
import { queryKey } from "./query-key";

export const useQueryGetCredits = (id: string, type: "movie" | "tv") =>
  useQuery({
    queryKey: queryKey.credits(id),
    queryFn: () => getCredits(id, type),
  });
