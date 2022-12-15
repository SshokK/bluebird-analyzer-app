import type {FlowChartProps} from "./FlowChart.types";
import type {FC} from 'react';

import React from 'react';
import ReactFlow, {
  Controls,
  Background
} from 'reactflow';
import { FLOWCHART_EDGES} from "./FlowChart.constants";

import {useFlowChartData, useFlowChartHandlers, useFlowChartLifecycle} from "./hooks";

import 'reactflow/dist/style.css';
import './flow-chart.scss';

export const FlowChart: FC<FlowChartProps> = (props) => {
  const {
    localState,
    localActions,
    formattedData,
    flowchartData,
    flowchartActions
  } = useFlowChartData(props);

  const handlers = useFlowChartHandlers({
    props,
    localState,
    localActions,
    formattedData,
    flowchartActions
  });

  useFlowChartLifecycle({
    onLayoutChange: handlers.handleLayoutChange
  })

  return (
    <div className="BB-flow-chart">
      <ReactFlow
        fitView
        nodes={flowchartData.nodes}
        edges={flowchartData.edges}
        edgeTypes={FLOWCHART_EDGES}
        elementsSelectable={props.areElementsSelectable}
        onInit={handlers.handleInit}
        onNodesDelete={handlers.handleNodesDelete}
        onNodesChange={flowchartActions.onNodesChange}
        onEdgesChange={flowchartActions.onEdgesChange}
        onSelectionChange={handlers.handleSelectionChange}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}