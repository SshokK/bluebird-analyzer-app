import type {PieChartProps} from "./PieChart.types";
import type {FC} from 'react';

import React from 'react';

import * as reactChartJs from 'react-chartjs-2';
import * as chartJs from 'chart.js';

chartJs.Chart.register(
  chartJs.ArcElement,
  chartJs.Tooltip,
  chartJs.Legend,
  // @ts-ignore
  chartJs.Colors
);

export const PieChart: FC<PieChartProps> = ({ data }) => {
  return (
    <reactChartJs.Doughnut
      data={data ?? { datasets: [] }}
    />
  );
}
