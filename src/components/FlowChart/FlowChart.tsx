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
  const { formattedData, flowchartData, flowchartActions } = useFlowChartData(props);

  const handlers = useFlowChartHandlers({
    props,
    formattedData,
    flowchartActions
  });

  useFlowChartLifecycle({
    onLayoutChange: handlers.handleLayoutChange
  })

  return (
    <div className="BB-flow-chart">
      <ReactFlow
        nodes={flowchartData.nodes}
        edges={flowchartData.edges}
        onNodesChange={flowchartActions.onNodesChange}
        onEdgesChange={flowchartActions.onEdgesChange}
        fitView
        edgeTypes={FLOWCHART_EDGES}
        onSelectionChange={handlers.handleSelectionChange}
        onNodesDelete={handlers.handleNodesDelete}
        elementsSelectable={props.areElementsSelectable}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}