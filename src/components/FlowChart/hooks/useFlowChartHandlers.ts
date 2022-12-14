import type {FlowChartHandlers} from "./useFlowChartHandlers.types";
import type {FlowChartProps} from "../FlowChart.types";
import type {FlowChartData} from "./useFlowChartData.types";

import {useCallback} from "react";

export const useFlowChartHandlers = ({
  props,
  formattedData,
  flowchartActions
}: {
  props: Pick<FlowChartProps, 'nodes' | "onSelectedNodesChange" | 'onNodesDelete'>;
  formattedData: FlowChartData['formattedData'];
  flowchartActions: FlowChartData['flowchartActions'];
}): FlowChartHandlers => {
  const { onSelectedNodesChange, onNodesDelete } = props;

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
    flowchartActions.setEdges(formattedData.edges)
  }, [flowchartActions, formattedData.edges, formattedData.nodes])

  return {
    handleSelectionChange,
    handleNodesDelete,
    handleLayoutChange
  }
}