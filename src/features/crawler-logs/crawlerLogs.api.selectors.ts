import type {ReactNode} from "react";
import type {TableQuerySelectorReturn} from "../../components";

import * as api from "./crawlerLogs.api";

import STYLE_VARIABLES from "../../styles";
import {CRAWLER_LOG_TYPES} from "./crawlerLogs.api.constants";
import {CRAWLER_LOGS_TABLE_COLUMN_KEYS} from "components";

const CRAWLER_LOG_TYPE_COLOR: Record<CRAWLER_LOG_TYPES, string> = {
  [CRAWLER_LOG_TYPES.INFO]: STYLE_VARIABLES.STATUS_COLOR_INFO,
  [CRAWLER_LOG_TYPES.WARNING]: STYLE_VARIABLES.STATUS_COLOR_WARNING,
  [CRAWLER_LOG_TYPES.SUCCESS]: STYLE_VARIABLES.STATUS_COLOR_SUCCESS,
  [CRAWLER_LOG_TYPES.ERROR]: STYLE_VARIABLES.STATUS_COLOR_ERROR,
}


export const getCrawlerLogsForTable = (
  response: Awaited<ReturnType<typeof api.fetchCrawlerLogs>>
): TableQuerySelectorReturn => {
  return {
    rows: response.results.map((crawlerLog): Record<CRAWLER_LOGS_TABLE_COLUMN_KEYS, ReactNode> => {
      return {
        [CRAWLER_LOGS_TABLE_COLUMN_KEYS.COLOR]: CRAWLER_LOG_TYPE_COLOR[crawlerLog.type],
        [CRAWLER_LOGS_TABLE_COLUMN_KEYS.MESSAGE]: crawlerLog.message,
        [CRAWLER_LOGS_TABLE_COLUMN_KEYS.CREATED_AT]: crawlerLog.createdAt
      }
    }) ?? [],
    totalCount: response.totalCount
  }
}