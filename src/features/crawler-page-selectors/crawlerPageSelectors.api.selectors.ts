import type * as api from "./crawlerPageSelectors.api";
import type {FlowChartProps} from "components";

export const formatCrawlerPageSelectorsForFlowChart = (
  response: Awaited<ReturnType<typeof api.fetchCrawlerPageSelectors>>
): Required<FlowChartProps>['nodes'] => {
  return response?.results?.map?.(selector => {
    return {
      key: String(selector.id),
      content: selector.value,
      connections: selector.parentSelectorId
        ? [String(selector.parentSelectorId)]
        : []
    }
  }) ?? []
}