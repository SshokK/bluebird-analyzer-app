import type {FloatingEdgeProps} from "../FloatingEdge.types";
import type { Node } from 'reactflow';

import {getBezierPath, useReactFlow, useStore} from "reactflow";
import {useCallback, useMemo} from "react";
import {getEdgeParams} from "../FloatingEdge.helpers";

export const useFloatingEdgeData = ({ source, target }: Pick<FloatingEdgeProps, 'source' | 'target'>) => {
  const flowchartInstance = useReactFlow();

  const sourceNode = useStore(useCallback((store) => store.nodeInternals.get(source), [source]));
  const targetNode = useStore(useCallback((store) => store.nodeInternals.get(target), [target]));

  const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(sourceNode as Node, targetNode as Node);

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: tx,
    targetY: ty,
  });

  const formattedData = useMemo(() => ({
    flowchartInstance,
    edgePath,
    labelX,
    labelY
  }), [edgePath, flowchartInstance, labelX, labelY])

  return {
    formattedData
  }
}