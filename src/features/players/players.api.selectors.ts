import type {ReactNode} from "react";
import type {TableQuerySelectorReturn} from "../../components";
import type * as api from "./players.api";

import {PLAYERS_TABLE_COLUMN_KEYS} from "../../views/SportsConfiguration/elements/Players/Players.constants";

export const formatPlayersForTable = (response: Awaited<ReturnType<typeof api.fetchPlayers>>): TableQuerySelectorReturn => {
  return {
    rows: response.results.map((player): Record<PLAYERS_TABLE_COLUMN_KEYS, ReactNode> => ({
      [PLAYERS_TABLE_COLUMN_KEYS.ID]: player.id,
      [PLAYERS_TABLE_COLUMN_KEYS.NAME]: player.name,
      [PLAYERS_TABLE_COLUMN_KEYS.IMAGE_URL]: player.imageUrl,
      [PLAYERS_TABLE_COLUMN_KEYS.CREATED_AT]: player.createdAt,
      [PLAYERS_TABLE_COLUMN_KEYS.UPDATED_AT]: player.updatedAt,
      [PLAYERS_TABLE_COLUMN_KEYS.DELETED_AT]: player.deletedAt,
    })),
    totalCount: response.totalCount
  }
}