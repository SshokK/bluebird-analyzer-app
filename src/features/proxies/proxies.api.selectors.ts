import type {ReactNode} from "react";
import type {TableQuerySelectorReturn} from "../../components";

import {fetchProxies} from "./proxies.api";
import { REGION_PROXIES_TABLE_COLUMN_KEYS } from "../../views/Proxies/elements/RegionalProxies/elements/RegionProxies/RegionProxies.constants";

export const formatProxiesForRegionProxiesTable = (response: Awaited<ReturnType<typeof fetchProxies>>): TableQuerySelectorReturn => {
  return {
    rows: response.results.map((proxy): Record<Exclude<REGION_PROXIES_TABLE_COLUMN_KEYS, REGION_PROXIES_TABLE_COLUMN_KEYS.ACTIONS>, ReactNode> => ({
      [REGION_PROXIES_TABLE_COLUMN_KEYS.ID]: proxy.id,
      [REGION_PROXIES_TABLE_COLUMN_KEYS.STATUS]: proxy.status,
      [REGION_PROXIES_TABLE_COLUMN_KEYS.IP]: proxy.ip,
      [REGION_PROXIES_TABLE_COLUMN_KEYS.PORT]: proxy.port,
      [REGION_PROXIES_TABLE_COLUMN_KEYS.TYPE]: proxy.type,
      [REGION_PROXIES_TABLE_COLUMN_KEYS.LAST_PING_RESPONSE_TIME]: proxy.lastPingResponseTime,
      [REGION_PROXIES_TABLE_COLUMN_KEYS.REGION_ID]: proxy.RegionId
    })),
    totalCount: response.totalCount
  }
}