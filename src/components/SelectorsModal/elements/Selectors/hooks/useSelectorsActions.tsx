import type {ActionsProps} from "../../../../Actions";
import type {SelectorsProps} from "../Selectors.types";
import type {SelectorsHandlers} from "./useSelectorsHandlers.types";

import {SELECTORS_ACTIONS} from "../Selectors.constants";
import {IconAddMultiple} from "../../../../Icons";

export const useSelectorsActions = ({
  props,
  onCreateSelector
}: {
  props: Pick<SelectorsProps, 'isEditable'>
  onCreateSelector: SelectorsHandlers['handleSelectorCreation']
}): Required<ActionsProps>['actions'] => {
  return {
    [SELECTORS_ACTIONS.ADD]: {
      icon: <IconAddMultiple />,
      isDisabled: !props.isEditable,
      onClick: onCreateSelector
    }
  }
}