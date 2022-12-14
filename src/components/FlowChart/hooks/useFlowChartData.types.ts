import type {Edge, Node} from 'reactflow';
import type {FlowChartNode} from "../FlowChart.types";
import type {Dispatch, SetStateAction} from "react";
import type {useEdgesState, useNodesState} from "reactflow";

export type FlowChartFormattedData = {
  nodes: Node<FlowChartNode>[];
  edges: Edge<unknown>[];
}

export type FlowChartFlowchartData = {
  nodes: Node<FlowChartNode>[];
  edges: Edge<unknown>[]
}

export type FlowChartFlowchartActions = {
  setNodes: Dispatch<SetStateAction<FlowChartFlowchartData['nodes']>>
  setEdges: Dispatch<SetStateAction<FlowChartFlowchartData['edges']>>;
  onNodesChange: ReturnType<typeof useNodesState>[2];
  onEdgesChange: ReturnType<typeof useEdgesState>[2];
}

export type FlowChartData = {
  formattedData: FlowChartFormattedData;
  flowchartData: FlowChartFlowchartData;
  flowchartActions: FlowChartFlowchartActions
}