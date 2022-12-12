import type {FC} from 'react'
import type {FlowChartNodeProps} from "./FlowChartNode.types";

import React from 'react';
import './flow-chart-node.scss';

export const FlowChartNode: FC<FlowChartNodeProps> = ({ children }) => {
  return (
    <div className="BB-flow-chart-node">
      {children}
    </div>
  )
}