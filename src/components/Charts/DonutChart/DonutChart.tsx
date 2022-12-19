import type {DonutChartProps} from "./DonutChart.types";
import type {FC} from 'react';

import React, {useMemo} from 'react';
import {ChartContainer} from "../ChartContainer";

import STYLE_VARIABLES from 'styles';
import {DEFAULT_OPTIONS} from "./DonutChart.constants";

import * as reactChartJs from 'react-chartjs-2';
import * as chartJs from 'chart.js';

chartJs.Chart.register(
  chartJs.ArcElement,
  chartJs.Tooltip,
  chartJs.Legend
);

export const DonutChart: FC<DonutChartProps> = ({ series, noDataMessage }) => {
  const data = useMemo(() => {
    return {
      labels: series?.flatMap?.(item => item.data.map(dataItem => dataItem.label)),
      datasets: series?.map?.(item => ({
        label: item.label,
        backgroundColor: item.data.map(dataItem => dataItem.color),
        borderColor: STYLE_VARIABLES.PRIMARY_COLOR_2,
        hoverBorderColor: STYLE_VARIABLES.PRIMARY_COLOR_2,
        hoverBorderWidth: 8,
        hoverBackgroundColor: item.data.map(dataItem => dataItem.color),
        data: item.data.map(dataItem => dataItem.value)
      })) ?? []
    }
  }, [series])

  return (
    <ChartContainer
      shouldShowNoDataMessage={!data.datasets?.length}
      noDataMessage={noDataMessage}
    >
      <reactChartJs.Doughnut
        data={data}
        options={DEFAULT_OPTIONS}
      />
    </ChartContainer>
  );
}
