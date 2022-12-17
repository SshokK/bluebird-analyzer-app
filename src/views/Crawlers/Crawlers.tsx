import React from 'react';
import {ErrorBoundary, Grid, GRID_HEIGHT, GRID_SPACING, View} from "components";
import {BookmakersCrawlers, CrawlersByStatusesChart} from "./elements";

export const Crawlers = () => {
  return (
    <ErrorBoundary>
      <View>
        <Grid isContainer spacing={GRID_SPACING.XL}>
          <Grid isChild isContainer shouldSetEqualAspectRatio xs={3}>
            <CrawlersByStatusesChart />
          </Grid>
          <Grid isChild isContainer height={GRID_HEIGHT.XL}>
            <BookmakersCrawlers />
          </Grid>
        </Grid>
      </View>
    </ErrorBoundary>
  )
}