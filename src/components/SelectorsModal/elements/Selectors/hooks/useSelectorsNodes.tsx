import type {SelectorsData} from "./useSelectorsData.types";
import type {SelectorsProps} from "../Selectors.types";
import type {FlowChartNodeData} from "../../../../FlowChart";
import type {SelectorsHandlers} from "./useSelectorsHandlers.types";

import {useMemo} from "react";
import {SelectorNodeContent} from "../elements";
import {SELECTORS_FLOWCHART_NODE_MAX_HEIGHT, SELECTORS_FLOWCHART_NODE_MAX_WIDTH} from "../Selectors.constants";

export const useSelectorsNodes = ({
  props,
  localState,
  onSelectorChange
}: {
  props: Pick<SelectorsProps, 'isEditable'>;
  localState: SelectorsData['localState'];
  onSelectorChange: SelectorsHandlers['handleSelectorChange']
}): FlowChartNodeData[] => {
  return useMemo(() => {
    return localState.selectors.map(selector => {
      return {
        key: String(selector.id),
        content: (
          <SelectorNodeContent
            crawlerPageSelector={selector}
            isEditable={props.isEditable}
            onSelectorChange={onSelectorChange}
          />
        ),
        maxWidth: SELECTORS_FLOWCHART_NODE_MAX_WIDTH,
        maxHeight: SELECTORS_FLOWCHART_NODE_MAX_HEIGHT,
        className: "BB-selectors__node",
        toConnections: selector.parentSelectorId
          ? [String(selector.parentSelectorId)]
          : []
      }
    }) ?? []
  }, [localState.selectors, onSelectorChange, props.isEditable]);
}