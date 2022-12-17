import type {FlowChartHandlers} from "./useFlowChartHandlers.types";

import {useEffect} from "react";

export const useFlowChartLifecycle = ({
  onDataSet
}: {
  onDataSet: FlowChartHandlers['handleDataSet']
}) => {
  useEffect(onDataSet, [onDataSet])
}