import type * as apiTypes from "./crawlerErrors.api.types";

import { fetch } from 'fetch';

export const fetchCrawlerErrors: apiTypes.FetchCrawlerErrors = (params) => {
  return fetch({
    url: '/api/v1/crawler-errors',
    method: 'GET',
    params
  })
}

export const fetchCrawlerErrorByTypeAggregation: apiTypes.FetchCrawlerErrorByTypeAggregation = (params) => {
  return fetch({
    url: '/api/v1/aggregations/crawler-errors',
    method: 'GET',
    params
  })
}

