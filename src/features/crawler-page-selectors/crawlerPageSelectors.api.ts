import * as apiTypes from "./crawlerPageSelectors.api.types";

import {fetch} from "fetch";

export const fetchCrawlerPageSelectors: apiTypes.FetchCrawlerPageSelectors = (crawlerId) => {
  return fetch({
    url: `/api/v1/crawlers/${crawlerId}/selectors`,
    method: 'GET'
  })
}

export const createCrawlerPageSelectors: apiTypes.CreateCrawlerPageSelectors = (crawlerId, data) => {
  return fetch({
    url: `/api/v1/crawlers/${crawlerId}/selectors`,
    method: 'POST',
    data
  })
}