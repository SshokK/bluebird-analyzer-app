import type {SelectorsHandlers} from "./useSelectorsHandlers.types";
import type {SelectorsProps} from "../Selectors.types";
import type {SelectorsData} from "./useSelectorsData.types";

import {useCallback} from "react";
import {useSelectorsQueries} from "./useSelectorsQueries";

export const useSelectorsHandlers = ({
  props,
  queries,
  localState,
  localActions
}: {
  props: Pick<SelectorsProps, 'onCrawlerNameChange' | 'onIsLoadingChange'>
  queries: ReturnType<typeof useSelectorsQueries>;
  localState: SelectorsData['localState'];
  localActions: SelectorsData['localActions']
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
  }, [onCrawlerNameChange, queries.fetchCrawler.data?.name]);

  const handleSelectedNodesChange: SelectorsHandlers['handleSelectedNodesChange'] = useCallback((nodes) => {
    localActions.setSelectedSelectors(localState.selectors.filter(selector => {
      return nodes.find(node => Number(node.key) === selector.id)
    }))
  }, [localActions, localState.selectors]);

  const handleSelectedNodesDelete: SelectorsHandlers['handleSelectedNodesDelete'] = useCallback((nodes) => {
    localActions.setSelectors((selectors) => {
      return selectors.filter(selector => {
        return !nodes.find(node => Number(node.key) === selector.id)
      })
    })
  }, [localActions]);

  return {
    handleIsLoadingChange,
    handleCrawlerNameChange,
    handleSelectedNodesChange,
    handleSelectedNodesDelete
  }
}