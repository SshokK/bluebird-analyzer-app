import type {FlowChartProps} from "../FlowChart.types";
import type {FlowChartData} from "./useFlowChartData.types";

import * as helpers from "./useFlowChartData.helpers";

import {useMemo} from "react";
import {getLayoutedElements} from "./useFlowChartData.helpers";

export const useFlowChartData = (props: Pick<FlowChartProps, 'nodes' | 'direction'>): FlowChartData => {
  const formattedData = useMemo(() => {
    const { nodes: initialNodes, edges: initialEdges } = getLayoutedElements(
      helpers.formatNodes({ nodes: props.nodes }),
      helpers.formatEdges({ nodes: props.nodes }),
      props.direction
    );

    return {
      initialNodes,
      initialEdges
    }
  }, [props.direction, props.nodes]);

  return {
    formattedData
  }
}