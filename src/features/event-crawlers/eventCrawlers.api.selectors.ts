import type * as api from "./eventCrawlers.api";
import type { TableQuerySelectorReturn, DonutChartProps} from "components";
import type {ReactNode} from "react";

import { EVENT_CRAWLERS_TABLE_COLUMN_KEYS } from "views/EventCrawlers/elements/BookmakersCrawlers/elements/EventCrawlers/EventCrawlers.constants";
import {CRAWLER_STATUSES} from "./eventCrawlers.api.constants";
import STYLE_VARIABLES from 'styles';

const CRAWLER_STATUS_COLOR: Record<CRAWLER_STATUSES, string> = {
  [CRAWLER_STATUSES.WAITING]: STYLE_VARIABLES.STATUS_COLOR_WARNING,
  [CRAWLER_STATUSES.ACTIVE]: STYLE_VARIABLES.STATUS_COLOR_SUCCESS,
  [CRAWLER_STATUSES.INACTIVE]: STYLE_VARIABLES.STATUS_COLOR_INACTIVE,
  [CRAWLER_STATUSES.FAILED]: STYLE_VARIABLES.STATUS_COLOR_ERROR
}

export const getEventCrawlersForTable = (response: Awaited<ReturnType<typeof api.fetchEventCrawlers>>): TableQuerySelectorReturn => {
  return {
    rows: response.results.map((eventCrawler): Record<Exclude<EVENT_CRAWLERS_TABLE_COLUMN_KEYS, EVENT_CRAWLERS_TABLE_COLUMN_KEYS.ACTIONS>, ReactNode> => ({
      [EVENT_CRAWLERS_TABLE_COLUMN_KEYS.ID]: eventCrawler.id,
      [EVENT_CRAWLERS_TABLE_COLUMN_KEYS.SPORT_NAME]: eventCrawler.Sport.name,
      [EVENT_CRAWLERS_TABLE_COLUMN_KEYS.NAME]: eventCrawler.Crawler.name,
      [EVENT_CRAWLERS_TABLE_COLUMN_KEYS.TARGET_URL]: eventCrawler.Crawler.targetUrl,
      [EVENT_CRAWLERS_TABLE_COLUMN_KEYS.STATUS]: eventCrawler.Crawler.status,
      [EVENT_CRAWLERS_TABLE_COLUMN_KEYS.CRAWLER_ID]: eventCrawler.Crawler.id,
      [EVENT_CRAWLERS_TABLE_COLUMN_KEYS.CREATED_AT]: eventCrawler.createdAt,
      [EVENT_CRAWLERS_TABLE_COLUMN_KEYS.UPDATED_AT]: eventCrawler.updatedAt,
      [EVENT_CRAWLERS_TABLE_COLUMN_KEYS.DELETED_AT]: eventCrawler.deletedAt,
    })),
    totalCount: response.totalCount
  }
}

export const getCrawlersByNameAggregationForDonutChart = (
  response: Awaited<ReturnType<typeof api.fetchEventCrawlerAggregations>>
): DonutChartProps['series'] => {
  if (!response.length) {
    return []
  }

  return [{
    label: '# of Crawlers',
    data: response.map(aggregation => ({
      label: aggregation.status.toUpperCase(),
      value: aggregation.count,
      color: CRAWLER_STATUS_COLOR[aggregation.status]
    }))
  }]
}