import type {Edge, Node} from 'reactflow';
import type {FlowChartNodeData} from "../FlowChart.types";
import type {Dispatch, SetStateAction} from "react";
import type {useEdgesState, useNodesState} from "reactflow";
import type {ReactFlowInstance} from "@reactflow/core/dist/esm/types/instance";

export type FlowChartLocalState = {
  flowchartInstance: ReactFlowInstance<FlowChartNodeData, unknown> | null;
}

export type FlowChartLocalActions = {
  setFlowchartInstance: Dispatch<SetStateAction<FlowChartLocalState['flowchartInstance']>>;
}

export type FlowChartFlowchartData = {
  nodes: Node<FlowChartNodeData>[];
  edges: Edge<unknown>[]
}

export type FlowChartFlowchartActions = {
  setNodes: Dispatch<SetStateAction<FlowChartFlowchartData['nodes']>>
  setEdges: Dispatch<SetStateAction<FlowChartFlowchartData['edges']>>;
  onNodesChange: ReturnType<typeof useNodesState>[2];
  onEdgesChange: ReturnType<typeof useEdgesState>[2];
}

export type FlowChartData = {
  localState: FlowChartLocalState;
  localActions: FlowChartLocalActions;
  flowchartData: FlowChartFlowchartData;
  flowchartActions: FlowChartFlowchartActions
}