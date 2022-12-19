import type {BookmakersCrawlersData} from "./useBookmakersCrawlersData.types";

import {QUERY_KEYS} from "constants/queries.constants";

import * as bookmakersApi from "features/bookmakers/bookmakers.api";
import * as bookmakersApiSelectors from "features/bookmakers/bookmakers.api.selectors";

import {useQuery} from "@tanstack/react-query";

export const useBookmakersCrawlersQueries = ({
  localState,
  formattedData
}: {
  localState: BookmakersCrawlersData['localState'];
  formattedData: BookmakersCrawlersData['formattedData']
}) => {
  const fetchBookmakers = useQuery({
    queryKey: [QUERY_KEYS.BOOKMAKERS, formattedData.requestParams],
    queryFn: () => bookmakersApi.fetchBookmakers(formattedData.requestParams),
    keepPreviousData: true,
    select: response => ({
      options: bookmakersApiSelectors.getBookmakersForList(response),
      bookmakerName: bookmakersApiSelectors.getBookmakerNameById(localState.bookmakerId)(response)
    })
  });
  
  return {
    fetchBookmakers
  }
}