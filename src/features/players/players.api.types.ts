import type {SportFamilySchema} from "../sport-families/sportFamilies.api.types";
import type {SORT_ORDERS} from "../../constants/global.constants";
import type {TeamSchema} from "../teams/teams.api.types";

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



export type CreatePlayerPayload = [{
  name: PlayerSchema['name'];
  sportFamilyId: PlayerSchema['SportFamilyId'];
  imageUrl?: PlayerSchema['imageUrl'] | null;
}]
export type CreatePlayerResponse = PlayerSchema;
export type CreatePlayer = (...args: CreatePlayerPayload) => Promise<CreatePlayerResponse>


export type DeletePlayersPayload = [{
  playerIds: PlayerSchema['id'][]
}]
export type DeletePlayersResponse = void;
export type DeletePlayers = (...args: DeletePlayersPayload) => Promise<DeletePlayersResponse>