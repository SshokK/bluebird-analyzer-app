import type {SORT_ORDERS} from "../../constants/global.constants";

export type RegionSchema = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export type FetchRegionsPayload = [params?: {
  limit?: number;
  offset?: number;
  sortField?: keyof RegionSchema;
  sortOrder?: SORT_ORDERS;
  name?: string[];
}]
export type FetchRegionsReturn = {
  results: RegionSchema[];
  totalCount: number;
}
export type FetchRegions = (...args: FetchRegionsPayload) => Promise<FetchRegionsReturn>;