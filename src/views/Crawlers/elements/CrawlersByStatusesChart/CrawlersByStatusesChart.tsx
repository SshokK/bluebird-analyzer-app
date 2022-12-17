import type {FC} from "react";

import React from 'react';
import {CardsContainer, ErrorBoundary, PieChart} from "components";
import {useCrawlersByStatusesChartQueries} from "./hooks";

export const CrawlersByStatusesChart: FC = () => {
  const queries = useCrawlersByStatusesChartQueries();

  return (
    <ErrorBoundary>
      <CardsContainer
        title="Crawlers pulse"
        isFullHeight
        isLoading={queries.fetchCrawlersByNamesAggregation.isLoading}
      >
        <PieChart data={queries.fetchCrawlersByNamesAggregation.data} />
      </CardsContainer>
    </ErrorBoundary>
  )
}