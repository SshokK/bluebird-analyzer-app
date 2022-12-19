import type {FC} from "react";
import type {BookmakersCrawlersProps} from "./BookmakersCrawlers.types";

import React from "react";
import {
  CONTAINER_ORIENTATIONS,
  Container,
  ErrorBoundary,
  Grid,
  GRID_HEIGHT,
  GRID_SPACING,
  List, Separator
} from "components";
import {ANIMATION_TIMING} from "./BookmakersCrawlers.constants";
import {EventCrawlers} from "./elements";
import {
  useBookmakersCrawlersActions,
  useBookmakersCrawlersData,
  useBookmakersCrawlersHandlers, useBookmakersCrawlersLifecycle,
  useBookmakersCrawlersMutations,
  useBookmakersCrawlersQueries
} from "./hooks";

export const BookmakersCrawlers: FC<BookmakersCrawlersProps> = ({ onBookmakerIdChange }) => {
  const { localState, localActions, formattedData } = useBookmakersCrawlersData();

  const queries = useBookmakersCrawlersQueries({
    localState,
    formattedData
  });

  const mutations = useBookmakersCrawlersMutations({
    localState
  })

  const handlers = useBookmakersCrawlersHandlers({
    props: {
      onBookmakerIdChange
    },
    localState,
    localActions
  });

  const actions = useBookmakersCrawlersActions({
    localState,
    localActions,
    queries,
    mutations,
    onSortChange: handlers.handleSortChange
  });

  useBookmakersCrawlersLifecycle({
    onBookmakerIdChange: handlers.handleBookmakerIdChange
  })

  return (
    <ErrorBoundary>
      <Grid isContainer rowSpacing={GRID_SPACING.L}>
        <Grid isChild xs={12}>
          <Container
            title="Bookmakers"
            isLoading={queries.fetchBookmakers.isFetching}
            isAnimated
            orientation={CONTAINER_ORIENTATIONS.COLUMN}
            animationTiming={ANIMATION_TIMING}
            isWithoutHorizontalPadding
          >
            <List
              primaryActions={actions.primaryActions}
              secondaryActions={actions.secondaryActions}
              options={queries.fetchBookmakers.data?.options}
              isFullWidth
              isHorizontal
              shouldShowNoDataMessage={!queries.fetchBookmakers.data?.options.length}
              noDataMessage={localState.nameFilter ? "No bookmakers matching filter" : "No bookmakers"}
              selectedOptionKeys={localState.bookmakerId ? [localState.bookmakerId] : []}
              onSelectedOptionsChange={handlers.handleBookmakersChange}
            />
          </Container>
        </Grid>
        <Grid isChild xs={12} >
          <Separator>
            Crawlers
          </Separator>
        </Grid>
        <Grid isChild xs={12} height={GRID_HEIGHT.XL}>
          <Container
            title={queries.fetchBookmakers?.data?.bookmakerName
              ? `${queries.fetchBookmakers.data.bookmakerName} crawlers`
              : "All crawlers"}
            isLoading={queries.fetchBookmakers.isFetching}
            isAnimated
            isFullHeight
            orientation={CONTAINER_ORIENTATIONS.COLUMN}
            animationTiming={ANIMATION_TIMING}
            isWithoutHorizontalPadding
          >
            <EventCrawlers bookmakerId={localState.bookmakerId} />
          </Container>
        </Grid>
      </Grid>
    </ErrorBoundary>
  )
}