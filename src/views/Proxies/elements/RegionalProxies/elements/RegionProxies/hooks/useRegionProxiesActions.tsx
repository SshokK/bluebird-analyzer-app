import type {TableProps} from "components";
import type {RegionProxiesData} from "./useRegionProxiesData.types";

import {IconAdd, IconDelete, MODAL_SIZES} from "components";

import {REGION_PROXIES_ACTIONS} from "../RegionProxies.constants";

import {useRegionProxiesMutations} from "./useRegionProxiesMutations";

export const useRegionProxiesActions = ({
  localState,
  mutations
}: {
  localState: RegionProxiesData['localState'];
  mutations: ReturnType<typeof useRegionProxiesMutations>
}): Required<TableProps>['actions'] => {
  return {
    [REGION_PROXIES_ACTIONS.ADD]: {
      icon: <IconAdd />,
    },
    [REGION_PROXIES_ACTIONS.DELETE]: {
      icon: <IconDelete />,
      isDisabled: !localState.selectedRowKeys.length,
      shouldShowModal: true,
      modalTitle: "Are you sure?",
      modalSize: MODAL_SIZES.SMALL,
      onSubmit: mutations.deleteProxies.mutate
    }
  }
}