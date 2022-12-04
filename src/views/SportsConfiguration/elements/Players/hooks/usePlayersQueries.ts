import type {PlayersProps} from "../Players.types";
import type {RequestError} from "fetch";
import type {SportFamilySchema} from "features/sport-families/sportFamilies.api.types";

import {QUERY_KEYS} from "constants/queries.constants";

import * as sportFamiliesApi from "features/sport-families/sportFamilies.api";

import {useQuery} from "@tanstack/react-query";

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
  })
  
  return {
    fetchSportFamily
  }
}