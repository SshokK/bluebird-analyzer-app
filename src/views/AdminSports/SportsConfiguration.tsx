import React from 'react';
import {ErrorBoundary, View} from "components";
import {SportFamilies} from "./elements";

export const SportsConfiguration = () => {
  return (
    <ErrorBoundary>
      <View title="Sports configuration">
        <SportFamilies />
      </View>
    </ErrorBoundary>
  )
}