import {QUERY_KEYS} from "constants/queries.constants";

import * as sportFamiliesApi from "features/sport-families/sportFamilies.api";

import { useQuery } from "@tanstack/react-query";

export const useSportFamiliesQueries = () => {
  const fetchSportFamilies = useQuery({
    queryKey: [QUERY_KEYS.SPORT_FAMILIES],
    queryFn: () => sportFamiliesApi.fetchSportFamilies()
  });

  return {
    fetchSportFamilies
  }
}