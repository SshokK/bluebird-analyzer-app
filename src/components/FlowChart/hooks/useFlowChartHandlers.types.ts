import type {ComponentProps} from "react";
import type ReactFlow from 'reactflow';

export type FlowChartHandlers = {
  handleInit: Required<ComponentProps<typeof ReactFlow>>['onInit'];
  handleSelectionChange: Required<ComponentProps<typeof ReactFlow>>['onSelectionChange'];
  handleConnect: Required<ComponentProps<typeof ReactFlow>>['onConnect'];
  handleNodesDelete: Required<ComponentProps<typeof ReactFlow>>['onNodesDelete'];
  handleEdgesDelete: Required<ComponentProps<typeof ReactFlow>>['onEdgesDelete'];
  handleDataSet: () => void;
  handleFlowchartAutoresize: () => void;
}