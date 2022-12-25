import type {DonutChartProps, TableQuerySelectorReturn } from "components";
import type {ReactNode} from "react";

import * as api from "./crawlerErrors.api";
import * as utils from "utils";

import {CRAWLER_ERROR_TYPES} from "./crawlerErrors.api.constants";
import {ERRORS_TABLE_COLUMN_KEYS} from "../../components/EventCrawlerErrors/elements/ErrorsList/ErrorsList.constants";
import STYLE_VARIABLES from 'styles';


const CRAWLER_ERROR_TYPE_COLOR: Record<CRAWLER_ERROR_TYPES, string> = {
  [CRAWLER_ERROR_TYPES.INVALID_SELECTOR]: STYLE_VARIABLES.CHART_COLOR_2,
  [CRAWLER_ERROR_TYPES.TIMEOUT]: STYLE_VARIABLES.CHART_COLOR_11,
  [CRAWLER_ERROR_TYPES.INVALID_VALUES]: STYLE_VARIABLES.CHART_COLOR_3,
  [CRAWLER_ERROR_TYPES.NO_ROOT_SELECTORS]: STYLE_VARIABLES.CHART_COLOR_10,
  [CRAWLER_ERROR_TYPES.NO_EXISTING_PROXIES]: STYLE_VARIABLES.CHART_COLOR_9,
  [CRAWLER_ERROR_TYPES.UNKNOWN]: STYLE_VARIABLES.CHART_COLOR_12,
}

export const getCrawlerErrorAggregationForDonutChart = (
  response: Awaited<ReturnType<typeof api.fetchCrawlerErrorByTypeAggregation>>
): DonutChartProps['series'] => {
  if (!response.length) {
    return []
  }

  return [{
    label: '# of errors',
    data: response.map(aggregation => ({
      label: utils.convertCamelCaseToWords(aggregation.type),
      value: aggregation.count,
      color: CRAWLER_ERROR_TYPE_COLOR[aggregation.type]
    }))
  }]
}

export const getCrawlerErrorsForEventCrawlerErrorsTable = (
  response: Awaited<ReturnType<typeof api.fetchCrawlerErrors>>
): TableQuerySelectorReturn => {
  return {
    rows: response.results.map((crawlerError): Record<ERRORS_TABLE_COLUMN_KEYS, ReactNode> => {
      return {
        [ERRORS_TABLE_COLUMN_KEYS.COLOR]: CRAWLER_ERROR_TYPE_COLOR[crawlerError.type],
        [ERRORS_TABLE_COLUMN_KEYS.MESSAGE]: crawlerError.message,
        [ERRORS_TABLE_COLUMN_KEYS.CREATED_AT]: crawlerError.createdAt
      }
    }) ?? [],
    totalCount: response.totalCount
  }
}