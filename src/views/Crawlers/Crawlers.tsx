import React from 'react';
import {ErrorBoundary, View} from "components";
import { BookmakersCrawlers} from "./elements";

export const Crawlers = () => {
  return (
    <ErrorBoundary>
      <View title="Crawlers">
        <BookmakersCrawlers />
      </View>
    </ErrorBoundary>
  )
}