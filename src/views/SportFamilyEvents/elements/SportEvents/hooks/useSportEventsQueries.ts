import type {SportEventsProps} from "../SportEvents.types";

import {useQuery} from "@tanstack/react-query";
import {QUERY_KEYS} from "constants/queries.constants";

import * as sportsApi from "features/sports/sports.api";
import * as eventsApi from "features/events/events.api";
import * as eventsApiConstants from "features/events/events.api.constants";

import {DEFAULT_PARAMS} from "../SportEvents.constants";

export const useSportEventsQueries = ({ props }: {
  props: Pick<SportEventsProps, 'sportId' | 'sportFamilyId'>
}) => {
  const fetchSport = useQuery({
    queryKey: [QUERY_KEYS.SPORTS, props.sportFamilyId, props.sportId],
    queryFn: () => sportsApi.fetchSport(props.sportFamilyId, props.sportId),
  });

  const fetchSportEvents = useQuery({
    queryKey: [QUERY_KEYS.EVENTS, { sportId: props.sportId }],
    queryFn: () => eventsApi.fetchEvents({
      ...DEFAULT_PARAMS,
      sortField: eventsApiConstants.SORT_FIELDS.DATE,
      sportId: props.sportId ? [props.sportId] : []
    })
  });

  return {
    fetchSport,
    fetchSportEvents
  }
}