import type {ActionsProps} from "../../../../Actions";

import {SELECTORS_ACTIONS} from "../Selectors.constants";
import {IconDelete} from "../../../../Icons";

export const useSelectorsActions = (): Required<ActionsProps>['actions'] => {
  return {
    [SELECTORS_ACTIONS.BULK_DELETE]: {
      icon: <IconDelete />
    }
  }
}