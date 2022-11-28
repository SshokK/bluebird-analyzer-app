import type {RegionProxiesProps} from "../RegionProxies.types";
import type {TableQueryOptions} from "components";

import {QUERY_KEYS} from "constants/queries.constants";

import * as proxiesApi from "features/proxies/proxies.api";
import * as proxiesApiSelectors from "features/proxies/proxies.api.selectors";

export const useRegionProxiesQueryOptions = ({
  props
}: {
  props: Pick<RegionProxiesProps, 'regionId'>
}): TableQueryOptions => {
  return {
    queryKey: [QUERY_KEYS.PROXIES],
    queryFn: proxiesApi.fetchProxies,
    select: proxiesApiSelectors.formatProxiesForRegionProxiesTable,
    enabled: Boolean(props.regionId)
  }
}