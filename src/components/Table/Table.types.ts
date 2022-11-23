import type {ReactElement, ReactNode} from "react";

export type TableColumn = {
  key: string;
  title?: ReactElement | string;
}

export type TableRow = {
  [key: TableColumn['key']]: ReactNode;
}

export type TableProps = {
  isLoading?: boolean;
  columns?: TableColumn[];
  rows?: TableRow[];
}