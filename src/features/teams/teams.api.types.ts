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