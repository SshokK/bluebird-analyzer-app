import type {SportsConfigurationQueryParams} from "../../../SportsConfiguration.types";
import type {SportsData} from "./useSportsData.types";

import {QUERY_PARAMS} from "../../../SportsConfiguration.constants";
import {PARAM_TYPES} from "constants/global.constants";

import {useQueryParams} from "utils/hooks";
import {useMemo} from "react";

export const useSportsData = (): SportsData => {
  const queryParams = useQueryParams<SportsConfigurationQueryParams>({
    isStrictValidation: true,
    paramsTypes: {
      [QUERY_PARAMS.SPORT_ID]: PARAM_TYPES.INTEGER,
      [QUERY_PARAMS.SPORT_FAMILY_ID]: PARAM_TYPES.INTEGER
    }
  });

  const formattedData: SportsData['formattedData'] = useMemo(() => {
    return {
      sportFamilyId: queryParams[QUERY_PARAMS.SPORT_FAMILY_ID],
      sportId: queryParams[QUERY_PARAMS.SPORT_ID]
    }
  }, [queryParams]);

  return {
    formattedData
  }
}