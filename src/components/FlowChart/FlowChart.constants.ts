import {FloatingEdge, Node } from "./elements";

export enum FLOWCHART_DIRECTION {
  LEFT_TO_RIGHT = 'LR',
  TOP_TO_BOTTOM = 'TB'
}

export enum FLOWCHART_CUSTOM_EDGE_TYPES {
  FLOATING = 'floating'
}

export enum FLOWCHART_CUSTOM_NODE_TYPES {
  NODE = 'node'
}

export const FLOWCHART_EDGES = {
  [FLOWCHART_CUSTOM_EDGE_TYPES.FLOATING]: FloatingEdge
}

export const FLOWCHART_NODES = {
  [FLOWCHART_CUSTOM_NODE_TYPES.NODE]: Node
}

export const DEFAULT_FLOWCHART_NODE_MAX_WIDTH = 180;
export const DEFAULT_FLOWCHART_NODE_MAX_HEIGHT = 40;

export enum FLOWCHART_CLASSNAMES {
  NO_WHEEL = 'nowheel'
}

export enum FLOWCHART_ACTIONS {
  AUTOLAYOUT = 'autolayout'
}