import type {BookmakersCrawlersData} from "./useBookmakersCrawlersData.types";

import {useMemo, useState} from "react";

export const useBookmakersCrawlersData = (): BookmakersCrawlersData => {
  const [bookmakerId, setBookmakerId] = useState<
    BookmakersCrawlersData['localState']['bookmakerId']
  >(null);

  const localState: BookmakersCrawlersData['localState'] = {
    bookmakerId
  }

  const localActions: BookmakersCrawlersData['localActions'] = useMemo(() => ({
    setBookmakerId
  }), []);

  return {
    localState,
    localActions
  }
}