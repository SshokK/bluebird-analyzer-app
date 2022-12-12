import type {SelectorsModalProps} from "../SelectorsModal.types";

import {useMutation} from "@tanstack/react-query";
import {QUERY_KEYS} from "constants/queries.constants";
import * as crawlerPageSelectorsApi from "features/crawler-page-selectors/crawlerPageSelectors.api";

export const useSelectorsModalMutations = ({
  props
}: {
  props: Pick<SelectorsModalProps, 'crawlerId'>
}) => {
  const createCrawlerPageSelectors = useMutation({
    mutationKey: [QUERY_KEYS.CRAWLER_PAGE_SELECTORS],
    mutationFn: () => crawlerPageSelectorsApi.createCrawlerPageSelectors(
      props.crawlerId,
      []
    )
  });

  return {
    createCrawlerPageSelectors
  }
}