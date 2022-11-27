import type {RegionProxiesProps} from "../RegionProxies.types";

import {useQuery} from "@tanstack/react-query";
import {QUERY_KEYS} from "constants/queries.constants";

import * as proxiesApi from "features/proxies/proxies.api";
import * as proxiesApiSelectors from "features/proxies/proxies.api.selectors";
import {SORT_FIELDS} from "../../../../../../../features/proxies/proxies.api.constants";
import {SORT_ORDERS} from "../../../../../../../constants/global.constants";
import {RegionSchema} from "../../../../../../../features/regions/regions.api.types";

export const useRegionProxiesQueries = ({
  props
}: {
  props: Pick<RegionProxiesProps, 'regionId'>
}) => {
  const fetchProxies = useQuery({
    queryKey: [QUERY_KEYS.PROXIES, {
      regionId: props.regionId
    }],
    queryFn: () => proxiesApi.fetchProxies({
      limit: 10,
      offset: 0,
      sortField: SORT_FIELDS.STATUS,
      sortOrder: SORT_ORDERS.ASC,
      regionId: [props.regionId as RegionSchema['id']]
    }),
    enabled: Boolean(props.regionId),
    keepPreviousData: true,
    select: proxiesApiSelectors.formatProxiesForRegionProxiesTable
  });

  return {
    fetchProxies
  }
}