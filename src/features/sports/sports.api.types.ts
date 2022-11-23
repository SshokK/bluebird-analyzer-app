import type {SportFamilySchema} from "../sportFamilies/sportFamilies.api.types";

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