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
export type FetchBookmakers = (...args: FetchBookmakersPayload) => Promise<FetchBookmakersResponse>;


export type CreateBookmakerPayload = [body?: {
  name?: BookmakerSchema['name'];
  imageUrl?: BookmakerSchema['imageUrl']
}]
export type CreateBookmakerResponse = BookmakerSchema;
export type CreateBookmaker = (...args: CreateBookmakerPayload) => Promise<CreateBookmakerResponse>


export type UpdateBookmakerPayload = [bookmakerId: BookmakerSchema['id'], body?: {
  name: BookmakerSchema['name'];
  imageUrl?: BookmakerSchema['imageUrl']
}]
export type UpdateBookmakerResponse = BookmakerSchema;
export type UpdateBookmaker = (...args: UpdateBookmakerPayload) => Promise<UpdateBookmakerResponse>



export type DeleteBookmakerPayload = [bookmakerId: BookmakerSchema['id']]
export type DeleteBookmakerResponse = void;
export type DeleteBookmaker = (...args: DeleteBookmakerPayload) => Promise<DeleteBookmakerResponse>