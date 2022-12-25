import type {ListResponse} from "../../types/global.types";
import type {CRAWLER_LOG_TYPES} from "./crawlerLogs.api.constants";
import type {CrawlerSchema} from "../crawlers/crawlers.api.types";
import type {ListRequestParams} from "../../types/global.types";
import type {EventCrawlerSchema} from "../event-crawlers/eventCrawlers.api.types";

export type CrawlerLogSchema = {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  type: CRAWLER_LOG_TYPES;
  message: string;
  imageUrl: string | null;
  CrawlerId: CrawlerSchema["id"];
}

export type FetchCrawlerLogs = (
  params: ListRequestParams<{
    type?: CRAWLER_LOG_TYPES;
    crawlerId?: CrawlerSchema['id'][] | CrawlerSchema['id'];
    eventCrawlerId?: EventCrawlerSchema['id'][] | EventCrawlerSchema['id'];
    createdFrom?: string;
    createdTo?: string;
  }, true>
) => Promise<ListResponse<CrawlerLogSchema>>