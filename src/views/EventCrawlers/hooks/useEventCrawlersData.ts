import type {EventCrawlersData} from "./useEventCrawlersData.types";

import {useMemo, useState} from "react";

export const useEventCrawlersData = (): EventCrawlersData => {
  const [bookmakerId, setBookmakerId] = useState<
    EventCrawlersData['localState']['bookmakerId']
  >(null);

  const localState: EventCrawlersData['localState'] = {
    bookmakerId
  }

  const localActions: EventCrawlersData['localActions'] = useMemo(() => ({
    setBookmakerId
  }), []);

  return {
    localState,
    localActions
  }
}