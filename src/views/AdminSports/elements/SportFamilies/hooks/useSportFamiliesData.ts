import type {SportFamiliesData} from "./useSportFamiliesData.types";
import type {SportsConfigurationQueryParams} from "../../../SportsConfiguration.types";


import {useMemo, useState} from "react";
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
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const localState: SportFamiliesData['localState'] = {
    isAddModalOpen
  }

  const localActions: SportFamiliesData['localActions'] = useMemo(() => ({
    setIsAddModalOpen
  }), []);
  
  const formattedData: SportFamiliesData['formattedData'] = useMemo(() => {
    return {
      sportFamilyId: queryParams[QUERY_PARAMS.SPORT_FAMILY_ID]
    }
  }, [queryParams]);

  return {
    localState,
    localActions,
    formattedData
  }
}