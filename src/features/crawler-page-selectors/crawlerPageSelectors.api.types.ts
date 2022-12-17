import type {CrawlerSchema} from "../crawlers/crawlers.api.types";
import type {
  CRAWLER_PAGE_SELECTOR_DATA_KEYS,
  CRAWLER_PAGE_SELECTOR_TARGET_TYPES,
  CRAWLER_PAGE_SELECTOR_VALUE_TYPES
} from "./crawlerPageSelectors.api.constants";
import {CrawlerPageSelector} from "./crawlerPageSelectors.types";

export type CrawlerPageSelectorSchema = {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  value: string;
  valueType: CRAWLER_PAGE_SELECTOR_VALUE_TYPES;
  targetType: CRAWLER_PAGE_SELECTOR_TARGET_TYPES;
  dataKey: CRAWLER_PAGE_SELECTOR_DATA_KEYS | null;
  parentSelectorId: CrawlerPageSelectorSchema["id"] | null;
  CrawlerId: CrawlerSchema["id"];
}

export type FetchCrawlerPageSelectorsPayload = [
  params: {
    crawlerId: CrawlerSchema['id']
  }
]
export type FetchCrawlerPageSelectorsResponse = {
  results: CrawlerPageSelectorSchema[];
  totalCount: number;
};
export type FetchCrawlerPageSelectors = (...args: FetchCrawlerPageSelectorsPayload) => Promise<FetchCrawlerPageSelectorsResponse>;


export type FetchCrawlerPageSelectorValueTypesPayload = undefined[]
export type FetchCrawlerPageSelectorValueTypesResponse = {
  results: CRAWLER_PAGE_SELECTOR_VALUE_TYPES[];
  totalCount: number;
};
export type FetchCrawlerPageSelectorValueTypes = (...args: FetchCrawlerPageSelectorValueTypesPayload) => Promise<FetchCrawlerPageSelectorValueTypesResponse>;



export type FetchCrawlerPageSelectorDataKeysPayload = undefined[]
export type FetchCrawlerPageSelectorDataKeysResponse = {
  results: CRAWLER_PAGE_SELECTOR_DATA_KEYS[];
  totalCount: number;
};
export type FetchCrawlerPageSelectorDataKeys = (...args: FetchCrawlerPageSelectorDataKeysPayload) => Promise<FetchCrawlerPageSelectorDataKeysResponse>;



export type FetchCrawlerPageSelectorTargetTypesPayload = undefined[]
export type FetchCrawlerPageSelectorTargetTypesResponse = {
  results: CRAWLER_PAGE_SELECTOR_TARGET_TYPES[];
  totalCount: number;
};
export type FetchCrawlerPageSelectorTargetTypes = (...args: FetchCrawlerPageSelectorTargetTypesPayload) => Promise<FetchCrawlerPageSelectorTargetTypesResponse>;



export type CreateCrawlerPageSelectorsBody = {
  value: CrawlerPageSelectorSchema["value"];
  valueType: CrawlerPageSelectorSchema["valueType"];
  targetType: CrawlerPageSelectorSchema["targetType"];
  dataKey: CrawlerPageSelectorSchema["dataKey"];
  children?: CreateCrawlerPageSelectorsBody[];
}
export type CreateCrawlerPageSelectorsParams = {
  crawlerId: CrawlerSchema['id'];
  shouldRemoveExistingSelectors?: boolean;
}
export type CreateCrawlerPageSelectorsPayload = [
  selectors: CrawlerPageSelector[],
  params?: CreateCrawlerPageSelectorsParams
]
export type CreateCrawlerPageSelectorsResponse = CrawlerPageSelectorSchema[];
export type CreateCrawlerPageSelectors = (...args: CreateCrawlerPageSelectorsPayload) => Promise<CreateCrawlerPageSelectorsResponse>;