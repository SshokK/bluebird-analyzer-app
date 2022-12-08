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
  useBookmakersMutations,
  useBookmakersQueries
} from "./hooks";

export const Bookmakers: FC<BookmakersProps> = ({ onSelectedBookmakerChange }) => {
  const { localState, localActions, formattedData } = useBookmakersData();

  const queries = useBookmakersQueries({
    formattedData
  });

  const mutations = useBookmakersMutations({
    localState
  })

  const handlers = useBookmakersHandlers({
    localState,
    localActions,
    props: {
      onSelectedBookmakerChange
    }
  });

  const actions = useBookmakersActions({
    localState,
    localActions,
    queries,
    mutations,
    onSortChange: handlers.handleSortChange
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
        orientation={CARDS_CONTAINER_ORIENTATIONS.COLUMN}
      >
        <List
          primaryActions={actions.primaryActions}
          secondaryActions={actions.secondaryActions}
          options={queries.fetchBookmakers.data}
          isFullWidth
          shouldShowNoDataMessage={!queries.fetchBookmakers.data?.length}
          noDataMessage={localState.nameFilter ? "No bookmakers matching filter" : "No bookmakers"}
          selectedOptionKeys={localState.bookmakerId ? [localState.bookmakerId] : []}
          onSelectedOptionsChange={handlers.handleBookmakersChange}
        />
      </CardsContainer>
    </ErrorBoundary>
  )
}