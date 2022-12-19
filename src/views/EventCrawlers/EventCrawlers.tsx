import React from 'react';
import {ErrorBoundary, Grid, GRID_SPACING, View} from "components";
import {BookmakersCrawlers, CrawlersByStatusesChart} from "./elements";
import {useEventCrawlersData} from "./hooks";

export const EventCrawlers = () => {
  const { localState, localActions } = useEventCrawlersData();

  return (
    <ErrorBoundary>
      <View>
        <Grid isContainer spacing={GRID_SPACING.XXL}>
          <Grid isChild isContainer xs={3}>
            <CrawlersByStatusesChart
              bookmakerId={localState.bookmakerId}
            />
          </Grid>
          <Grid isChild isContainer xs={9}>
            <BookmakersCrawlers
              onBookmakerIdChange={localActions.setBookmakerId}
            />
          </Grid>
        </Grid>
      </View>
    </ErrorBoundary>
  )
}