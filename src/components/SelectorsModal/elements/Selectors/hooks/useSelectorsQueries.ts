import type {SelectorsProps} from "../Selectors.types";

import {QUERY_KEYS} from "constants/queries.constants";

import * as crawlersApi from "features/crawlers/crawlers.api";
import * as crawlerPageSelectorsApi from "features/crawler-page-selectors/crawlerPageSelectors.api";
import * as helpers from "./useSelectorsQueries.helpers";

import {useQuery} from "@tanstack/react-query";

export const useSelectorsQueries = ({
  props
}: {
  props: Pick<SelectorsProps, 'crawlerId'>
}) => {
  const fetchCrawler = useQuery({
    queryKey: [QUERY_KEYS.CRAWLERS],
    queryFn: () => crawlersApi.fetchCrawler(props.crawlerId),
  });

  const fetchCrawlerPageSelectors = useQuery({
    queryKey: [QUERY_KEYS.CRAWLER_PAGE_SELECTORS, {
      crawlerId: props.crawlerId
    }],
    queryFn: () => crawlerPageSelectorsApi.fetchCrawlerPageSelectors(props.crawlerId),
    select: helpers.formatCrawlerPageSelectorsForFlowChart
  });

  return {
    fetchCrawler,
    fetchCrawlerPageSelectors
  }
}