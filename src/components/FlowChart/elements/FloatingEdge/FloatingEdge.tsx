import type {FloatingEdgeProps} from "./FloatingEdge.types";
import type {FC} from 'react';

import React from 'react';
import {EdgeLabelRenderer} from 'reactflow';

import classnames from 'classnames';
import {IconClose} from "../../../Icons";
import {ICON_BUTTON_SHAPES, ICON_BUTTON_SIZES, ICON_BUTTON_TYPES, IconButton} from "../../../IconButton";
import {useFloatingEdgeData, useFloatingEdgeHandlers} from "./hooks";
import './floating-edge.scss';

export const FloatingEdge: FC<FloatingEdgeProps> = ({ id, source, target, markerEnd, style }) => {
  const { formattedData } = useFloatingEdgeData({
    source,
    target
  });

  const handlers = useFloatingEdgeHandlers({
    props: {
      id
    },
    formattedData
  })

  return (
    <>
      <path
        id={id}
        className="react-flow__edge-path"
        d={formattedData.edgePath}
        markerEnd={markerEnd}
        style={style}
      />
      <EdgeLabelRenderer>
        <IconButton
          icon={<IconClose />}
          size={ICON_BUTTON_SIZES.SMALL}
          type={ICON_BUTTON_TYPES.SECONDARY}
          shape={ICON_BUTTON_SHAPES.CIRCLE}
          onClick={handlers.handleEdgeDelete}
          classNames={{
            button: classnames('BB-floating-edge__button', "nodrag", "nopan")
          }}
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${formattedData.labelX}px,${formattedData.labelY}px)`,
          }}
        />
      </EdgeLabelRenderer>
    </>
  );
}