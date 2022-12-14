import type {ActionsProps} from "../../../../Actions";
import type {SelectorsData} from "./useSelectorsData.types";

import {SELECTORS_ACTIONS} from "../Selectors.constants";
import {IconDelete} from "../../../../Icons";

export const useSelectorsActions = ({
  localState
}: {
  localState: SelectorsData['localState']
}): Required<ActionsProps>['actions'] => {
  return {
    [SELECTORS_ACTIONS.BULK_DELETE]: {
      icon: <IconDelete />,
      isDisabled: !localState.selectedSelectors.length
    }
  }
}