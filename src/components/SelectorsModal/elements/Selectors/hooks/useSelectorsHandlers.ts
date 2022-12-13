import type {SelectorsHandlers} from "./useSelectorsHandlers.types";
import type {SelectorsProps} from "../Selectors.types";

import {useCallback} from "react";
import {useSelectorsQueries} from "./useSelectorsQueries";

export const useSelectorsHandlers = ({
  props,
  queries
}: {
  props: Pick<SelectorsProps, 'onCrawlerNameChange' | 'onIsLoadingChange'>
  queries: ReturnType<typeof useSelectorsQueries>
}): SelectorsHandlers => {
  const { onIsLoadingChange, onCrawlerNameChange } = props;

  const handleIsLoadingChange: SelectorsHandlers['handleIsLoadingChange'] = useCallback(() => {
    onIsLoadingChange(
      queries.fetchCrawler.isLoading ||
      queries.fetchCrawlerPageSelectors.isLoading
    )
  }, [onIsLoadingChange, queries.fetchCrawler.isLoading, queries.fetchCrawlerPageSelectors.isLoading])

  const handleCrawlerNameChange: SelectorsHandlers['handleCrawlerNameChange'] = useCallback(() => {
    onCrawlerNameChange(queries.fetchCrawler.data?.name ?? '');
  }, [onCrawlerNameChange, queries.fetchCrawler.data?.name])

  return {
    handleIsLoadingChange,
    handleCrawlerNameChange
  }
}