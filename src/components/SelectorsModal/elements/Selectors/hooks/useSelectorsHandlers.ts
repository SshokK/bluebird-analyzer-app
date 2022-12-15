import type {SelectorsHandlers} from "./useSelectorsHandlers.types";
import type {SelectorsProps} from "../Selectors.types";
import type {SelectorsData} from "./useSelectorsData.types";

import {useCallback} from "react";
import {useSelectorsQueries} from "./useSelectorsQueries";

import {
  CRAWLER_PAGE_SELECTOR_TARGET_TYPES,
  CRAWLER_PAGE_SELECTOR_VALUE_TYPES
} from "features/crawler-page-selectors/crawlerPageSelectors.api.constants";

import * as utils from "utils";

export const useSelectorsHandlers = ({
  props,
  queries,
  localState,
  localActions,
  formattedData
}: {
  props: Pick<SelectorsProps, 'onCrawlerNameChange' | 'onIsLoadingChange' | 'onInvalidCrawlersChange'>
  queries: ReturnType<typeof useSelectorsQueries>;
  localState: SelectorsData['localState'];
  localActions: SelectorsData['localActions'];
  formattedData: SelectorsData['formattedData']
}): SelectorsHandlers => {
  const { onIsLoadingChange, onCrawlerNameChange, onInvalidCrawlersChange } = props;

  const handleIsLoadingChange: SelectorsHandlers['handleIsLoadingChange'] = useCallback(() => {
    onIsLoadingChange(
      queries.fetchCrawler.isLoading ||
      queries.fetchCrawlerPageSelectors.isLoading
    )
  }, [onIsLoadingChange, queries.fetchCrawler.isLoading, queries.fetchCrawlerPageSelectors.isLoading]);

  const handleInvalidCrawlersChange: SelectorsHandlers['handleInvalidCrawlersChange'] = useCallback(() => {
    onInvalidCrawlersChange(formattedData.areAllSelectorsValid)
  }, [formattedData.areAllSelectorsValid, onInvalidCrawlersChange])

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
        return !nodes.find(node => String(node.key) === String(selector.id))
      })
    })
  }, [localActions]);

  const handleSelectorCreation: SelectorsHandlers['handleSelectorCreation'] = useCallback(() => {
    localActions.setSelectors((selectors) => {
      return [...selectors, {
        id: utils.getRandomId(),
        value: '',
        valueType: CRAWLER_PAGE_SELECTOR_VALUE_TYPES.CSS_SELECTOR,
        targetType: CRAWLER_PAGE_SELECTOR_TARGET_TYPES.CONTAINER,
        dataKey: null,
        parentSelectorId: null
      }]
    })
  }, [localActions]);

  const handleSelectorChange: SelectorsHandlers['handleSelectorChange'] = useCallback((crawlerPageSelector) => {
    localActions.setSelectors((selectors) => {
      return selectors.flatMap(selector => {
        if (selector.id === crawlerPageSelector.id) {
          return [crawlerPageSelector]
        }

        return [selector]
      })
    })
  }, [localActions])

  return {
    handleIsLoadingChange,
    handleInvalidCrawlersChange,
    handleCrawlerNameChange,
    handleSelectedNodesChange,
    handleSelectedNodesDelete,
    handleSelectorCreation,
    handleSelectorChange
  }
}