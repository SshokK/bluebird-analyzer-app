import React from "react";
import {ErrorBoundary, Grid, GRID_HEIGHT, Separator} from "components";
import {EventCrawlers, Bookmakers} from "./elements";
import {useBookmakersCrawlersData} from "./hooks";

export const BookmakersCrawlers = () => {
  const { localState, localActions } = useBookmakersCrawlersData();

  return (
    <ErrorBoundary>
      <Grid isContainer isWrapDisabled>
        <Grid isChild xs={4} height={GRID_HEIGHT.XXXL}>
          <Bookmakers onSelectedBookmakerChange={localActions.setBookmakerId} />
        </Grid>
        <Grid isChild xs={1} height={GRID_HEIGHT.XXXL}>
          <Separator isVertical>
            Crawlers
          </Separator>
        </Grid>
        <Grid isChild xs={8} height={GRID_HEIGHT.XXXL}>
          <EventCrawlers bookmakerId={localState.bookmakerId} />
        </Grid>
      </Grid>
    </ErrorBoundary>
  )
}