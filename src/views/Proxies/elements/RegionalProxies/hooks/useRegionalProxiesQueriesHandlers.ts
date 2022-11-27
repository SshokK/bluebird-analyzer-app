import type {RegionalProxiesData} from "./useRegionalProxiesData.types";
import type {RegionalProxiesQueriesHandlers} from "./useRegionalProxiesQueriesHandlers.types";

import {QUERY_PARAMS} from "../RegionalProxies.constants";
import * as utils from "../../../../../utils";
import {useLocation, useNavigate} from "react-router";

export const useRegionalProxiesQueriesHandlers = ({
  formattedData
}: {
  formattedData: RegionalProxiesData['formattedData'];
}): RegionalProxiesQueriesHandlers => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegionsFetchSuccess: RegionalProxiesQueriesHandlers['handleRegionsFetchSuccess'] = (regionOptions) => {
    if (!formattedData.regionId && regionOptions[0]?.key) {
      navigate(utils.formatRedirectUrl({
        path: '',
        params: {
          [QUERY_PARAMS.REGION_ID]: regionOptions[0].key
        },
        shouldKeepExistingParams: true,
        location
      }), {
        relative: 'route',
        replace: true
      })
    }
  }

  return {
    handleRegionsFetchSuccess
  }
}