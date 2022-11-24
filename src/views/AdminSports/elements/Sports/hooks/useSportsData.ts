import type {SportsConfigurationQueryParams} from "../../../SportsConfiguration.types";
import type {SportData} from "./useSportsData.types";

import {QUERY_PARAMS} from "../../../SportsConfiguration.constants";
import {PARAM_TYPES} from "constants/global.constants";

import {useQueryParams} from "utils/hooks";
import {useMemo} from "react";

export const useSportsData = (): SportData => {
  const queryParams = useQueryParams<SportsConfigurationQueryParams>({
    isStrictValidation: true,
    paramsTypes: {
      [QUERY_PARAMS.SPORT_ID]: PARAM_TYPES.INTEGER
    }
  });

  const formattedData: SportData['formattedData'] = useMemo(() => {
    return {
      sportId: queryParams[QUERY_PARAMS.SPORT_ID]
    }
  }, [queryParams]);

  return {
    formattedData
  }
}