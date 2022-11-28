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
export type FetchRegionsResponse = {
  results: RegionSchema[];
  totalCount: number;
}
export type FetchRegions = (...args: FetchRegionsPayload) => Promise<FetchRegionsResponse>;


export type CreateRegionPayload = [
  body: {
    name: RegionSchema['name'];
  }
]
export type CreateRegionResponse = RegionSchema;
export type CreateRegion = (...args: CreateRegionPayload) => Promise<CreateRegionResponse>;


export type UpdateRegionPayload = [
  regionId: RegionSchema['id'],
  body: {
    name?: RegionSchema['name'] | null;
  }
]
export type UpdateRegionResponse = RegionSchema;
export type UpdateRegion = (...args: UpdateRegionPayload) => Promise<UpdateRegionResponse>;



export type DeleteRegionPayload = [
  regionId: RegionSchema['id']
]
export type DeleteRegionResponse = number;
export type DeleteRegion = (...args: DeleteRegionPayload) => Promise<DeleteRegionResponse>;