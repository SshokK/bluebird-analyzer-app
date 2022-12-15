import type {ReactNode} from "react";
import type {FLOWCHART_DIRECTION} from "./FlowChart.constants";

export type FlowChartNodeData = {
  key: string;
  content?: ReactNode;
  maxWidth?: number;
  maxHeight?: number;
  className?: string;
  toConnections?: FlowChartNodeData['key'][]
  fromConnections?: FlowChartNodeData['key'][]
}

export type FlowChartProps = {
  nodes?: FlowChartNodeData[];
  direction?: FLOWCHART_DIRECTION;
  onSelectedNodesChange?: (nodes: FlowChartNodeData[]) => void;
  onNodesDelete?: (deletedNodes: FlowChartNodeData[]) => void;
  areElementsSelectable?: boolean;
  areElementsDeletable?: boolean;
  shouldFitIntoViewOnElementsChange?: boolean;
}