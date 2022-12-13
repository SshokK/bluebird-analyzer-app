import * as crawlerPageSelectorsApi from "features/crawler-page-selectors/crawlerPageSelectors.api";
import type {FlowChartProps} from "components/index";

import {SELECTORS_FLOWCHART_NODE_HEIGHT, SELECTORS_FLOWCHART_NODE_WIDTH} from "components/index";
import {SelectorNodeContent} from "../elements";

export const formatCrawlerPageSelectorsForFlowChart = (
  response: Awaited<ReturnType<typeof crawlerPageSelectorsApi.fetchCrawlerPageSelectors>>
): Required<FlowChartProps>['nodes'] => {
  return response?.results?.map?.(selector => {
    return {
      key: String(selector.id),
      content: (
        <SelectorNodeContent crawlerPageSelector={selector} />
      ),
      width: SELECTORS_FLOWCHART_NODE_WIDTH,
      height: SELECTORS_FLOWCHART_NODE_HEIGHT,
      toConnections: selector.parentSelectorId
        ? [String(selector.parentSelectorId)]
        : []
    }
  }) ?? []
}