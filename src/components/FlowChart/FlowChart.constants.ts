import {FloatingEdge} from "./elements";

export enum FLOWCHART_DIRECTION {
  LEFT_TO_RIGHT = 'LR',
  TOP_TO_BOTTOM = 'TB'
}

export enum FLOWCHART_CUSTOM_EDGE_TYPES {
  FLOATING = 'floating'
}

export const FLOWCHART_EDGES = {
  [FLOWCHART_CUSTOM_EDGE_TYPES.FLOATING]: FloatingEdge
}

export const DEFAULT_FLOWCHART_NODE_MAX_WIDTH = 180;
export const DEFAULT_FLOWCHART_NODE_MAX_HEIGHT = 40;

export enum FLOWCHART_CLASSNAMES {
  NO_WHEEL = 'nowheel'
}