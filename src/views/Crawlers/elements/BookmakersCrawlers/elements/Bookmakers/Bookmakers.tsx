import type {FC} from 'react';
import type {BookmakersProps} from "./Bookmakers.types";

import React from 'react';
import {
  CARDS_CONTAINER_ORIENTATIONS,
  CardsContainer, ErrorBoundary,
  List
} from "components";
import {
  useBookmakersActions,
  useBookmakersData,
  useBookmakersHandlers,
  useBookmakersLifecycle,
  useBookmakersQueries
} from "./hooks";

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

  const actions = useBookmakersActions({
    localState
  });

  useBookmakersLifecycle({
    onBookmakerIdChange: handlers.handleBookmakerIdChange
  });

  return (
    <ErrorBoundary>
      <CardsContainer
        title="Bookmakers"
        isLoading={queries.fetchBookmakers.isFetching}
        isAnimated
        isFullHeight
        shouldShowNoDataMessage={!queries.fetchBookmakers.data?.length}
        noDataMessage="There are no bookmakers"
        orientation={CARDS_CONTAINER_ORIENTATIONS.COLUMN}
      >
        <List
          primaryActions={actions.primaryActions}
          secondaryActions={actions.secondaryActions}
          options={queries.fetchBookmakers.data}
          isFullWidth
          selectedOptionKeys={localState.bookmakerId ? [localState.bookmakerId] : []}
          onSelectedOptionsChange={handlers.handleBookmakersChange}
        />
      </CardsContainer>
    </ErrorBoundary>
  )
}