import type {ReactNode} from "react";
import type {TableQuerySelectorReturn} from "../../components";
import type * as api from "./teams.api";

import {TEAMS_TABLE_COLUMN_KEYS} from "../../views/SportsConfiguration/elements/Teams/Teams.constants";

export const formatTeamsForTable = (response: Awaited<ReturnType<typeof api.fetchTeams>>): TableQuerySelectorReturn => {
  return {
    rows: response.results.map((player): Record<Exclude<TEAMS_TABLE_COLUMN_KEYS, TEAMS_TABLE_COLUMN_KEYS.ACTIONS>, ReactNode> => ({
      [TEAMS_TABLE_COLUMN_KEYS.ID]: player.id,
      [TEAMS_TABLE_COLUMN_KEYS.NAME]: player.name,
      [TEAMS_TABLE_COLUMN_KEYS.IMAGE_URL]: player.imageUrl,
      [TEAMS_TABLE_COLUMN_KEYS.CREATED_AT]: player.createdAt,
      [TEAMS_TABLE_COLUMN_KEYS.UPDATED_AT]: player.updatedAt,
      [TEAMS_TABLE_COLUMN_KEYS.DELETED_AT]: player.deletedAt,
    })),
    totalCount: response.totalCount
  }
}