import type {FlowChartProps} from "../FlowChart.types";
import type { Node, Edge } from 'reactflow';

import dagre from 'dagre';
import {MarkerType, Position} from 'reactflow';
import {FlowChartNode} from "../elements";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

export const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'TB') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);

    node.targetPosition = isHorizontal ? Position.Left : Position.Top;
    node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};

export const formatNodes = ({ nodes }: Pick<FlowChartProps, 'nodes'>): Node<unknown>[] => {
  return nodes?.map?.((node, i) => ({
    id: String(node.key || i),
    position: {
      x: 0,
      y: 0
    },
    data: {
      label: (
        <FlowChartNode>
          {node.content}
        </FlowChartNode>
      )
    }
  })) ?? []
}

export const formatEdges = ({ nodes }: Pick<FlowChartProps, 'nodes'>): Edge<unknown>[] => {
  return nodes?.flatMap?.(node => {
    return node.connections?.map?.(nodeKey => {
      return {
        id: `${node.key}-${nodeKey}`,
        source: node.key,
        target: nodeKey,
        type: 'smoothstep',
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
        },
      } as Edge
    }) ?? []
  }) ?? []
}