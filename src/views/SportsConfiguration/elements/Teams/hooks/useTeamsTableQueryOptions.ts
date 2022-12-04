import type {TeamsProps} from "../Teams.types";
import type {TableProps} from "components";

import {QUERY_KEYS} from "constants/queries.constants";

import * as teamsApi from "features/teams/teams.api";
import * as teamsApiSelectors from "features/teams/teams.api.selectors";

export const useTeamsTableQueryOptions = ({
  props
}: {
  props: Pick<TeamsProps, 'sportId'>
}): Required<TableProps>['queryOptions'] => {
  return {
    queryKey: [QUERY_KEYS.TEAMS],
    queryFn: teamsApi.fetchTeams,
    select: teamsApiSelectors.formatTeamsForTable,
    enabled: Boolean(props.sportId)
  }
}