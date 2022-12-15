import type {ActionsProps} from "components";
import type {SelectorNodeContentProps} from "../SelectorNodeContent.types";

import React from "react";
import {SELECTOR_NODE_CONTENT_ACTION_KEYS} from "../SelectorNodeContent.constants";
import {ICON_BUTTON_SIZES, IconEdit} from "components";
import {EditForm} from "../elements";

export const useSelectorNodeContentActions = ({
  props
}: {
  props: Pick<SelectorNodeContentProps, 'crawlerPageSelector' | 'isEditable' | 'onSelectorChange'>
}): Required<ActionsProps>['actions'] => {
  return {
    [SELECTOR_NODE_CONTENT_ACTION_KEYS.EDIT]: {
      icon: <IconEdit />,
      iconSize: ICON_BUTTON_SIZES.SMALL,
      shouldShowDropdown: true,
      isDisabled: !props.isEditable,
      dropdownContent: <EditForm
        crawlerPageSelector={props.crawlerPageSelector}
        onSelectorChange={props.onSelectorChange}
      />
    }
  }
}