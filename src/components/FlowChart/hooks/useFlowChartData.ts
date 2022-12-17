import type {FlowChartData} from "./useFlowChartData.types";

import {useMemo, useState} from "react";
import {useEdgesState, useNodesState} from "reactflow";

export const useFlowChartData = (): FlowChartData => {
  const [flowchartInstance, setFlowchartInstance] = useState<
    FlowChartData['localState']['flowchartInstance']
  >(null);

  const localState: FlowChartData['localState'] = {
    flowchartInstance,
  }

  const localActions: FlowChartData['localActions'] = useMemo(() => ({
    setFlowchartInstance
  }), []);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

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
    localState,
    localActions,
    flowchartData,
    flowchartActions
  }
}