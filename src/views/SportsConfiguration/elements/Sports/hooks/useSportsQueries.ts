import type {RequestError} from "fetch";
import type {SportsProps} from "../Sports.types";

import {QUERY_KEYS} from "constants/queries.constants";

import * as sportsApi from "features/sports/sports.api";
import * as sportFamiliesApi from "features/sport-families/sportFamilies.api";

import {useQuery} from "@tanstack/react-query";

export const useSportsQueries = ({ props }: {
  props: Pick<SportsProps, 'sportFamilyId'>
}) => {
  const fetchSportFamily = useQuery<
    Awaited<ReturnType<typeof sportFamiliesApi.fetchSportFamilyById>>,
    RequestError
  >({
    queryKey: [QUERY_KEYS.SPORT_FAMILIES, props.sportFamilyId],
    queryFn: () => sportFamiliesApi.fetchSportFamilyById(props.sportFamilyId)
  })

  const fetchSports = useQuery<
    Awaited<ReturnType<typeof sportsApi.fetchSports>>,
    RequestError
  >({
    queryKey: [QUERY_KEYS.SPORTS, {
      sportFamilyId: props.sportFamilyId
    }],
    queryFn: () => sportsApi.fetchSports({
      sportFamilyId: props.sportFamilyId
    }),
  });

  return {
    fetchSportFamily,
    fetchSports
  }
}