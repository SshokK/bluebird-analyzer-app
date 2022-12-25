import type * as apiTypes from "./crawlerLogs.api.types";

import { fetch } from 'fetch';

export const fetchCrawlerLogs: apiTypes.FetchCrawlerLogs = (params) => {
  return fetch({
    url: '/api/v1/crawler-logs',
    method: 'GET',
    params
  })
}