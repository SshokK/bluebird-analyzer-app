import type {SelectorsModalData} from "./useSelectorsModalData.types";
import type {SelectorsModalProps} from "../SelectorsModal.types";

import {QUERY_KEYS} from "constants/queries.constants";

import * as crawlerPageSelectorsApi from "features/crawler-page-selectors/crawlerPageSelectors.api";

import {useMutation} from "@tanstack/react-query";

export const useSelectorsModalMutations = ({
  props,
  localState
}: {
  props: Pick<SelectorsModalProps, 'crawlerId'>;
  localState: SelectorsModalData['localState']
}) => {
  const createCrawlerPageSelectors = useMutation({
    mutationKey: [QUERY_KEYS.CRAWLER_PAGE_SELECTORS],
    mutationFn: () => crawlerPageSelectorsApi.createCrawlerPageSelectors(
      localState.selectors,
      {
        crawlerId: props.crawlerId,
        shouldRemoveExistingSelectors: true
      }
    )
  });

  return {
    createCrawlerPageSelectors
  }
}