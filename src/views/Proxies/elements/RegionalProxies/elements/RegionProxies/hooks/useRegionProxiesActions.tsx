import type {TableProps} from "components";

import {REGION_PROXIES_ACTIONS} from "../RegionProxies.constants";
import {IconAdd, IconDelete} from "components";

export const useRegionProxiesActions = (): Required<TableProps>['actions'] => {
  return {
    [REGION_PROXIES_ACTIONS.ADD]: {
      icon: <IconAdd />
    },
    [REGION_PROXIES_ACTIONS.DELETE]: {
      icon: <IconDelete />
    }
  }
}