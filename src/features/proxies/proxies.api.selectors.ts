import type {ReactNode} from "react";
import type {TableProps} from "../../components";

import {fetchProxies} from "./proxies.api";
import { REGION_PROXIES_TABLE_COLUMN_KEYS } from "../../views/Proxies/elements/RegionalProxies/elements/RegionProxies/RegionProxies.constants";

export const formatProxiesForRegionProxiesTable = (response: Awaited<ReturnType<typeof fetchProxies>>): Required<TableProps>['rows'] => {
  return response.results.map((proxy): Record<REGION_PROXIES_TABLE_COLUMN_KEYS, ReactNode> => ({
    [REGION_PROXIES_TABLE_COLUMN_KEYS.ID]: proxy.id,
    [REGION_PROXIES_TABLE_COLUMN_KEYS.STATUS]: proxy.status,
    [REGION_PROXIES_TABLE_COLUMN_KEYS.IP]: proxy.ip,
    [REGION_PROXIES_TABLE_COLUMN_KEYS.PORT]: proxy.port,
    [REGION_PROXIES_TABLE_COLUMN_KEYS.TYPE]: proxy.type,
    [REGION_PROXIES_TABLE_COLUMN_KEYS.LAST_PING_RESPONSE_TIME]: proxy.lastPingResponseTime,
  }))
}