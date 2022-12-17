import type * as chartJsTypes from "chart.js";

export type PieChartProps = {
  data?: chartJsTypes.ChartData<'doughnut', number[], string>;
}