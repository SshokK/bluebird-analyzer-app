import type {FlowChartProps} from "./FlowChart.types";
import type {FC} from 'react';

import React from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';

import {useFlowChartData} from "./hooks";

import 'reactflow/dist/style.css';
import './flow-chart.scss';

export const FlowChart: FC<FlowChartProps> = (props) => {
  const { formattedData } = useFlowChartData(props);

  const [nodes, setNodes, onNodesChange] = useNodesState(formattedData.initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(formattedData.initialEdges);


  return (
    <div className="BB-flow-chart">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}