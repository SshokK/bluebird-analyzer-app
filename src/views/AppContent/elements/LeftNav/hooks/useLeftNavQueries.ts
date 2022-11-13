import {useQuery} from "@tanstack/react-query";
import {QUERY_KEYS} from "constants/queries.constants";

import * as sportsApi from "features/sports/sports.api";
import * as sportsApiSelectors from "features/sports/sports.api.selectors";

export const useLeftNavQueries = () => {
  const fetchSports = useQuery({
    queryKey: [QUERY_KEYS.SPORTS],
    queryFn: () => sportsApi.fetchSports(),
    select: sportsApiSelectors.getSportsForLeftNav
  });

  return {
    fetchSports
  }
}