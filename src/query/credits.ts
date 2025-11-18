import { useQuery } from "@tanstack/react-query";
import { getCredits } from "../apis/axiosClient";

export const useQueryGetCredits = (id: string) =>
  useQuery({
    queryKey: ["credits", id],
    queryFn: () => getCredits(id),
  });
