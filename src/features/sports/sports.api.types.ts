import type {SportFamilySchema} from "../sport-families/sportFamilies.api.types";

export type SportSchema = {
  id: number;
  name: string;
  SportFamilyId: SportFamilySchema['id'];
  createdAt: string;
  updatedAt: string;
}

export type FetchSportsPayload = [params?: {
  limit?: number;
  offset?: number;
  sortField?: string;
  sortOrder?: string;
  sportFamilyId?: SportSchema['SportFamilyId'];
  name?: SportSchema['name'][];
}]
export type FetchSportsResponse = {
  results: SportSchema[];
  totalCount: number;
};
export type FetchSports = (...args: FetchSportsPayload) => Promise<FetchSportsResponse>


export type FetchSportPayload = [sportId: SportSchema['id']];
export type FetchSportResponse = SportSchema;
export type FetchSport = (...args: FetchSportPayload) => Promise<FetchSportResponse>


export type CreateSportPayload = [body: {
  name: SportSchema['name'];
  sportFamilyId: SportSchema['SportFamilyId'];
}];
export type CreateSportResponse = SportSchema;
export type CreateSport = (...args: CreateSportPayload) => Promise<CreateSportResponse>


export type UpdateSportPayload = [sportId: SportSchema['id'], body: {
  name?: SportFamilySchema['name'];
  sportFamilyId?: SportSchema['SportFamilyId'];
}];
export type UpdateSportResponse = SportSchema;
export type UpdateSport = (...args: UpdateSportPayload) => Promise<UpdateSportResponse>


export type DeleteSportPayload = [sportId: SportSchema['id']];
export type DeleteSportResponse = void;
export type DeleteSport = (...args: DeleteSportPayload) => Promise<DeleteSportResponse>
