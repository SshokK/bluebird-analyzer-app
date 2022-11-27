import type { ActionsProps} from "components";

import {IconAdd, IconDelete, IconEdit} from "components";
import {REGION_ACTIONS} from "../RegionalProxies.constants";
import {RegionalProxiesData} from "./useRegionalProxiesData.types";

export const useRegionalProxiesActions = ({
  formattedData
}: {
  formattedData: RegionalProxiesData['formattedData']
}): ActionsProps['actions'] => {
  return {
    [REGION_ACTIONS.ADD]: {
      icon: <IconAdd />
    },
    [REGION_ACTIONS.EDIT]: {
      icon: <IconEdit />,
      isDisabled: !formattedData.regionId
    },
    [REGION_ACTIONS.DELETE]: {
      icon: <IconDelete />,
      isDisabled: !formattedData.regionId
    }
  }
}