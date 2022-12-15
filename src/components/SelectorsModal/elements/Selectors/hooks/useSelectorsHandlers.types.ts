import type {FlowChartProps} from "../../../../FlowChart";
import type {CrawlerPageSelectorForChart} from "../Selectors.types";

export type SelectorsHandlers = {
  handleIsLoadingChange: () => void;
  handleInvalidCrawlersChange: () => void;
  handleCrawlerNameChange: () => void;
  handleSelectedNodesChange: Required<FlowChartProps>['onSelectedNodesChange'];
  handleSelectedNodesDelete: Required<FlowChartProps>['onNodesDelete'];
  handleSelectorCreation: () => void;
  handleSelectorChange: (crawlerPageSelector: CrawlerPageSelectorForChart) => void;
}