import type {ReactElement} from "react";
import type {FLOWCHART_DIRECTION} from "./FlowChart.constants";
import type {Edge} from "reactflow";

export type FlowChartNodeData = {
  key: string;
  content?: ReactElement;
  maxWidth?: number;
  maxHeight?: number;
  classNames?: {
    container?: string
  };
  toConnections?: FlowChartNodeData['key'][]
  fromConnections?: FlowChartNodeData['key'][]
}

export type FlowChartNodeAdditionalData = {
  isHorizontal: boolean;
}

export type FlowChartCustomNodeContentProps = {
  isSelected: boolean;
}

export type FlowChartProps = {
  nodes?: FlowChartNodeData[];
  direction?: FLOWCHART_DIRECTION;
  onSelectedNodesChange?: (nodes: FlowChartNodeData[]) => void;
  onNodesDelete?: (deletedNodes: FlowChartNodeData[]) => void;
  onEdgesDelete?: (deletedEdges: Edge[]) => void;
  onConnect?: (sourceNode: FlowChartNodeData, targetNode: FlowChartNodeData) => void;
  areElementsSelectable?: boolean;
  areElementsDeletable?: boolean;
}