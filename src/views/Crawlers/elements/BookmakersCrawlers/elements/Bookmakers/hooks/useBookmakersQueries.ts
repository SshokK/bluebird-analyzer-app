import {QUERY_KEYS} from "constants/queries.constants";

import  * as bookmakersApi from "features/bookmakers/bookmakers.api";
import  * as bookmakersApiSelectors from "features/bookmakers/bookmakers.api.selectors";

import {useQuery} from "@tanstack/react-query";

export const useBookmakersQueries = () => {
  const fetchBookmakers = useQuery({
    queryKey: [QUERY_KEYS.BOOKMAKERS],
    queryFn: () => bookmakersApi.fetchBookmakers(),
    keepPreviousData: true,
    select: bookmakersApiSelectors.formatBookmakersForList
  });
  
  return {
    fetchBookmakers
  }
}