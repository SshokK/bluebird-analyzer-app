import type {FC} from "react";
import type {EventCrawlersByStatusesChartProps} from "./CrawlersByStatusesChart.types";

import React from 'react';
import {Container, ErrorBoundary, DonutChart} from "components";
import {useCrawlersByStatusesChartQueries} from "./hooks";

export const CrawlersByStatusesChart: FC<EventCrawlersByStatusesChartProps> = ({
  bookmakerId
}) => {
  const queries = useCrawlersByStatusesChartQueries({
    props: {
      bookmakerId
    }
  });

  return (
    <ErrorBoundary>
      <Container
        title="Pulse"
        isFullHeight
        isLoading={queries.fetchCrawlersByStatusAggregation.isFetching}
        isAnimated
      >
        <DonutChart
          series={queries.fetchCrawlersByStatusAggregation.data}
          noDataMessage={bookmakerId ? "No data for selected bookmaker" : "Select a bookmaker"}
        />
      </Container>
    </ErrorBoundary>
  )
}