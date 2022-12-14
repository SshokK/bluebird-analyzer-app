import type {FC} from "react";
import type {SelectorsProps} from "./Selectors.types";

import React from "react";
import {Actions, FlowChart, FLOWCHART_DIRECTION} from "components";
import {
  useSelectorsActions, useSelectorsData,
  useSelectorsHandlers,
  useSelectorsLifecycle,
  useSelectorsMutations,
  useSelectorsQueries
} from "./hooks";
import './selectors.scss';

export const Selectors: FC<SelectorsProps> = ({
  crawlerId,
  isEditable,
  onIsLoadingChange,
  onCrawlerNameChange
}) => {
  const { localState, localActions, formattedData } = useSelectorsData({
    isEditable
  });

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
    }
  });

  const handlers = useSelectorsHandlers({
    props: {
      onIsLoadingChange,
      onCrawlerNameChange
    },
    queries,
    localState,
    localActions
  });

  const actions = useSelectorsActions({
    localState
  });

  useSelectorsLifecycle({
    onIsLoadingChange: handlers.handleIsLoadingChange,
    onCrawlerNameChange: handlers.handleCrawlerNameChange
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
        nodes={formattedData.selectorNodes}
        direction={FLOWCHART_DIRECTION.LEFT_TO_RIGHT}
        onSelectedNodesChange={handlers.handleSelectedNodesChange}
        onNodesDelete={handlers.handleSelectedNodesDelete}
        areElementsSelectable={isEditable}
      />
    </div>
  )
}