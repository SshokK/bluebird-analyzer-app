import * as apiTypes from "./crawlers.api.types";

import {fetch} from "fetch";
import {CRAWLERS_AGGREGATION_TYPES} from "./crawlers.api.constants";

export const fetchCrawler: apiTypes.FetchCrawlers = (crawlerId) => {
  return fetch({
    url: `/api/v1/crawlers/${crawlerId}`,
    method: 'GET'
  })
}

export const fetchCrawlersByNamesAggregation: apiTypes.FetchCrawlersByNamesAggregation = () => {
  return fetch({
    url: '/api/v1/aggregations/crawlers',
    method: 'GET',
    params: {
      aggregateBy: CRAWLERS_AGGREGATION_TYPES.BY_STATUS
    }
  })
}