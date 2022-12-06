import type {BookmakersHandlers} from "./useBookmakersHandlers.types";
import type {BookmakerSchema} from "features/bookmakers/bookmakers.api.types";
import type {BookmakersProps} from "../Bookmakers.types";
import type {BookmakersData} from "./useBookmakersData.types";

import {useCallback} from "react";

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
    if (localState.bookmakerId) {
      onSelectedBookmakerChange(localState.bookmakerId);
    }
  }, [localState.bookmakerId, onSelectedBookmakerChange])

  const handleBookmakersChange: BookmakersHandlers['handleBookmakersChange'] = (options) => {
    const selectedBookmakerId = options.pop?.()?.key as BookmakerSchema['id'];

    if (selectedBookmakerId) {
      localActions.setBookmakerId(selectedBookmakerId);
    }
  }

  return {
    handleBookmakerIdChange,
    handleBookmakersChange
  }
}