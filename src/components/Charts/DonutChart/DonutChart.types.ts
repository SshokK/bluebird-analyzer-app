export type DonutChartSeriesData = {
  label: string;
  value: number;
  color?: string;
}

export type DonutChartSeries = {
  label: string;
  data: DonutChartSeriesData[];
}

export type DonutChartProps = {
  series?: DonutChartSeries[];
  noDataMessage?: string;
}