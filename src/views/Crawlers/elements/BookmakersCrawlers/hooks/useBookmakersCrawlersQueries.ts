import type {BookmakersCrawlersData} from "./useBookmakersCrawlersData.types";

import {QUERY_KEYS} from "constants/queries.constants";

import * as bookmakersApi from "features/bookmakers/bookmakers.api";
import * as bookmakersApiSelectors from "features/bookmakers/bookmakers.api.selectors";

import {useQuery} from "@tanstack/react-query";

export const useBookmakersCrawlersQueries = ({
  formattedData
}: {
  formattedData: BookmakersCrawlersData['formattedData']
}) => {
  const fetchBookmakers = useQuery({
    queryKey: [QUERY_KEYS.BOOKMAKERS, formattedData.requestParams],
    queryFn: () => bookmakersApi.fetchBookmakers(formattedData.requestParams),
    keepPreviousData: true,
    select: bookmakersApiSelectors.formatBookmakersForList
  });
  
  return {
    fetchBookmakers
  }
}