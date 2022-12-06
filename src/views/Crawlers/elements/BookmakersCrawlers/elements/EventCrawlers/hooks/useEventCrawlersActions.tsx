import type {ActionsProps} from "components";
import type {EventCrawlersData} from "./useEventCrawlersData.types";

import {IconAdd, IconEdit, IconPlay, IconStop, MODAL_SIZES} from "components";
import {ACTION_KEYS} from "../EventCrawlers.constants";

export const useEventCrawlersActions = ({
  localState
}: {
  localState: EventCrawlersData['localState']
}): ActionsProps['actions'] => {
  return {
    [ACTION_KEYS.CREATE]: {
      icon: <IconAdd />,
      shouldShowModal: true,
      modalTitle: `Add event crawler`,
      modalSize: MODAL_SIZES.MEDIUM
    },
    [ACTION_KEYS.BULK_MAKE_INACTIVE]: {
      icon: <IconStop />,
      isDisabled: !localState.selectedRows.length
    },
    [ACTION_KEYS.BULK_MAKE_ACTIVE]: {
      icon: <IconPlay />,
      isDisabled: !localState.selectedRows.length
    },
    [ACTION_KEYS.BULK_DELETE]: {
      icon: <IconEdit />,
      isDisabled: !localState.selectedRows.length
    }
  }
}