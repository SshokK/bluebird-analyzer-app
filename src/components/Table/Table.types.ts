import type {FC, ReactElement } from "react";
import type {COLUMN_TYPES, COLUMN_DATA_TYPES } from "./Table.constants";
import type {CellContext} from "@tanstack/table-core/build/lib/core/cell";

export type TableColumn = {
  key: string;
  type: COLUMN_TYPES;
  dataType?: COLUMN_DATA_TYPES;
  title?: ReactElement | string;
  CellComponent?: FC<CellContext<object, unknown>>
}

export type TableRow = {
  [key: TableColumn['key']]: unknown;
}

export type TableProps = {
  isLoading?: boolean;
  columns?: TableColumn[];
  rows?: TableRow[];
  areRowsSelectable?: boolean;
  onSelectedRowsChange?: (rows: TableRow[]) => void;
}