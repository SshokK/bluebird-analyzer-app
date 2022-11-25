import type {CrawlersData} from "./useCrawlersData.types";

import {useMemo, useState} from "react";

export const useCrawlersData = (): CrawlersData => {
  const [selectedRows, setSelectedRows] = useState<CrawlersData['localState']['selectedRows']>([]);

  const localState: CrawlersData['localState'] = {
    selectedRows
  }

  const localActions: CrawlersData['localActions'] = useMemo(() => ({
    setSelectedRows
  }), []);

  return {
    localState,
    localActions
  }
}