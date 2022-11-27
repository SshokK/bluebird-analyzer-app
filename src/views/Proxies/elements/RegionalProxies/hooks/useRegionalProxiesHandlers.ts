import type {RegionalProxiesHandlers} from "./useRegionalProxiesHandlers.types";

import {useNavigate, useLocation} from "react-router";

import {QUERY_PARAMS} from "../RegionalProxies.constants";

import * as utils from "utils";

export const useRegionalProxiesHandlers = (): RegionalProxiesHandlers => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectedRegionChange: RegionalProxiesHandlers['handleSelectedRegionChange'] = (options) => {
    const selectedRegionId = options.pop?.()?.key;

    if (selectedRegionId) {
      navigate(utils.formatRedirectUrl({
        path: '',
        params: {
          [QUERY_PARAMS.REGION_ID]: selectedRegionId
        },
        shouldKeepExistingParams: true,
        location
      }), {
        relative: 'route',
        replace: true
      })
    }
  }

  return  {
    handleSelectedRegionChange
  }
}