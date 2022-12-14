import type {FlowChartHandlers} from "./useFlowChartHandlers.types";

import {useEffect} from "react";

export const useFlowChartLifecycle = ({
  onLayoutChange
}: {
  onLayoutChange: FlowChartHandlers['handleLayoutChange']
}) => {
  useEffect(onLayoutChange, [onLayoutChange])
}