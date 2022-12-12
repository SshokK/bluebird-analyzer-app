import type {SelectorsModalProps} from "../SelectorsModal.types";

import {QUERY_KEYS} from "constants/queries.constants";

import * as crawlersApi from "features/crawlers/crawlers.api";
import * as crawlerPageSelectorsApi from "features/crawler-page-selectors/crawlerPageSelectors.api";
import * as crawlerPageSelectorsApiSelectors from "features/crawler-page-selectors/crawlerPageSelectors.api.selectors";

import {useQuery} from "@tanstack/react-query";

export const useSelectorsModalQueries = ({
  props
}: {
  props: Pick<SelectorsModalProps, 'crawlerId' | 'isOpen'>
}) => {
  const fetchCrawler = useQuery({
    queryKey: [QUERY_KEYS.CRAWLERS],
    queryFn: () => crawlersApi.fetchCrawler(props.crawlerId),
    enabled: props.isOpen
  });

  const fetchCrawlerPageSelectors = useQuery({
    queryKey: [QUERY_KEYS.CRAWLER_PAGE_SELECTORS, {
      crawlerId: props.crawlerId
    }],
    queryFn: () => crawlerPageSelectorsApi.fetchCrawlerPageSelectors(props.crawlerId),
    enabled: props.isOpen,
    select: crawlerPageSelectorsApiSelectors.formatCrawlerPageSelectorsForFlowChart
  });

  return {
    fetchCrawler,
    fetchCrawlerPageSelectors
  }
}