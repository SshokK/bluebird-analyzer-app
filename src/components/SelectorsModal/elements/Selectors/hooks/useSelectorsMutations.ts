import type {SelectorsData} from "./useSelectorsData.types";
import type {SelectorsProps} from "../Selectors.types";

import {useMutation} from "@tanstack/react-query";
import {QUERY_KEYS} from "constants/queries.constants";
import * as crawlerPageSelectorsApi from "features/crawler-page-selectors/crawlerPageSelectors.api";

export const useSelectorsMutations = ({
  props,
  localState
}: {
  props: Pick<SelectorsProps, 'crawlerId'>;
  localState: SelectorsData['localState']
}) => {
  const createCrawlerPageSelectors = useMutation({
    mutationKey: [QUERY_KEYS.CRAWLER_PAGE_SELECTORS],
    mutationFn: () => crawlerPageSelectorsApi.createCrawlerPageSelectors(
      props.crawlerId,
      localState.selectors,
      {
        shouldRemoveExistingSelectors: true
      }
    )
  });

  return {
    createCrawlerPageSelectors
  }
}