import type {CrawlersHandlers} from "./useCrawlersHandlers.types";
import type {CrawlersData} from "./useCrawlersData.types";

import {useCallback} from "react";

export const useCrawlersHandlers = ({
  localActions
}: {
  localActions: CrawlersData['localActions']
}): CrawlersHandlers => {
  const handleSelectedRowsChange: CrawlersHandlers['handleSelectedRowsChange'] = useCallback((rows) => {
    localActions.setSelectedRows(rows)
  }, [localActions]);

  return {
    handleSelectedRowsChange
  }
}