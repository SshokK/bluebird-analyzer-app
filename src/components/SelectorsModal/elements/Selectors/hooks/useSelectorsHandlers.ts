import type {SelectorsHandlers} from "./useSelectorsHandlers.types";
import type {SelectorsProps} from "../Selectors.types";
import type {SelectorsData} from "./useSelectorsData.types";

import {useCallback} from "react";
import {useSelectorsQueries} from "./useSelectorsQueries";

import {
  CRAWLER_PAGE_SELECTOR_TARGET_TYPES,
  CRAWLER_PAGE_SELECTOR_VALUE_TYPES
} from "features/crawler-page-selectors/crawlerPageSelectors.api.constants";
import {DATE_FORMATS} from "constants/global.constants";

import * as utils from "utils";

export const useSelectorsHandlers = ({
  props,
  queries,
  localState,
  localActions,
  formattedData
}: {
  props: Pick<SelectorsProps, 'crawlerId' | 'onCrawlerNameChange' | 'onIsLoadingChange' | 'onInvalidCrawlersChange' | 'onSelectorsChange'>
  queries: ReturnType<typeof useSelectorsQueries>;
  localState: SelectorsData['localState'];
  localActions: SelectorsData['localActions'];
  formattedData: SelectorsData['formattedData']
}): SelectorsHandlers => {
  const { onIsLoadingChange, onCrawlerNameChange, onInvalidCrawlersChange, onSelectorsChange } = props;

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

  const handleSelectorsChange: SelectorsHandlers['handleSelectorsChange'] = useCallback(() => {
    onSelectorsChange(localState.selectors)
  }, [localState.selectors, onSelectorsChange])

  const handleSelectedNodesDelete: SelectorsHandlers['handleSelectedNodesDelete'] = useCallback((nodes) => {
    localActions.setSelectors((selectors) => {
      return selectors.filter(selector => {
        return !nodes.find(node => String(node.key) === String(selector.id))
      })
    })
  }, [localActions]);

  const handleSelectedEdgesDelete: SelectorsHandlers['handleSelectedEdgesDelete'] = useCallback((deletedEdges) => {
    localActions.setSelectors((selectors) => {
      const targetSelectorIds = selectors.flatMap(selector => {
        const isTargetSelector = deletedEdges.find(edge => String(edge.target) === String(selector.id))
        if (isTargetSelector) return [selector.id];
        return []
      })

      return selectors.map(selector => {
        if (targetSelectorIds.includes(selector.id)) {
          return {
            ...selector,
            parentSelectorId: null
          }
        }

        return selector
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
        parentSelectorId: null,
        CrawlerId: props.crawlerId,
        createdAt: utils.formatDate({
          date: new Date(),
          format: DATE_FORMATS.DATE
        }),
        updatedAt: utils.formatDate({
          date: new Date(),
          format: DATE_FORMATS.DATE
        }),
        deletedAt: null
      }]
    })
  }, [localActions, props.crawlerId]);

  const handleNodesConnect: SelectorsHandlers['handleNodesConnect'] = useCallback((sourceNode, targetNode) => {
    localActions.setSelectors((selectors) => {
      const sourceSelector = selectors.find(selector => String(selector.id) === String(sourceNode.key));
      const targetSelector = selectors.find(selector => String(selector.id) === String(targetNode.key));

      if (sourceSelector && targetSelector) {
        const updatedSelectors = selectors.map(selector => {
          if (selector.id === targetSelector.id && targetSelector.parentSelectorId !== selector.id) {
            return {
              ...selector,
              parentSelectorId: sourceSelector.id
            }
          }

          return selector
        });

        const isLoop = updatedSelectors.every(selector => selector.parentSelectorId);

        if (isLoop) {
          return selectors;
        } else {
          return updatedSelectors
        }
      }

      return selectors
    })

  }, [localActions])

  const handleSelectorChange: SelectorsHandlers['handleSelectorChange'] = useCallback((crawlerPageSelector) => {
    localActions.setSelectors((selectors) => {
      return selectors.flatMap(selector => {
        if (selector.id === crawlerPageSelector.id) {
          return [crawlerPageSelector]
        }

        return [selector]
      })
    })
  }, [localActions]);

  return {
    handleIsLoadingChange,
    handleInvalidCrawlersChange,
    handleCrawlerNameChange,
    handleSelectorsChange,
    handleSelectedNodesChange,
    handleSelectedNodesDelete,
    handleSelectorCreation,
    handleSelectedEdgesDelete,
    handleNodesConnect,
    handleSelectorChange
  }
}