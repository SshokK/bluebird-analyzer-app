import type {FC} from 'react';
import type {BookmakersProps} from "./Bookmakers.types";

import React from 'react';
import { CardsContainer, List} from "components";
import {useBookmakersData, useBookmakersHandlers, useBookmakersLifecycle, useBookmakersQueries} from "./hooks";

export const Bookmakers: FC<BookmakersProps> = ({ onSelectedBookmakerChange }) => {
  const { localState, localActions } = useBookmakersData();

  const queries = useBookmakersQueries();

  const handlers = useBookmakersHandlers({
    localState,
    localActions,
    props: {
      onSelectedBookmakerChange
    }
  });

  useBookmakersLifecycle({
    onBookmakerIdChange: handlers.handleBookmakerIdChange
  })

  return (
    <CardsContainer
      title="Bookmakers"
      isLoading={queries.fetchBookmakers.isFetching}
      isAnimated
      isFullHeight
      shouldShowNoDataMessage={!queries.fetchBookmakers.data?.length}
      noDataMessage="There are no bookmakers"
    >
      <List
        options={queries.fetchBookmakers.data}
        isFullWidth
        selectedOptionKeys={localState.bookmakerId ? [localState.bookmakerId] : []}
        onSelectedOptionsChange={handlers.handleBookmakersChange}
      />
    </CardsContainer>
  )
}