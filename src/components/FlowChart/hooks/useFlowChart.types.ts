import type {Node} from "reactflow";
import type {FlowChartData} from "./useFlowChartData.types";
import type {Dispatch, SetStateAction} from "react";

export type FlowChartOutputLocalState = {
  selectedNodeIds: Node<FlowChartData>['id'][]
}

export type FlowChartOutputLocalActions = {
  setSelectedNodeIds: Dispatch<SetStateAction<FlowChartOutputLocalState['selectedNodeIds']>>
}

export type FlowChartOutputData = {
  selectedNodeIds: FlowChartOutputLocalState['selectedNodeIds']
}