import type {EventCrawlersByStatusesChartProps} from "../CrawlersByStatusesChart.types";

import * as eventCrawlersApi from "features/event-crawlers/eventCrawlers.api";
import * as eventCrawlersApiSelectors from "features/event-crawlers/eventCrawlers.api.selectors";
import * as eventCrawlersApiConstants from "features/event-crawlers/eventCrawlers.api.constants";

import {QUERY_KEYS} from "constants/queries.constants";

import {useQuery} from "@tanstack/react-query";

export const useCrawlersByStatusesChartQueries = ({
  props
}: {
  props: Pick<EventCrawlersByStatusesChartProps, 'bookmakerId'>
}) => {
  const fetchCrawlersByStatusAggregation = useQuery({
    queryKey: [QUERY_KEYS.EVENT_CRAWLER_AGGREGATIONS, {
      aggregateBy: eventCrawlersApiConstants.EVENT_CRAWLER_AGGREGATION_TYPES.BY_STATUS,
      bookmakerId: props.bookmakerId ?? undefined
    }],
    queryFn: () => eventCrawlersApi.fetchEventCrawlerAggregations({
      aggregateBy: eventCrawlersApiConstants.EVENT_CRAWLER_AGGREGATION_TYPES.BY_STATUS,
      bookmakerId: props.bookmakerId ?? undefined
    }),
    select: eventCrawlersApiSelectors.getCrawlersByNameAggregationForDonutChart
  });

  return {
    fetchCrawlersByStatusAggregation
  }
}