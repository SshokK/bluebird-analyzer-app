import type {EventCrawlersData} from "./useEventCrawlersData.types";

import {useMemo, useState} from "react";

export const useEventCrawlersData = (): EventCrawlersData => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<EventCrawlersData['localState']['selectedRowKeys']>([]);

  const localState: EventCrawlersData['localState'] = {
    selectedRowKeys
  }

  const localActions: EventCrawlersData['localActions'] = useMemo(() => ({
    setSelectedRowKeys
  }), []);

  return {
    localState,
    localActions
  }
}