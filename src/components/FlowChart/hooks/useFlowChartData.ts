import type {FlowChartProps} from "../FlowChart.types";
import type {FlowChartData} from "./useFlowChartData.types";

import * as helpers from "./useFlowChartData.helpers";

import {useMemo} from "react";
import {getLayoutedElements} from "./useFlowChartData.helpers";
import {useEdgesState, useNodesState} from "reactflow";

export const useFlowChartData = (props: Pick<FlowChartProps, 'nodes' | 'direction'>): FlowChartData => {
  const formattedData = useMemo(() => {
    const { nodes, edges } = getLayoutedElements(
      helpers.formatNodes({ nodes: props.nodes }),
      helpers.formatEdges({ nodes: props.nodes }),
      props.direction
    );

    return {
      nodes,
      edges
    }
  }, [props.direction, props.nodes]);

  const [nodes, setNodes, onNodesChange] = useNodesState(formattedData.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(formattedData.edges);

  const flowchartData: FlowChartData['flowchartData'] = useMemo(() => ({
    nodes,
    edges
  }), [edges, nodes])

  const flowchartActions: FlowChartData['flowchartActions'] = useMemo(() => ({
    setNodes,
    setEdges,
    onNodesChange,
    onEdgesChange
  }), [onEdgesChange, onNodesChange, setEdges, setNodes]);

  return {
    formattedData,
    flowchartData,
    flowchartActions
  }
}