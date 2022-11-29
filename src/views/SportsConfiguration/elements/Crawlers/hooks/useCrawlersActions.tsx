import type {ActionsProps} from "components";
import type {useCrawlersQueries} from "./useCrawlersQueries";
import type {CrawlersData} from "./useCrawlersData.types";

import {IconAdd, IconEdit, IconPlay, IconStop, MODAL_SIZES} from "components";
import {ACTION_KEYS} from "../Crawlers.constants";

export const useCrawlersActions = ({
  queries,
  localState
}: {
  queries: ReturnType<typeof useCrawlersQueries>;
  localState: CrawlersData['localState']
}): ActionsProps['actions'] => {
  return {
    [ACTION_KEYS.CREATE]: {
      icon: <IconAdd />,
      shouldShowModal: true,
      modalTitle: `Add new ${queries.fetchSport.data?.name} crawler`,
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