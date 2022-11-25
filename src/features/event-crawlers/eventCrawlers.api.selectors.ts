import type {FetchEventCrawlers} from "./eventCrawlers.api.types";
import type {TableProps} from "../../components";
import type {ReactNode} from "react";

import { EVENT_CRAWLERS_TABLE_COLUMN_KEYS } from "views/AdminSports/elements/Crawlers/Crawlers.constants";

export const formatEventCrawlersForTable = (response: Awaited<ReturnType<FetchEventCrawlers>>): Required<TableProps>['rows'] => {
  return response.results.map((eventCrawler): Record<Exclude<EVENT_CRAWLERS_TABLE_COLUMN_KEYS, EVENT_CRAWLERS_TABLE_COLUMN_KEYS.ACTIONS>, ReactNode> => ({
    [EVENT_CRAWLERS_TABLE_COLUMN_KEYS.ID]: eventCrawler.id,
    [EVENT_CRAWLERS_TABLE_COLUMN_KEYS.BOOKMAKER_NAME]: eventCrawler.Bookmaker?.name,
    [EVENT_CRAWLERS_TABLE_COLUMN_KEYS.NAME]: eventCrawler.Crawler.name,
    [EVENT_CRAWLERS_TABLE_COLUMN_KEYS.TARGET_URL]: eventCrawler.Crawler.targetUrl,
    [EVENT_CRAWLERS_TABLE_COLUMN_KEYS.STATUS]: eventCrawler.Crawler.status,
    [EVENT_CRAWLERS_TABLE_COLUMN_KEYS.CREATED_AT]: eventCrawler.createdAt,
    [EVENT_CRAWLERS_TABLE_COLUMN_KEYS.UPDATED_AT]: eventCrawler.updatedAt,
    [EVENT_CRAWLERS_TABLE_COLUMN_KEYS.DELETED_AT]: eventCrawler.deletedAt,
  }))
}