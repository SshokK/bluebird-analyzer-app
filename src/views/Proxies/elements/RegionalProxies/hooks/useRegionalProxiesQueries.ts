import type {RegionalProxiesHandlers} from "./useRegionalProxiesHandlers.types";

import {useQuery} from "@tanstack/react-query";

import {QUERY_KEYS} from "constants/queries.constants";
import { SORT_FIELDS} from "features/regions/regions.api.constants";
import {SORT_ORDERS} from "constants/global.constants";

import * as regionsApi from "features/regions/regions.api";
import * as regionsApiSelectors from "features/regions/regions.api.selectors";

export const useRegionalProxiesQueries = ({
  onFetchRegionsSuccess
}: {
  onFetchRegionsSuccess: RegionalProxiesHandlers['handleRegionsFetchSuccess']
}) => {
  const fetchRegions = useQuery({
    queryKey: [QUERY_KEYS.REGIONS],
    queryFn: () => regionsApi.fetchRegions({
      sortField: SORT_FIELDS.NAME,
      sortOrder: SORT_ORDERS.ASC
    }),
    select: regionsApiSelectors.formatRegionsForList,
    onSuccess: onFetchRegionsSuccess
  });
  
  return {
    fetchRegions
  }
}