import { useQuery } from "@tanstack/react-query";
import { getCredits } from "../apis/axiosClient";
import { queryKey } from "./query-key";

export const useQueryGetCredits = (id: string) =>
  useQuery({
    queryKey: queryKey.credits(id),
    queryFn: () => getCredits(id),
  });
