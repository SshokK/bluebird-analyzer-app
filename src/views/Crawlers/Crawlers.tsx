import React from 'react';
import {ErrorBoundary, Grid, GRID_HEIGHT, View} from "components";
import {BookmakersCrawlers} from "./elements";

export const Crawlers = () => {
  return (
    <ErrorBoundary>
      <View>
        <Grid isContainer height={GRID_HEIGHT.XL}>
          <BookmakersCrawlers />
        </Grid>
      </View>
    </ErrorBoundary>
  )
}