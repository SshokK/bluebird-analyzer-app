import type {FC} from 'react'
import React, {cloneElement} from 'react';
import type {NodeProps} from "./Node.types";
import type {FlowChartCustomNodeContentProps} from "../../FlowChart.types";
import classnames from 'classnames';
import {Handle, Position, useStore} from 'reactflow';
import {FLOWCHART_CLASSNAMES} from "../../FlowChart.constants";
import './node.scss';

export const Node: FC<NodeProps> = ({ id, data, selected }) => {
  const connectionNodeId = useStore((state) => state.connectionNodeId);

  const isTarget = Boolean(connectionNodeId && connectionNodeId !== id);

  return (
    <>
      <Handle
        type="source"
        position={data.isHorizontal ? Position.Left : Position.Top}
        className="BB-flow-chart-node__handle"
      />
      <Handle
        type="source"
        position={data.isHorizontal ? Position.Right : Position.Bottom}
        className="BB-flow-chart-node__handle"
      />
      <Handle
        type="target"
        position={Position.Right}
        isConnectable={isTarget}
        className={classnames("BB-flow-chart-node__handle", {
          "BB-flow-chart-node__handle--is-target": true,
        })}
      />
      <div
        className={classnames("BB-flow-chart-node", FLOWCHART_CLASSNAMES.NO_WHEEL, data.classNames?.container)}
        style={{
          maxHeight: data.maxHeight,
          maxWidth: data.maxWidth
        }}
      >
        <div
          className="BB-flow-chart-node__content"
        >
          {data.content && cloneElement<FlowChartCustomNodeContentProps>(data.content, {
            isSelected: selected
          })}
        </div>
      </div>
    </>
  )
}