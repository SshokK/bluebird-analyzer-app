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
  crawlerId: CrawlerSchema['id']
]
export type FetchCrawlerPageSelectorsResponse = {
  results: CrawlerPageSelectorSchema[];
  totalCount: number;
};
export type FetchCrawlerPageSelectors = (...args: FetchCrawlerPageSelectorsPayload) => Promise<FetchCrawlerPageSelectorsResponse>;



export type CreateCrawlerPageSelectorsBody = {
  value: CrawlerPageSelectorSchema["value"];
  valueType: CrawlerPageSelectorSchema["valueType"];
  targetType: CrawlerPageSelectorSchema["targetType"];
  dataKey: CrawlerPageSelectorSchema["dataKey"];
  children?: CreateCrawlerPageSelectorsBody;
}
export type CreateCrawlerPageSelectorsPayload = [
  crawlerId: CrawlerSchema['id'],
  body: CreateCrawlerPageSelectorsBody[]
]
export type CreateCrawlerPageSelectorsResponse = CrawlerPageSelectorSchema[];
export type CreateCrawlerPageSelectors = (...args: CreateCrawlerPageSelectorsPayload) => Promise<CreateCrawlerPageSelectorsResponse>;