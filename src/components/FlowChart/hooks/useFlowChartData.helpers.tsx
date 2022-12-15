import type {FlowChartProps} from "../FlowChart.types";
import type { Node, Edge } from 'reactflow';
import type {FlowChartNodeData} from "../FlowChart.types";

import dagre from 'dagre';
import {MarkerType, Position} from 'reactflow';
import * as components from "../elements";

import {
  DEFAULT_FLOWCHART_NODE_MAX_WIDTH,
  DEFAULT_FLOWCHART_NODE_MAX_HEIGHT,
  FLOWCHART_CUSTOM_EDGE_TYPES,
  FLOWCHART_DIRECTION
} from "../FlowChart.constants";

export const getLayoutedElements = (nodes: Node<FlowChartNodeData>[], edges: Edge[], direction = FLOWCHART_DIRECTION.TOP_TO_BOTTOM) => {
  const dagreGraph = new dagre.graphlib.Graph();

  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const isHorizontal = direction === FLOWCHART_DIRECTION.LEFT_TO_RIGHT;
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      width: node.data?.maxWidth ?? DEFAULT_FLOWCHART_NODE_MAX_WIDTH,
      height: node.data?.maxHeight ?? DEFAULT_FLOWCHART_NODE_MAX_HEIGHT
    });
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
      x: nodeWithPosition.x - (node.data?.maxWidth ?? DEFAULT_FLOWCHART_NODE_MAX_WIDTH) / 2,
      y: nodeWithPosition.y - (node.data?.maxHeight ?? DEFAULT_FLOWCHART_NODE_MAX_HEIGHT) / 2,
    };

    return node;
  });

  return { nodes, edges };
};

export const formatNodes = ({ nodes }: Pick<FlowChartProps, 'nodes'>): Node<FlowChartNodeData>[] => {
  return nodes?.map?.((node, i) => ({
    id: String(node.key || i),
    position: {
      x: 0,
      y: 0
    },
    data: {
      ...node,
      label: (
        <components.Node
          maxHeight={node.maxHeight}
          maxWidth={node.maxWidth}
          className={node.className}
        >
          {node.content}
        </components.Node>
      )
    }
  })) ?? []
}

export const formatEdges = ({ nodes }: Pick<FlowChartProps, 'nodes'>): Edge<unknown>[] => {
  return nodes?.flatMap?.(node => {
    const edgeConfig: Partial<Edge> = {
      type: FLOWCHART_CUSTOM_EDGE_TYPES.FLOATING,
      animated: true,
      markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20
      },
    }

    const toEdges = node.toConnections?.map?.(nodeKey => {
      return {
        id: `${nodeKey}-${node.key}`,
        source: nodeKey,
        target: node.key ,
        ...edgeConfig
      } as Edge
    }) ?? []

    const fromEdges = node.fromConnections?.map?.(nodeKey => {
      return {
        id: `${node.key}-${nodeKey}`,
        source: node.key,
        target: nodeKey,
        ...edgeConfig
      } as Edge
    }) ?? []

    return [
      ...toEdges,
      ...fromEdges
    ]
  }) ?? []
}