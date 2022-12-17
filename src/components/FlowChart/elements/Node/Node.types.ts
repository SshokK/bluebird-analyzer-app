import type * as reactflowTypes from 'reactflow';
import type {FlowChartNodeAdditionalData, FlowChartNodeData} from "../../FlowChart.types";

export type NodeProps = reactflowTypes.NodeProps<reactflowTypes.NodeProps['data'] & FlowChartNodeData & FlowChartNodeAdditionalData>