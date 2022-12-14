import type {CrawlerSchema} from "../crawlers/crawlers.api.types";
import type {
  CRAWLER_PAGE_SELECTOR_DATA_KEYS,
  CRAWLER_PAGE_SELECTOR_TARGET_TYPES,
  CRAWLER_PAGE_SELECTOR_VALUE_TYPES
} from "./crawlerPageSelectors.api.constants";

export type CrawlerPageSelectorSchema = {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  value: string;
  valueType: CRAWLER_PAGE_SELECTOR_VALUE_TYPES;
  targetType: CRAWLER_PAGE_SELECTOR_TARGET_TYPES;
  dataKey?: CRAWLER_PAGE_SELECTOR_DATA_KEYS;
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
  results: Required<CrawlerPageSelectorSchema>['valueType'][];
  totalCount: number;
};
export type FetchCrawlerPageSelectorValueTypes = (...args: FetchCrawlerPageSelectorValueTypesPayload) => Promise<FetchCrawlerPageSelectorValueTypesResponse>;



export type FetchCrawlerPageSelectorDataKeysPayload = undefined[]
export type FetchCrawlerPageSelectorDataKeysResponse = {
  results: Required<CrawlerPageSelectorSchema>['dataKey'][];
  totalCount: number;
};
export type FetchCrawlerPageSelectorDataKeys = (...args: FetchCrawlerPageSelectorDataKeysPayload) => Promise<FetchCrawlerPageSelectorDataKeysResponse>;



export type FetchCrawlerPageSelectorTargetTypesPayload = undefined[]
export type FetchCrawlerPageSelectorTargetTypesResponse = {
  results: Required<CrawlerPageSelectorSchema>['targetType'][];
  totalCount: number;
};
export type FetchCrawlerPageSelectorTargetTypes = (...args: FetchCrawlerPageSelectorTargetTypesPayload) => Promise<FetchCrawlerPageSelectorTargetTypesResponse>;



export type CreateCrawlerPageSelectorsBody = Pick<CrawlerPageSelectorSchema, 'value' | 'valueType' | "targetType" | 'dataKey' | 'parentSelectorId'>;
export type CreateCrawlerPageSelectorsParams = {
  shouldRemoveExistingSelectors?: boolean;
}
export type CreateCrawlerPageSelectorsPayload = [
  crawlerId: CrawlerSchema['id'],
  body: CreateCrawlerPageSelectorsBody[],
  params?: CreateCrawlerPageSelectorsParams
]
export type CreateCrawlerPageSelectorsResponse = CrawlerPageSelectorSchema[];
export type CreateCrawlerPageSelectors = (...args: CreateCrawlerPageSelectorsPayload) => Promise<CreateCrawlerPageSelectorsResponse>;