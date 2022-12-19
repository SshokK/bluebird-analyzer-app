import type {FC} from "react";
import type {CrawlerErrorsByTypeChartProps} from "./CrawlerErrorsByTypeChart.types";

import React from 'react';
import {DonutChart} from "../Charts";
import {useCrawlerErrorsByTypeChartQueries} from "./hooks";

export const CrawlerErrorsByTypeChart: FC<CrawlerErrorsByTypeChartProps> = ({ eventCrawlerIds }) => {
  const queries = useCrawlerErrorsByTypeChartQueries({
    props: {
      eventCrawlerIds
    }
  });

  return (
    <DonutChart
      series={queries.fetchCrawlerErrorByTypeAggregation.data}
      noDataMessage="No crawler errors"
    />
  )
}