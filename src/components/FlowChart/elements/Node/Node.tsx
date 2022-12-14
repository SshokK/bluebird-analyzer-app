import type {FC} from 'react'
import type {NodeProps} from "./Node.types";

import React from 'react';
import classnames from 'classnames';
import {FLOWCHART_CLASSNAMES} from "../../FlowChart.constants";
import './node.scss';

export const Node: FC<NodeProps> = ({ maxHeight, maxWidth, children }) => {
  return (
    <div
      className={classnames("BB-flow-chart-node", FLOWCHART_CLASSNAMES.NO_WHEEL)}
      style={{
        maxHeight: maxHeight,
        maxWidth: maxWidth
      }}
    >
      <div
        className="BB-flow-chart-node__content"
      >
        {children}
      </div>
    </div>
  )
}