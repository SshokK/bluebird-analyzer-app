import type {CRAWLER_ERROR_TYPES, CRAWLER_ERROR_AGGREGATION_TYPES} from "./crawlerErrors.api.constants";
import type {CrawlerSchema} from "../crawlers/crawlers.api.types";
import type {EventCrawlerSchema} from "../event-crawlers/eventCrawlers.api.types";
import type {SORT_ORDERS} from "constants/global.constants";
import {ListRequestParams, ListResponse} from "../../types/global.types";

export type CrawlerErrorSchema = {
  id: number;
  message: string;
  type: CRAWLER_ERROR_TYPES;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  CrawlerId: CrawlerSchema["id"];
}


export type FetchCrawlerErrorsPayload = [
  params: ListRequestParams<{
    type?: CRAWLER_ERROR_TYPES;
    crawlerId?: CrawlerSchema['id'];
    eventCrawlerIds?: EventCrawlerSchema['id'][];
    createdFrom?: string;
    createdTo?: string;
    showDeleted?: boolean;
  }, true>
];
export type FetchCrawlerErrorsResponse = ListResponse<CrawlerErrorSchema>;
export type FetchCrawlerErrors = (...args: FetchCrawlerErrorsPayload) => Promise<FetchCrawlerErrorsResponse>;


export type CrawlerErrorByTypeAggregation = {
  type: CRAWLER_ERROR_TYPES;
  count: number;
}

export type FetchCrawlerErrorByTypeAggregationPayload = [params: {
  aggregateBy: CRAWLER_ERROR_AGGREGATION_TYPES;
  eventCrawlerId?: EventCrawlerSchema['id'][];
}];
export type FetchCrawlerErrorByTypeAggregationResponse = CrawlerErrorByTypeAggregation[];
export type FetchCrawlerErrorByTypeAggregation = (...args: FetchCrawlerErrorByTypeAggregationPayload) => Promise<FetchCrawlerErrorByTypeAggregationResponse>;