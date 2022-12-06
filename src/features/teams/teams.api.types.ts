import type {SportSchema} from "../sports/sports.api.types";
import type {SORT_ORDERS} from "../../constants/global.constants";

export type TeamSchema = {
  id: number;
  SportId: SportSchema['id'];
  name: string;
  imageUrl: string | null;

  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}


export type FetchTeamsPayload = [
  params: {
    limit: number;
    offset: number;
    sortField?: string;
    sortOrder?: SORT_ORDERS;
    id?: TeamSchema['id'][];
    sportId?: TeamSchema['SportId'][];
    name?: TeamSchema['name'][];
  }
]
export type FetchTeamsResponse = {
  results: TeamSchema[];
  totalCount: number;
}
export type FetchTeams = (...args: FetchTeamsPayload) => Promise<FetchTeamsResponse>;


export type CreateTeamPayload = [{
  name: TeamSchema['name'];
  sportId: TeamSchema['SportId'];
  imageUrl?: TeamSchema['imageUrl'];
}]
export type CreateTeamResponse = TeamSchema;
export type CreateTeam = (...args: CreateTeamPayload) => Promise<CreateTeamResponse>



export type DeleteTeamPayload = [teamId: TeamSchema['id']]
export type DeleteTeamResponse = void;
export type DeleteTeam = (...args: DeleteTeamPayload) => Promise<DeleteTeamResponse>


export type UpdateTeamPayload = [teamId: TeamSchema['id'], body: {
  name?: TeamSchema['name'];
  imageUrl?: TeamSchema['imageUrl'];
}]
export type UpdateTeamResponse = TeamSchema;
export type UpdateTeam = (...args: UpdateTeamPayload) => Promise<UpdateTeamResponse>