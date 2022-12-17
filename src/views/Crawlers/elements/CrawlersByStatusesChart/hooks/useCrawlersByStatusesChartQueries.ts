import * as crawlersApi from "features/crawlers/crawlers.api";
import * as crawlersApiSelectors from "features/crawlers/crawlers.api.selectors";

import {QUERY_KEYS} from "constants/queries.constants";

import {useQuery} from "@tanstack/react-query";

export const useCrawlersByStatusesChartQueries = () => {
  const fetchCrawlersByNamesAggregation = useQuery({
    queryKey: [QUERY_KEYS.CRAWLERS_BY_NAME_AGGREGATION],
    queryFn: crawlersApi.fetchCrawlersByNamesAggregation,
    select: crawlersApiSelectors.formatCrawlersByNameAggregationForPieChart
  });

  return {
    fetchCrawlersByNamesAggregation
  }
}