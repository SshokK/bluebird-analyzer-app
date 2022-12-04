import type {SportFamilySchema} from "../sport-families/sportFamilies.api.types";
import {SORT_ORDERS} from "../../constants/global.constants";
import {TeamSchema} from "../teams/teams.api.types";

export type PlayerSchema = {
  id: number;
  name: string;
  imageUrl: string | null;

  SportFamilyId: SportFamilySchema['id'];

  updatedAt: string;
  createdAt: string;
  deletedAt: string | null;
}

export type FetchPlayersPayload = [{
  limit: number;
  offset: number;
  sortField?: string;
  sortOrder?: SORT_ORDERS;
  teamId?: TeamSchema['id'] | TeamSchema['id'][];
  sportFamilyId?: SportFamilySchema['id'] | SportFamilySchema['id'][]
}]
export type FetchPlayersResponse = {
  results: PlayerSchema[];
  totalCount: number;
}
export type FetchPlayers = (...args: FetchPlayersPayload) => Promise<FetchPlayersResponse>;