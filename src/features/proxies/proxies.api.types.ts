import type {SORT_ORDERS} from "../../constants/global.constants";
import type {RegionSchema} from "../regions/regions.api.types";
import type {PROXY_STATUSES, PROXY_TYPES} from "./proxies.constants";

export type ProxySchema = {
  id: number;
  ip: string;
  port: number;
  type: PROXY_TYPES;
  status: PROXY_STATUSES;
  lastPingResponseTime: number | null;

  RegionId: RegionSchema['id'];

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export type FetchProxiesPayload = [params: {
  limit?: number;
  offset?: number;
  sortField?: string;
  sortOrder?: SORT_ORDERS;
  regionId?: RegionSchema['id'][];
  status?: PROXY_STATUSES[];
}]
export type FetchProxiesReturn = {
  results: ProxySchema[];
  totalCount: number;
}
export type FetchProxies = (...args: FetchProxiesPayload) => Promise<FetchProxiesReturn>;