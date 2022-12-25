import type{TableProps} from "../../Table";

import {QUERY_KEYS} from "../../../constants/queries.constants";

import * as crawlerLogsApi from "features/crawler-logs/crawlerLogs.api";
import * as crawlerLogsApiSelectors from "features/crawler-logs/crawlerLogs.api.selectors";

export const useCrawlerLogsTableQueryOptions = (): Required<TableProps>['queryOptions'] => {
  return {
    queryKey: [QUERY_KEYS.CRAWLER_LOGS],
    queryFn: crawlerLogsApi.fetchCrawlerLogs,
    select: crawlerLogsApiSelectors.getCrawlerLogsForTable
  }
}