import type {FlowChartHandlers} from "./useFlowChartHandlers.types";
import type {FlowChartProps} from "../FlowChart.types";
import type {FlowChartData} from "./useFlowChartData.types";

import {useCallback} from "react";

export const useFlowChartHandlers = ({
  props,
  localState,
  localActions,
  formattedData,
  flowchartActions
}: {
  props: FlowChartProps;
  localState: FlowChartData['localState'];
  localActions: FlowChartData['localActions'];
  formattedData: FlowChartData['formattedData'];
  flowchartActions: FlowChartData['flowchartActions'];
}): FlowChartHandlers => {
  const { onSelectedNodesChange, onNodesDelete } = props;

  const handleInit: FlowChartHandlers['handleInit'] = useCallback((flowchartInstance) => {
    localActions.setFlowchartInstance(flowchartInstance);
  }, [localActions])

  const handleSelectionChange: FlowChartHandlers['handleSelectionChange'] = useCallback(({
    nodes
  }) => {
    onSelectedNodesChange?.(props.nodes?.filter?.(node => {
      return nodes.find(chartNode => chartNode.id === node.key)
    }) ?? [])
  }, [onSelectedNodesChange, props.nodes]);

  const handleNodesDelete: FlowChartHandlers['handleNodesDelete'] = useCallback((nodes) => {
    onNodesDelete?.(props.nodes?.filter?.(node => {
      return nodes.find(chartNode => chartNode.id === node.key)
    }) ?? [])
  }, [onNodesDelete, props.nodes]);

  const handleLayoutChange: FlowChartHandlers['handleLayoutChange'] = useCallback(() => {
    flowchartActions.setNodes(formattedData.nodes);
    flowchartActions.setEdges(formattedData.edges);

    if (props.shouldFitIntoViewOnElementsChange) {
      localState.flowchartInstance?.fitView?.({
        minZoom: -100
      });
    }
  }, [flowchartActions, formattedData.edges, formattedData.nodes, localState.flowchartInstance, props.shouldFitIntoViewOnElementsChange])

  return {
    handleInit,
    handleSelectionChange,
    handleNodesDelete,
    handleLayoutChange
  }
}