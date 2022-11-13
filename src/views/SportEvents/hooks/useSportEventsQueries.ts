import type {SportEventsData} from "./useSportEventsData.types";

import {useQuery} from "@tanstack/react-query";

import {QUERY_KEYS} from "constants/queries.constants";
import {DEFAULT_PARAMS} from "../SportEvents.constants";

import * as utils from "utils";
import * as sportsApi from "features/sports/sports.api";
import * as eventsApi from "features/events/events.api";
import * as eventsApiConstants from "features/events/events.api.constants";

export const useSportEventsQueries = ({
  formattedData
}: {
  formattedData: SportEventsData['formattedData']
}) => {
  const fetchSport = useQuery({
    queryKey: [QUERY_KEYS.SPORTS, formattedData.sportId],
    queryFn: () => sportsApi.fetchSport(formattedData.sportId as number),
    enabled: utils.isNumber(formattedData.sportId)
  });

  const fetchSportEvents = useQuery({
    queryKey: [QUERY_KEYS.EVENTS, { sportId: formattedData.sportId }],
    queryFn: () => eventsApi.fetchEvents({
      ...DEFAULT_PARAMS,
      sortField: eventsApiConstants.SORT_FIELDS.DATE,
      sportId: formattedData.sportId ? [formattedData.sportId] : []
    }),
    enabled: utils.isNumber(formattedData.sportId)
  });

  return {
    fetchSport,
    fetchSportEvents
  }
}