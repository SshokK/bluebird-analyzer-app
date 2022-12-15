import type {ComponentProps} from "react";
import type ReactFlow from 'reactflow';

export type FlowChartHandlers = {
  handleInit: Required<ComponentProps<typeof ReactFlow>>['onInit'];
  handleSelectionChange: Required<ComponentProps<typeof ReactFlow>>['onSelectionChange'];
  handleNodesDelete: Required<ComponentProps<typeof ReactFlow>>['onNodesDelete'];
  handleLayoutChange: () => void;
}