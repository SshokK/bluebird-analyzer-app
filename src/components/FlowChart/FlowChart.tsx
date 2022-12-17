import type {FlowChartProps} from "./FlowChart.types";
import type {FC} from 'react';

import React from 'react';
import ReactFlow, {
  Controls,
  Background
} from 'reactflow';
import {FLOWCHART_EDGES, FLOWCHART_NODES} from "./FlowChart.constants";

import {useFlowChartActions, useFlowChartData, useFlowChartHandlers, useFlowChartLifecycle} from "./hooks";

import 'reactflow/dist/style.css';
import './flow-chart.scss';

import {Actions} from "../Actions";

export const FlowChart: FC<FlowChartProps> = (props) => {
  const {
    localState,
    localActions,
    flowchartData,
    flowchartActions
  } = useFlowChartData();

  const handlers = useFlowChartHandlers({
    props,
    localState,
    localActions,
    flowchartData,
    flowchartActions
  });

  const actions = useFlowChartActions({
    onAutoresize: handlers.handleFlowchartAutoresize
  })

  useFlowChartLifecycle({
    onDataSet: handlers.handleDataSet
  });

  return (
    <div className="BB-flow-chart">
      <ReactFlow
        fitView
        nodes={flowchartData.nodes}
        edges={flowchartData.edges}
        edgeTypes={FLOWCHART_EDGES}
        nodeTypes={FLOWCHART_NODES}
        elementsSelectable={props.areElementsSelectable}
        onInit={handlers.handleInit}
        onConnect={handlers.handleConnect}
        onEdgesDelete={handlers.handleEdgesDelete}
        onNodesDelete={handlers.handleNodesDelete}
        onNodesChange={flowchartActions.onNodesChange}
        onEdgesChange={flowchartActions.onEdgesChange}
        onSelectionChange={handlers.handleSelectionChange}
      >
        <div className="BB-flow-chart__controls-container">
          <div className="BB-flow-chart__controls-aligner">
            <Actions actions={actions} />
            <Controls />
          </div>
        </div>
        <Background />
      </ReactFlow>
    </div>
  );
}