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
  imageUrl?: PlayerSchema['imageUrl'];
}]
export type CreatePlayerResponse = PlayerSchema;
export type CreatePlayer = (...args: CreatePlayerPayload) => Promise<CreatePlayerResponse>


export type DeletePlayerPayload = [playerId: PlayerSchema['id']]
export type DeletePlayerResponse = void;
export type DeletePlayer = (...args: DeletePlayerPayload) => Promise<DeletePlayer>


export type UpdatePlayerPayload = [playerId: PlayerSchema['id'], body: {
  name?: PlayerSchema['name'];
  imageUrl?: PlayerSchema['imageUrl'];
}]
export type UpdatePlayerResponse = PlayerSchema;
export type UpdatePlayer = (...args: UpdatePlayerPayload) => Promise<UpdatePlayerResponse>