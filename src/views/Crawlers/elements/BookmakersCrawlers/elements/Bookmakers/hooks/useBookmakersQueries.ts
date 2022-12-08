import type {BookmakersData} from "./useBookmakersData.types";

import {QUERY_KEYS} from "constants/queries.constants";

import * as bookmakersApi from "features/bookmakers/bookmakers.api";
import * as bookmakersApiSelectors from "features/bookmakers/bookmakers.api.selectors";

import {useQuery} from "@tanstack/react-query";

export const useBookmakersQueries = ({
  formattedData
}: {
  formattedData: BookmakersData['formattedData']
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