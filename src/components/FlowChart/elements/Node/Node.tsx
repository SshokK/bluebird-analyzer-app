import type {FC} from 'react'
import type {NodeProps} from "./Node.types";

import React from 'react';
import './node.scss';

export const Node: FC<NodeProps> = ({ maxHeight, maxWidth, children }) => {
  return (
    <div
      className="BB-flow-chart-node"
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