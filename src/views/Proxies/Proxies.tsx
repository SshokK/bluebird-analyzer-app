import type {FC} from 'react';

import React from 'react';
import {ErrorBoundary, Grid, GRID_HEIGHT, View} from "../../components";
import {RegionalProxies} from "./elements";

export const Proxies: FC = () => {
  return (
    <ErrorBoundary>
      <View>
        <Grid isContainer height={GRID_HEIGHT.XXL}>
          <RegionalProxies />
        </Grid>
      </View>
    </ErrorBoundary>
  )
}