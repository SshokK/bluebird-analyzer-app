import type {ReactNode} from "react";
import type {FLOWCHART_DIRECTION} from "./FlowChart.constants";

export type FlowChartNode = {
  key: string;
  content?: ReactNode;
  connections?: FlowChartNode['key'][]
}

export type FlowChartProps = {
  nodes?: FlowChartNode[];
  direction?: FLOWCHART_DIRECTION;
}