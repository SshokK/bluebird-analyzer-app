import type {SportsConfigurationData} from "./useSportsConfigurationData.types";
import type {SportsConfigurationQueryParams} from "../SportsConfiguration.types";

import {PARAM_TYPES} from "constants/global.constants";
import {QUERY_PARAMS} from "../SportsConfiguration.constants";

import {useMemo} from "react";
import {useQueryParams} from "utils/hooks";

export const useSportsConfigurationData = (): SportsConfigurationData => {
  const queryParams = useQueryParams<SportsConfigurationQueryParams>({
    isStrictValidation: true,
    paramsTypes: {
      [QUERY_PARAMS.SPORT_FAMILY_ID]: PARAM_TYPES.INTEGER,
      [QUERY_PARAMS.SPORT_ID]: PARAM_TYPES.INTEGER
    }
  });

  const formattedData: SportsConfigurationData['formattedData'] = useMemo(() => {
    return {
      sportFamilyId: queryParams[QUERY_PARAMS.SPORT_FAMILY_ID],
      sportId: queryParams[QUERY_PARAMS.SPORT_ID]
    }
  }, [queryParams]);

  return {
    formattedData
  }
}