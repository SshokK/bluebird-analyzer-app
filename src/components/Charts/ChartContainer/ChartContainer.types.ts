import type {ReactNode} from "react";

export type ChartContainerProps = {
  shouldShowNoDataMessage?: boolean;
  noDataMessage?: string;
  children?: ReactNode;
}