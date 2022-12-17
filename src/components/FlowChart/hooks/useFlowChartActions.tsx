import type {ActionsProps} from "../../Actions";
import type {FlowChartHandlers} from "./useFlowChartHandlers.types";

import {FLOWCHART_ACTIONS} from "../FlowChart.constants";
import {IconLayout} from "../../Icons";

export const useFlowChartActions = ({
  onAutoresize
}: {
  onAutoresize: FlowChartHandlers['handleFlowchartAutoresize']
}): Required<ActionsProps>['actions'] => {
  return {
    [FLOWCHART_ACTIONS.AUTOLAYOUT]: {
      icon: <IconLayout />,
      onClick: onAutoresize
    }
  }
}