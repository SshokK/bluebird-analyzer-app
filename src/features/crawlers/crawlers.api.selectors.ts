import type * as crawleraApi from "./crawlers.api";
import type {PieChartProps} from "../../components/Charts/PieChart/PieChart.types";

import {CRAWLER_STATUSES} from "./crawlers.constants";

const CRAWLER_STATUS_COLOR: Record<CRAWLER_STATUSES, string> = {
  [CRAWLER_STATUSES.WAITING]: '#E2B266',
  [CRAWLER_STATUSES.ACTIVE]: '#00BA85',
  [CRAWLER_STATUSES.INACTIVE]: '#4F6073',
  [CRAWLER_STATUSES.FAILED]: '#B03D50'
}

export const formatCrawlersByNameAggregationForPieChart = (
  response: Awaited<ReturnType<typeof crawleraApi.fetchCrawlersByNamesAggregation>>
): PieChartProps['data'] => {
  return {
    labels: response.map(aggregation => aggregation.status.toUpperCase()),
    datasets: [{
      label: '# of Crawlers',
      backgroundColor: response.map(aggregation => CRAWLER_STATUS_COLOR[aggregation.status]),
      data: response.map(aggregation => aggregation.count)
    }]
  }
}