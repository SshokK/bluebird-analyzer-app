import {useQuery} from "@tanstack/react-query";
import {QUERY_KEYS} from "constants/queries.constants";

import * as sportFamiliesApi from "features/sport-families/sportFamilies.api";
import * as sportFamiliesApiSelectors from "features/sport-families/sportFamilies.api.selectors";

export const useLeftNavQueries = () => {
  const fetchSportFamilies = useQuery({
    queryKey: [QUERY_KEYS.SPORT_FAMILIES],
    queryFn: () => sportFamiliesApi.fetchSportFamilies(),
    select: sportFamiliesApiSelectors.getSportFamiliesForLeftNav
  });

  return {
    fetchSportFamilies
  }
}