import type {RegionalProxiesHandlers} from "./useRegionalProxiesHandlers.types";
import type {RegionalProxiesData} from "./useRegionalProxiesData.types";
import type {RegionSchema} from "../../../../../features/regions/regions.api.types";


import {QUERY_PARAMS} from "../RegionalProxies.constants";
import {QUERY_KEYS} from "constants/queries.constants";

import * as utils from "utils";

import {useNavigate, useLocation} from "react-router";
import {useQueryClient} from "@tanstack/react-query";

export const useRegionalProxiesHandlers = ({
  formattedData
                                           }: {
  formattedData: RegionalProxiesData['formattedData']
}): RegionalProxiesHandlers => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();

  const handleSelectedRegionChange: RegionalProxiesHandlers['handleSelectedRegionChange'] = (regionId) => {
    navigate(utils.formatRedirectUrl({
      path: '',
      params: {
        [QUERY_PARAMS.REGION_ID]: regionId
      },
      shouldKeepExistingParams: true,
      searchString: location.search
    }), {
      relative: 'route',
      replace: true
    })
  }

  const handleSelectedRegionOptionChange: RegionalProxiesHandlers['handleSelectedRegionOptionChange'] = (options) => {
    const selectedRegionId = options.pop?.()?.key as RegionSchema['id'];

    handleSelectedRegionChange(selectedRegionId ?? null);
  }

  const handleRegionsFetchSuccess: RegionalProxiesHandlers['handleRegionsFetchSuccess'] = (regionOptions) => {
    if (!formattedData.regionId && regionOptions[0]?.key) {
      handleSelectedRegionChange(regionOptions[0].key as RegionSchema['id'] ?? null)
    }
  }

  const handleRegionCreationSuccess: RegionalProxiesHandlers['handleRegionCreationSuccess'] = async (region) => {
    await queryClient.invalidateQueries([QUERY_KEYS.REGIONS]);
    handleSelectedRegionChange(region.id);
  }

  const handleRegionUpdateSuccess: RegionalProxiesHandlers['handleRegionUpdateSuccess'] = async () => {
    await queryClient.invalidateQueries([QUERY_KEYS.REGIONS]);
  }

  const handleRegionDeletionSuccess: RegionalProxiesHandlers['handleRegionDeletionSuccess'] = async () => {
    await queryClient.invalidateQueries([QUERY_KEYS.REGIONS]);
    handleSelectedRegionChange(null);
  }

  return  {
    handleSelectedRegionChange,
    handleSelectedRegionOptionChange,
    handleRegionsFetchSuccess,
    handleRegionCreationSuccess,
    handleRegionUpdateSuccess,
    handleRegionDeletionSuccess
  }
}