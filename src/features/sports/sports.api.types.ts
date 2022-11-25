import type {SportFamilySchema} from "../sport-families/sportFamilies.api.types";

export type SportSchema = {
  id: number;
  name: string;
  SportFamilyId: SportFamilySchema['id'];
  createdAt: string;
  updatedAt: string;
}

export type FetchSportsPayload = [sportFamilyId: SportFamilySchema['id'], params?: {
  limit?: number;
  offset?: number;
  sortField?: keyof SportSchema;
  sortOrder?: string;
}]
export type FetchSportsResponse = SportSchema[];
export type FetchSports = (...args: FetchSportsPayload) => Promise<FetchSportsResponse>


export type FetchSportPayload = [sportFamilyId: SportFamilySchema['id'], sportId: SportSchema['id']];
export type FetchSportResponse = SportSchema;
export type FetchSport = (...args: FetchSportPayload) => Promise<FetchSportResponse>


export type CreateSportPayload = [sportFamilyId: SportFamilySchema['id'], body: {
  name: SportSchema['name']
}];
export type CreateSportResponse = SportSchema;
export type CreateSport = (...args: CreateSportPayload) => Promise<CreateSportResponse>


export type UpdateSportPayload = [sportFamilyId: SportFamilySchema['id'], sportId: SportSchema['id'], body: {
  name?: SportFamilySchema['name']
}];
export type UpdateSportResponse = SportSchema;
export type UpdateSport = (...args: UpdateSportPayload) => Promise<UpdateSportResponse>


export type DeleteSportPayload = [sportFamilyId: SportFamilySchema['id'], sportId: SportSchema['id']];
export type DeleteSportResponse = void;
export type DeleteSport = (...args: DeleteSportPayload) => Promise<DeleteSportResponse>
