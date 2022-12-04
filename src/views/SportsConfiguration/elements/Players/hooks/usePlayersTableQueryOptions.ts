import type {PlayersProps} from "../Players.types";
import type {TableProps} from "components";

import {QUERY_KEYS} from "constants/queries.constants";

import * as playersApi from "features/players/players.api";
import * as playersApiSelectors from "features/players/players.api.selectors";


export const usePlayersTableQueryOptions = ({
  props
}: {
  props: Pick<PlayersProps, 'sportFamilyId'>
}): Required<TableProps>['queryOptions'] => {
  return {
    queryKey: [QUERY_KEYS.PLAYERS],
    queryFn: playersApi.fetchPlayers,
    select: playersApiSelectors.formatPlayersForTable,
    enabled: Boolean(props.sportFamilyId)
  }
}