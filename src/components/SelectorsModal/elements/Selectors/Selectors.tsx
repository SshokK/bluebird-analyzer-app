import type {FC} from "react";
import type {SelectorsProps} from "./Selectors.types";

import React from "react";
import {Actions, FlowChart, FLOWCHART_DIRECTION } from "components";
import {
  useSelectorsActions,
  useSelectorsData,
  useSelectorsHandlers,
  useSelectorsLifecycle,
  useSelectorsMutations,
  useSelectorsNodes,
  useSelectorsQueries
} from "./hooks";
import './selectors.scss';

export const Selectors: FC<SelectorsProps> = ({
  crawlerId,
  isEditable,
  onIsLoadingChange,
  onCrawlerNameChange,
  onInvalidCrawlersChange
}) => {
  const { localState, localActions, formattedData } = useSelectorsData();

  const queries = useSelectorsQueries({
    props: {
      crawlerId
    },
    localState,
    localActions
  });

  const mutations = useSelectorsMutations({
    props: {
      crawlerId
    },
    localState
  });

  const handlers = useSelectorsHandlers({
    props: {
      onIsLoadingChange,
      onCrawlerNameChange,
      onInvalidCrawlersChange
    },
    queries,
    localState,
    localActions,
    formattedData
  });

  const actions = useSelectorsActions({
    props: {
      isEditable
    },
    onCreateSelector: handlers.handleSelectorCreation
  });

  const nodes = useSelectorsNodes({
    props: {
      isEditable
    },
    localState,
    onSelectorChange: handlers.handleSelectorChange
  })

  useSelectorsLifecycle({
    onIsLoadingChange: handlers.handleIsLoadingChange,
    onCrawlerNameChange: handlers.handleCrawlerNameChange,
    onInvalidCrawlersChange: handlers.handleInvalidCrawlersChange
  });

  return (
    <div className="BB-selectors__chart-container">
      {isEditable && (
        <Actions
          actions={actions}
          classNames={{ container: 'BB-selectors__actions' }}
        />
      )}
      <FlowChart
        nodes={nodes}
        direction={FLOWCHART_DIRECTION.LEFT_TO_RIGHT}
        onSelectedNodesChange={handlers.handleSelectedNodesChange}
        onNodesDelete={handlers.handleSelectedNodesDelete}
        areElementsSelectable={isEditable}
      />
    </div>
  )
}