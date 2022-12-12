import type {Edge, Node} from 'reactflow';

export type FlowChartFormattedData = {
  initialNodes: Node<unknown>[];
  initialEdges: Edge<unknown>[];
}

export type FlowChartData = {
  formattedData: FlowChartFormattedData;
}