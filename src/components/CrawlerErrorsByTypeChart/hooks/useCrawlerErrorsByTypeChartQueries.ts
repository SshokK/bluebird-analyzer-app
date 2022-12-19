import type {CrawlerErrorsByTypeChartProps} from "../CrawlerErrorsByTypeChart.types";

import {useQuery} from "@tanstack/react-query";

import * as crawlerErrorsApi from "features/crawler-errors/crawlerErrors.api";
import * as crawlerErrorsApiConstants from "features/crawler-errors/crawlerErrors.api.constants";
import * as crawlerErrorsApiSelectors from "features/crawler-errors/crawlerErrors.api.selectors";

import {QUERY_KEYS} from "constants/queries.constants";

export const useCrawlerErrorsByTypeChartQueries = ({ props }: {
  props: Pick<CrawlerErrorsByTypeChartProps, 'eventCrawlerIds'>
}) => {
  const fetchCrawlerErrorByTypeAggregation = useQuery({
    queryKey: [QUERY_KEYS.CRAWLER_ERROR_AGGREGATIONS, {
      aggregateBy: crawlerErrorsApiConstants.CRAWLER_ERROR_AGGREGATION_TYPES.BY_TYPE,
      eventCrawlerId: props.eventCrawlerIds
    }],
    queryFn: () => crawlerErrorsApi.fetchCrawlerErrorByTypeAggregation({
      aggregateBy: crawlerErrorsApiConstants.CRAWLER_ERROR_AGGREGATION_TYPES.BY_TYPE,
      eventCrawlerId: props.eventCrawlerIds
    }),
    select: crawlerErrorsApiSelectors.getCrawlerErrorAggregationForDonutChart
  });

  return {
    fetchCrawlerErrorByTypeAggregation
  }
}