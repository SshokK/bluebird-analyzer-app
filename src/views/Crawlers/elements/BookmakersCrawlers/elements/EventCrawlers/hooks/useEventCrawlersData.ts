import type {EventCrawlersData} from "./useEventCrawlersData.types";

import {useMemo, useState} from "react";

export const useEventCrawlersData = (): EventCrawlersData => {
  const [selectedRows, setSelectedRows] = useState<EventCrawlersData['localState']['selectedRows']>([]);

  const localState: EventCrawlersData['localState'] = {
    selectedRows
  }

  const localActions: EventCrawlersData['localActions'] = useMemo(() => ({
    setSelectedRows
  }), []);

  return {
    localState,
    localActions
  }
}