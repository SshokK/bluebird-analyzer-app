import type {FlowChartHandlers} from "./useFlowChartHandlers.types";
import type {FlowChartProps} from "../FlowChart.types";
import type {FlowChartData} from "./useFlowChartData.types";

import {useCallback} from "react";
import * as helpers from "./useFlowChartHandlers.helpers";

export const useFlowChartHandlers = ({
  props,
  localState,
  localActions,
  flowchartData,
  flowchartActions
}: {
  props: FlowChartProps;
  localState: FlowChartData['localState'];
  localActions: FlowChartData['localActions'];
  flowchartData: FlowChartData['flowchartData']
  flowchartActions: FlowChartData['flowchartActions'];
}): FlowChartHandlers => {
  const { onSelectedNodesChange, onNodesDelete, onEdgesDelete, onConnect } = props;

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

  const handleEdgesDelete: FlowChartHandlers['handleEdgesDelete'] = useCallback((edges) => {
    onEdgesDelete?.(edges)
  }, [onEdgesDelete]);

  const handleConnect: FlowChartHandlers['handleConnect'] = useCallback(({
    source,
    target
  }) => {
    const nodeA = props.nodes?.find?.(node => String(node.key) === String(source))
    const nodeB = props.nodes?.find?.(node => String(node.key) === String(target))

    if (nodeA && nodeB) {
      onConnect?.(
        nodeA,
        nodeB
      )
    }
  }, [onConnect, props.nodes]);

  const handleDataSet: FlowChartHandlers['handleDataSet'] = useCallback(() => {
    const nodes = helpers.formatNodes({ nodes: props.nodes, direction: props.direction });
    const edges = helpers.formatEdges({ nodes: props.nodes });

    flowchartActions.setNodes((currentNodes) => {
      const newNodes = nodes.filter(node => !currentNodes.find(currentNode => currentNode.id === node.id));
      const existingNodes = nodes.filter(node => currentNodes.find(currentNode => currentNode.id === node.id));

      const layoutedElements = helpers.getLayoutedElements(
        newNodes,
        edges,
        props.direction
      );

      return [
        ...layoutedElements.nodes,
        ...existingNodes.map(node => ({
          ...node,
          position: currentNodes.find(currentNode => currentNode.id === node.id)?.position ?? node.position
        }))
      ]
    })
    flowchartActions.setEdges(edges)
  }, [flowchartActions, props.direction, props.nodes]);

  const handleFlowchartAutoresize: FlowChartHandlers['handleFlowchartAutoresize'] = () => {
    const { nodes, edges } = helpers.getLayoutedElements(
      flowchartData.nodes,
      flowchartData.edges,
      props.direction
    )

    localState.flowchartInstance?.setNodes?.(
      nodes
    )
    localState.flowchartInstance?.setEdges?.(
      edges
    )
  }

  return {
    handleInit,
    handleSelectionChange,
    handleNodesDelete,
    handleEdgesDelete,
    handleConnect,
    handleDataSet,
    handleFlowchartAutoresize
  }
}