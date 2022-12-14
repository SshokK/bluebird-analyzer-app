import type {SelectorsProps} from "../Selectors.types";
import type {SelectorsData} from "./useSelectorsData.types";

import {QUERY_KEYS} from "constants/queries.constants";

import * as crawlersApi from "features/crawlers/crawlers.api";
import * as crawlerPageSelectorsApi from "features/crawler-page-selectors/crawlerPageSelectors.api";

import {useQuery} from "@tanstack/react-query";

export const useSelectorsQueries = ({
  props,
  localState,
  localActions
}: {
  props: Pick<SelectorsProps, 'crawlerId'>;
  localState: SelectorsData['localState'];
  localActions: SelectorsData['localActions']
}) => {
  const fetchCrawler = useQuery({
    queryKey: [QUERY_KEYS.CRAWLERS],
    queryFn: () => crawlersApi.fetchCrawler(props.crawlerId),
  });

  const fetchCrawlerPageSelectors = useQuery({
    queryKey: [QUERY_KEYS.CRAWLER_PAGE_SELECTORS, {
      crawlerId: props.crawlerId
    }],
    queryFn: () => crawlerPageSelectorsApi.fetchCrawlerPageSelectors({
      crawlerId: props.crawlerId
    }),
    onSuccess: (response) => {
      localActions.setSelectors(response.results);
      localActions.setIsInitialFetch(false)
    },
    enabled: localState.isInitialFetch
  });

  return {
    fetchCrawler,
    fetchCrawlerPageSelectors
  }
}