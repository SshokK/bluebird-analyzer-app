import React from "react";
import {
  CARDS_CONTAINER_ORIENTATIONS,
  CardsContainer,
  ErrorBoundary,
  Grid,
  GRID_HEIGHT,
  List,
  Separator
} from "components";
import {ANIMATION_TIMING} from "./BookmakersCrawlers.constants";
import {EventCrawlers} from "./elements";
import {
  useBookmakersCrawlersActions,
  useBookmakersCrawlersData,
  useBookmakersCrawlersHandlers,
  useBookmakersCrawlersMutations,
  useBookmakersCrawlersQueries
} from "./hooks";

export const BookmakersCrawlers = () => {
  const { localState, localActions, formattedData } = useBookmakersCrawlersData();

  const queries = useBookmakersCrawlersQueries({
    formattedData
  });

  const mutations = useBookmakersCrawlersMutations({
    localState
  })

  const handlers = useBookmakersCrawlersHandlers({
    localActions
  });

  const actions = useBookmakersCrawlersActions({
    localState,
    localActions,
    queries,
    mutations,
    onSortChange: handlers.handleSortChange
  });

  return (
    <ErrorBoundary>
      <CardsContainer
        title="Bookmakers"
        isLoading={queries.fetchBookmakers.isFetching}
        isAnimated
        isFullHeight
        orientation={CARDS_CONTAINER_ORIENTATIONS.COLUMN}
        animationTiming={ANIMATION_TIMING}
      >
        <Grid isContainer isWrapDisabled height={GRID_HEIGHT.FULL}>
          <Grid isChild xs={4}>
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
          </Grid>
          <Grid isChild xs={1}>
            <Separator isVertical>
              Crawlers
            </Separator>
          </Grid>
          <Grid isChild xs={8} isShrinkDisabled>
            <EventCrawlers bookmakerId={localState.bookmakerId} />
          </Grid>
        </Grid>
      </CardsContainer>
    </ErrorBoundary>
  )
}