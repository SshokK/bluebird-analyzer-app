import type {BookmakersCrawlersHandlers} from "./useBookmakersCrawlersHandlers.types";
import type {BookmakerSchema} from "features/bookmakers/bookmakers.api.types";
import type {BookmakersCrawlersData} from "./useBookmakersCrawlersData.types";
import type {BookmakersCrawlersProps} from "../BookmakersCrawlers.types";

import {SORT_ORDERS} from "constants/global.constants";

import {useCallback} from "react";

export const useBookmakersCrawlersHandlers = ({
  props,
  localState,
  localActions
}: {
  props: Pick<BookmakersCrawlersProps, 'onBookmakerIdChange'>
  localState: BookmakersCrawlersData['localState'];
  localActions: BookmakersCrawlersData['localActions'];
}) => {
  const { onBookmakerIdChange } = props;

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

  const handleBookmakerIdChange: BookmakersCrawlersHandlers['handleBookmakerIdChange'] = useCallback(() => {
    onBookmakerIdChange?.(localState.bookmakerId);
  }, [localState.bookmakerId, onBookmakerIdChange])

  return {
    handleBookmakersChange,
    handleBookmakerIdChange,
    handleSortChange
  }
}