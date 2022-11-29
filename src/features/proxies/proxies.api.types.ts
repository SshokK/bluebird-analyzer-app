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
export type FetchProxiesResponse = {
  results: ProxySchema[];
  totalCount: number;
}
export type FetchProxies = (...args: FetchProxiesPayload) => Promise<FetchProxiesResponse>;


export type DeleteProxiesPayload = [proxyIds: ProxySchema['id'][]]
export type DeleteProxiesResponse = number;
export type DeleteProxies = (...args: DeleteProxiesPayload) => Promise<DeleteProxiesResponse>;


export type UpdateProxyPayload = [proxyId: ProxySchema['id'], params: {
  ip: ProxySchema['ip'];
  port: ProxySchema['port'];
  type: ProxySchema['type'];
}]
export type UpdateProxyResponse = ProxySchema;
export type UpdateProxy = (...args: UpdateProxyPayload) => Promise<UpdateProxyResponse>