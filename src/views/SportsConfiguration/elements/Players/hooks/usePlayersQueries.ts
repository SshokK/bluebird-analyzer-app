import type {PlayersProps} from "../Players.types";
import type {RequestError} from "fetch";
import type {SportFamilySchema} from "features/sport-families/sportFamilies.api.types";

import {QUERY_KEYS} from "constants/queries.constants";

import * as sportFamiliesApi from "features/sport-families/sportFamilies.api";
import * as playersApi from "features/players/players.api";

import {useQuery} from "@tanstack/react-query";
import {PlayerSchema} from "../../../../../features/players/players.api.types";

export const usePlayersQueries = ({
  props
}: {
  props: Pick<PlayersProps, 'sportFamilyId'>
}) => {
  const fetchSportFamily = useQuery<
    Awaited<ReturnType<typeof sportFamiliesApi.fetchSportFamilyById>>,
    RequestError
  >({
    queryKey: [QUERY_KEYS.SPORT_FAMILIES, props.sportFamilyId],
    queryFn: () => sportFamiliesApi.fetchSportFamilyById(
      props.sportFamilyId as SportFamilySchema['id']
    ),
    enabled: Boolean(props.sportFamilyId)
  });

  const fetchPlayers = useQuery({
    queryKey: [QUERY_KEYS.PLAYERS, {
      sportFamilyId: props.sportFamilyId
    }],
    queryFn: () => playersApi.fetchPlayers({
      limit: 10,
      offset: 0,
      sportFamilyId: props.sportFamilyId as PlayerSchema['SportFamilyId']
    }),
    enabled: Boolean(props.sportFamilyId)
  })
  
  return {
    fetchSportFamily,
    fetchPlayers
  }
}