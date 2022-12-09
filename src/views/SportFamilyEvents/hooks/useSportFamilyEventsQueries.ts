import type {SportEventsData} from "./useSportFamilyEventsData.types";
import type {SportSchema} from "features/sports/sports.api.types";

import {useQuery} from "@tanstack/react-query";

import {QUERY_KEYS} from "constants/queries.constants";

import * as utils from "utils";
import * as sportsApi from "features/sports/sports.api";

export const useSportFamilyEventsQueries = ({
  formattedData
}: {
  formattedData: SportEventsData['formattedData']
}) => {
  const fetchSports = useQuery({
    queryKey: [QUERY_KEYS.SPORTS, {
      sportFamilyId: formattedData.sportFamilyId
    }],
    queryFn: () => sportsApi.fetchSports({
      sportFamilyId: formattedData.sportFamilyId as SportSchema['SportFamilyId']
    }),
    enabled: utils.isNumber(formattedData.sportFamilyId)
  });

  return {
    fetchSports
  }
}