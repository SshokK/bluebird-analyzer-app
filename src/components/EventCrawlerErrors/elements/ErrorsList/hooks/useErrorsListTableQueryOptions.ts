import type {TableProps} from "../../../../Table";

import {QUERY_KEYS} from "constants/queries.constants";

import * as crawlerErrorsApi from "features/crawler-errors/crawlerErrors.api";
import * as crawlerErrorSelectorsApi from "features/crawler-errors/crawlerErrors.api.selectors";

export const useErrorsListTableQueryOptions = (): Required<TableProps>['queryOptions'] => {
  return {
    queryKey: [QUERY_KEYS.CRAWLER_ERRORS],
    queryFn: crawlerErrorsApi.fetchCrawlerErrors,
    select: crawlerErrorSelectorsApi.getCrawlerErrorsForEventCrawlerErrorsTable
  }
}