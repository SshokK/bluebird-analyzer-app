import type {SelectProps} from "../Select";

import {QUERY_KEYS} from "constants/queries.constants";
import {SORT_ORDERS} from "constants/global.constants";

import * as regionsApi from "features/regions/regions.api";
import * as regionsApiSelectors from "features/regions/regions.api.selectors";
import * as regionsApiConstants from "features/regions/regions.api.constants";

import * as sportsApi from "features/sports/sports.api";
import * as sportsApiSelectors from "features/sports/sports.api.selectors";
import * as sportsApiConstants from "features/sports/sports.api.constants";

import * as crawlerPageSelectorsApi from "features/crawler-page-selectors/crawlerPageSelectors.api";
import * as crawlerPageSelectorsApiSelectors from "features/crawler-page-selectors/crawlerPageSelectors.api.selectors";

export enum DATA_SELECT_DATA_TYPES {
  REGIONS = 'regions',
  SPORTS = 'sport',
  CRAWLER_PAGE_SELECTOR_TARGET_TYPES = 'crawlerPageSelectorTargetTypes',
  CRAWLER_PAGE_SELECTOR_VALUE_TYPES = 'crawlerPageSelectorValueTypes',
  CRAWLER_PAGE_SELECTOR_DATA_KEYS = 'crawlerPageSelectorDataKeys'
}

export const DATA_CONFIG: Record<DATA_SELECT_DATA_TYPES, {
  label: string;
  queryOptions?: SelectProps['queryOptions'];
  options?: SelectProps['options'];
}> = {
  [DATA_SELECT_DATA_TYPES.REGIONS]: {
    label: 'regions',
    queryOptions: {
      queryKey: [QUERY_KEYS.REGIONS, {
        sortField: regionsApiConstants.SORT_FIELDS.NAME,
        sortOrder: SORT_ORDERS.ASC
      }],
      queryFn: () => regionsApi.fetchRegions({
        sortField: regionsApiConstants.SORT_FIELDS.NAME,
        sortOrder: SORT_ORDERS.ASC
      }),
      select: regionsApiSelectors.formatRegionsForSelect
    }
  },
  [DATA_SELECT_DATA_TYPES.SPORTS]: {
    label: 'sports',
    queryOptions: {
      queryKey: [QUERY_KEYS.SPORTS, {
        sortField: sportsApiConstants.SORT_FIELDS.NAME,
        sortOrder: SORT_ORDERS.ASC
      }],
      queryFn: () => sportsApi.fetchSports({
        sortField: sportsApiConstants.SORT_FIELDS.NAME,
        sortOrder: SORT_ORDERS.ASC
      }),
      select: sportsApiSelectors.formatSportsForSelect
    }
  },
  [DATA_SELECT_DATA_TYPES.CRAWLER_PAGE_SELECTOR_TARGET_TYPES]: {
    label: 'target type',
    queryOptions: {
      queryKey: [QUERY_KEYS.CRAWLER_PAGE_SELECTOR_TARGET_TYPES],
      queryFn: () => crawlerPageSelectorsApi.fetchCrawlerPageSelectorTargetTypes(),
      select: crawlerPageSelectorsApiSelectors.formaTargetTypesForSelect
    }
  },
  [DATA_SELECT_DATA_TYPES.CRAWLER_PAGE_SELECTOR_VALUE_TYPES]: {
    label: 'value type',
    queryOptions: {
      queryKey: [QUERY_KEYS.CRAWLER_PAGE_SELECTOR_VALUE_TYPES],
      queryFn: () => crawlerPageSelectorsApi.fetchCrawlerPageSelectorValueTypes(),
      select: crawlerPageSelectorsApiSelectors.formatValueTypesForSelect
    }
  },
  [DATA_SELECT_DATA_TYPES.CRAWLER_PAGE_SELECTOR_DATA_KEYS]: {
    label: 'data key',
    queryOptions: {
      queryKey: [QUERY_KEYS.CRAWLER_PAGE_SELECTOR_DATA_KEYS],
      queryFn: () => crawlerPageSelectorsApi.fetchCrawlerPageSelectorDataKeys(),
      select: crawlerPageSelectorsApiSelectors.formatDataKeysForSelect
    }
  }
}