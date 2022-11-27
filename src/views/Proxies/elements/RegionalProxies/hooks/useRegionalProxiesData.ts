import type {RegionalProxiesData} from "./useRegionalProxiesData.types";
import type {RegionalProxiesQueryParams} from "../RegionalProxies.types";

import {PARAM_TYPES} from "constants/global.constants";
import {QUERY_PARAMS} from "../RegionalProxies.constants";

import {useMemo} from "react";
import {useQueryParams} from "utils/hooks";

export const useRegionalProxiesData = (): RegionalProxiesData => {
  const queryParams = useQueryParams<RegionalProxiesQueryParams>({
    isStrictValidation: true,
    paramsTypes: {
      [QUERY_PARAMS.REGION_ID]: PARAM_TYPES.INTEGER
    }
  });

  const formattedData: RegionalProxiesData['formattedData'] = useMemo(() => {
    return {
      regionId: queryParams[QUERY_PARAMS.REGION_ID]
    }
  }, [queryParams]);

  return {
    formattedData
  }
}