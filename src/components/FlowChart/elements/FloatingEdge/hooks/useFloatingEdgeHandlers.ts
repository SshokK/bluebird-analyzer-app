import type {FloatingEdgeProps} from "../FloatingEdge.types";
import type {FloatingEdgeHandlers} from "./useFloatingEdgeHandlers.types";

import {useFloatingEdgeData} from "./useFloatingEdgeData";

export const useFloatingEdgeHandlers = ({ props, formattedData }: {
  props: Pick<FloatingEdgeProps, 'id'>
  formattedData: ReturnType<typeof useFloatingEdgeData>['formattedData']
}): FloatingEdgeHandlers => {
  const handleEdgeDelete = () => {
    formattedData.flowchartInstance.deleteElements({
      edges: [{
        id: props.id
      }]
    })
  }

  return {
    handleEdgeDelete
  }
}