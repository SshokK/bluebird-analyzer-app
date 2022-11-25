import type {SportFamiliesData} from "./useSportFamiliesData.types";
import type {SportsConfigurationQueryParams} from "../../../SportsConfiguration.types";


import {useMemo} from "react";
import {useQueryParams} from "utils/hooks";

import {QUERY_PARAMS} from "../../../SportsConfiguration.constants";
import {PARAM_TYPES} from "constants/global.constants";

export const useSportFamiliesData = (): SportFamiliesData => {
  const queryParams = useQueryParams<SportsConfigurationQueryParams>({
    isStrictValidation: true,
    paramsTypes: {
      [QUERY_PARAMS.SPORT_FAMILY_ID]: PARAM_TYPES.INTEGER
    }
  });
  
  const formattedData: SportFamiliesData['formattedData'] = useMemo(() => {
    return {
      sportFamilyId: queryParams[QUERY_PARAMS.SPORT_FAMILY_ID]
    }
  }, [queryParams]);

  return {
    formattedData
  }
}