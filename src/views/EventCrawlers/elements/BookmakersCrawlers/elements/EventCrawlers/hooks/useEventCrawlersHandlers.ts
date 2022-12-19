import type {EventCrawlersHandlers} from "./useEventCrawlersHandlers.types";
import type {EventCrawlersData} from "./useEventCrawlersData.types";

import {useCallback} from "react";

export const useEventCrawlersHandlers = ({
  localActions
}: {
  localActions: EventCrawlersData['localActions']
}): EventCrawlersHandlers => {
  const handleSelectedRowsChange: EventCrawlersHandlers['handleSelectedRowsChange'] = useCallback((rows) => {
    localActions.setSelectedRowKeys(rows)
  }, [localActions]);

  return {
    handleSelectedRowsChange
  }
}