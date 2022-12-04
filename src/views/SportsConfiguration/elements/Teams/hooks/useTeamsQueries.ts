import type {RequestError} from "fetch";
import type {TeamsProps} from "../Teams.types";
import type {SportSchema} from "features/sports/sports.api.types";

import {QUERY_KEYS} from "constants/queries.constants";

import * as sportsApi from "features/sports/sports.api";

import {useQuery} from "@tanstack/react-query";

export const useTeamsQueries = ({ props }: {
  props: Pick<TeamsProps, 'sportId' | 'sportFamilyId'>
}) => {
  const fetchSport = useQuery<
    Awaited<ReturnType<typeof sportsApi.fetchSport>>,
    RequestError
  >({
    queryKey: [QUERY_KEYS.SPORTS, props.sportFamilyId, props.sportId],
    queryFn: () => sportsApi.fetchSport(props.sportFamilyId, props.sportId as SportSchema['id']),
    enabled: Boolean(props.sportId && props.sportFamilyId)
  });

  return {
    fetchSport
  }
}