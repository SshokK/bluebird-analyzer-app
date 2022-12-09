import type {BookmakersCrawlersHandlers} from "./useBookmakersCrawlersHandlers.types";
import type {BookmakerSchema} from "features/bookmakers/bookmakers.api.types";
import type {BookmakersCrawlersData} from "./useBookmakersCrawlersData.types";

import {SORT_ORDERS} from "constants/global.constants";

export const useBookmakersCrawlersHandlers = ({
  localActions
}: {
  localActions: BookmakersCrawlersData['localActions'];
}) => {
  const handleBookmakersChange: BookmakersCrawlersHandlers['handleBookmakersChange'] = (options) => {
    const selectedBookmakerId = options.pop?.()?.key as BookmakerSchema['id'];

    localActions.setBookmakerId(selectedBookmakerId ?? null);
  }

  const handleSortChange: BookmakersCrawlersHandlers['handleSortChange'] = () => {
    localActions.setSortOrder((sortOrder) => {
      if (sortOrder === SORT_ORDERS.DESC) {
        return SORT_ORDERS.ASC
      }

      if (sortOrder === SORT_ORDERS.ASC) {
        return null
      }

      return SORT_ORDERS.DESC
    })
  }

  return {
    handleBookmakersChange,
    handleSortChange
  }
}