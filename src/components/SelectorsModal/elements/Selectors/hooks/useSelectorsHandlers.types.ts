import type {FlowChartProps} from "../../../../FlowChart";
import type {CrawlerPageSelector} from "features/crawler-page-selectors/crawlerPageSelectors.types";

export type SelectorsHandlers = {
  handleIsLoadingChange: () => void;
  handleInvalidCrawlersChange: () => void;
  handleCrawlerNameChange: () => void;
  handleSelectedNodesChange: Required<FlowChartProps>['onSelectedNodesChange'];
  handleSelectedNodesDelete: Required<FlowChartProps>['onNodesDelete'];
  handleSelectedEdgesDelete: Required<FlowChartProps>['onEdgesDelete'];
  handleSelectorCreation: () => void;
  handleSelectorsChange: () => void;
  handleNodesConnect: Required<FlowChartProps>['onConnect'];
  handleSelectorChange: (crawlerPageSelector: CrawlerPageSelector) => void;
}