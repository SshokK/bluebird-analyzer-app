import type {FlowChartProps} from "components/index";
import type {CrawlerPageSelectorSchema} from "features/crawler-page-selectors/crawlerPageSelectors.api.types";

import {SELECTORS_FLOWCHART_NODE_HEIGHT, SELECTORS_FLOWCHART_NODE_WIDTH} from "components/index";
import {SelectorNodeContent} from "../elements";

export const formatSelectorsForFlowChart = ({
  selectors,
  isEditable
}: {
  selectors: Partial<CrawlerPageSelectorSchema>[];
  isEditable: boolean
}): Required<FlowChartProps>['nodes'] => {
  return selectors.map(selector => {
    return {
      key: String(selector.id),
      content: (
        <SelectorNodeContent
          crawlerPageSelector={selector}
          isEditable={isEditable}
        />
      ),
      width: SELECTORS_FLOWCHART_NODE_WIDTH,
      height: SELECTORS_FLOWCHART_NODE_HEIGHT,
      toConnections: selector.parentSelectorId
        ? [String(selector.parentSelectorId)]
        : []
    }
  }) ?? []
}