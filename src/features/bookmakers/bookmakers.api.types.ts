import type {SORT_ORDERS} from "constants/global.constants";

export type BookmakerSchema = {
  id: number;
  name: string;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export type FetchBookmakersPayload = [params?: {
  limit?: number;
  offset?: number;
  name?: BookmakerSchema['name'];
  sortField?: string;
  sortOrder?: SORT_ORDERS;
}]
export type FetchBookmakersResponse = BookmakerSchema[];
export type FetchBookmakers = (...args: FetchBookmakersPayload) => Promise<FetchBookmakersResponse>