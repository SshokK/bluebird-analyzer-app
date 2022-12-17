import * as apiTypes from "./crawlerPageSelectors.api.types";

import {fetch} from "fetch";

import * as helpers from "./crawlerPageSelectors.api.helpers";

export const fetchCrawlerPageSelectors: apiTypes.FetchCrawlerPageSelectors = (params) => {
  return fetch({
    url: `/api/v1/crawler-page-selectors`,
    method: 'GET',
    params
  })
}

export const fetchCrawlerPageSelectorValueTypes: apiTypes.FetchCrawlerPageSelectorValueTypes = () => {
  return fetch({
    url: `/api/v1/crawler-page-selectors/value-types`,
    method: 'GET'
  })
}

export const fetchCrawlerPageSelectorDataKeys: apiTypes.FetchCrawlerPageSelectorDataKeys = () => {
  return fetch({
    url: `/api/v1/crawler-page-selectors/data-keys`,
    method: 'GET'
  })
}

export const fetchCrawlerPageSelectorTargetTypes: apiTypes.FetchCrawlerPageSelectorTargetTypes = () => {
  return fetch({
    url: `/api/v1/crawler-page-selectors/target-types`,
    method: 'GET'
  })
}

export const createCrawlerPageSelectors: apiTypes.CreateCrawlerPageSelectors = (selectors, params) => {
  return fetch({
    url: `/api/v1/crawler-page-selectors`,
    method: 'POST',
    params,
    data: helpers.formatCreateCrawlerPageSelectorsBody(selectors)
  })
}