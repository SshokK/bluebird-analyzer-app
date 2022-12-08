import type {BookmakersHandlers} from "./useBookmakersHandlers.types";
import type {BookmakerSchema} from "features/bookmakers/bookmakers.api.types";
import type {BookmakersProps} from "../Bookmakers.types";
import type {BookmakersData} from "./useBookmakersData.types";

import {useCallback} from "react";
import {SORT_ORDERS} from "../../../../../../../constants/global.constants";

export const useBookmakersHandlers = ({
  props,
  localState,
  localActions
}: {
  props: Pick<BookmakersProps, 'onSelectedBookmakerChange'>;
  localState: BookmakersData['localState'];
  localActions: BookmakersData['localActions'];
}) => {
  const { onSelectedBookmakerChange } = props;

  const handleBookmakerIdChange: BookmakersHandlers['handleBookmakerIdChange'] = useCallback(() => {
    onSelectedBookmakerChange(localState.bookmakerId);
  }, [localState.bookmakerId, onSelectedBookmakerChange])

  const handleBookmakersChange: BookmakersHandlers['handleBookmakersChange'] = (options) => {
    const selectedBookmakerId = options.pop?.()?.key as BookmakerSchema['id'];

    localActions.setBookmakerId(selectedBookmakerId ?? null);
  }

  const handleSortChange: BookmakersHandlers['handleSortChange'] = () => {
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
    handleBookmakerIdChange,
    handleBookmakersChange,
    handleSortChange
  }
}