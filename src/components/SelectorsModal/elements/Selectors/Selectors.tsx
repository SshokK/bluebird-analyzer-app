import type {FC} from "react";
import type {SelectorsProps} from "./Selectors.types";

import React from "react";
import {FlowChart, FLOWCHART_DIRECTION} from "../../../FlowChart";
import {
  useSelectorsActions,
  useSelectorsHandlers,
  useSelectorsLifecycle,
  useSelectorsMutations,
  useSelectorsQueries
} from "./hooks";
import './selectors.scss';
import {Actions} from "../../../Actions";

export const Selectors: FC<SelectorsProps> = ({
  crawlerId,
  isEditable,
  onIsLoadingChange,
  onCrawlerNameChange
}) => {
  const queries = useSelectorsQueries({
    props: {
      crawlerId
    }
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
    queries
  });

  const actions = useSelectorsActions();

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
        nodes={queries.fetchCrawlerPageSelectors.data}
        direction={FLOWCHART_DIRECTION.LEFT_TO_RIGHT}
      />
    </div>
  )
}