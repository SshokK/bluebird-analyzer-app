import type {FlowChartProps} from "../../../../FlowChart";

export type SelectorsHandlers = {
  handleIsLoadingChange: () => void;
  handleCrawlerNameChange: () => void;
  handleSelectedNodesChange: Required<FlowChartProps>['onSelectedNodesChange'];
  handleSelectedNodesDelete: Required<FlowChartProps>['onNodesDelete'];
}