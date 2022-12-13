import type {ReactNode} from "react";
import type {FLOWCHART_DIRECTION} from "./FlowChart.constants";

export type FlowChartNode = {
  key: string;
  content?: ReactNode;
  width?: number;
  height?: number;
  toConnections?: FlowChartNode['key'][]
  fromConnections?: FlowChartNode['key'][]
}

export type FlowChartProps = {
  nodes?: FlowChartNode[];
  direction?: FLOWCHART_DIRECTION;
}