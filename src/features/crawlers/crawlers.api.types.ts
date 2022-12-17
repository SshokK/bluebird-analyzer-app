import type {CRAWLER_STATUSES} from "./crawlers.constants";
import type {RegionSchema} from "../regions/regions.api.types";

export type CrawlerSchema = {
  id: number;
  name: string;
  targetUrl: string;
  status: CRAWLER_STATUSES;
  RegionId: RegionSchema['id'];
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export type FetchCrawlerPayload = [crawlerId: CrawlerSchema['id']]
export type FetchCrawlerResponse = CrawlerSchema;
export type FetchCrawlers = (...args: FetchCrawlerPayload) => Promise<FetchCrawlerResponse>;


export type CrawlersByNameAggregation = {
  status: CRAWLER_STATUSES;
  count: number
}


export type FetchCrawlersByNamesAggregationPayload = []
export type FetchCrawlersByNamesAggregationResponse = CrawlersByNameAggregation[];
export type FetchCrawlersByNamesAggregation = (...args: FetchCrawlersByNamesAggregationPayload) => Promise<FetchCrawlersByNamesAggregationResponse>;