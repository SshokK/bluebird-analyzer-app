import type {FC, ReactElement} from "react";
import type {COLUMN_TYPES, COLUMN_DATA_TYPES, TABLE_COLUMN_WIDTHS } from "./Table.constants";
import type {CellContext} from "@tanstack/table-core/build/lib/core/cell";
import type {ActionsProps} from "../Actions";
import type {UseQueryOptions} from "@tanstack/react-query/src/types";
import type {SORT_ORDERS} from "../../constants/global.constants";

export type TableColumn = {
  key: string;
  type: COLUMN_TYPES;
  width?: TABLE_COLUMN_WIDTHS;
  dataType?: COLUMN_DATA_TYPES;
  title?: ReactElement | string;
  CellComponent?: FC<CellContext<object, unknown>>;
  isSortable?: boolean;
  isInitialSortColumn?: boolean;
  initialSortOrder?: SORT_ORDERS
}

export type TableColumnMeta = TableColumn & {
  isCheckbox?: boolean;
}

export type TableRow = {
  [key: TableColumn['key']]: unknown;
}

export type TableQuerySelectorReturn = {
  rows: TableRow[];
  totalCount: number;
}

export type TableQueryFnReturn = any;
export type TableQueryFn = (params: {
  limit: number;
  offset: number;
  sortField?: string;
  sortOrder?: SORT_ORDERS;
}) => Promise<TableQueryFnReturn>


export type TableQueryOptions = Omit<UseQueryOptions<Awaited<ReturnType<TableQueryFn>>, Error, TableQuerySelectorReturn>, 'queryFn'> & {
  queryFn: TableQueryFn
};

export type TableProps = {
  isLoading?: boolean;
  isAnimated?: boolean;
  animationDelay?: number;
  columns?: TableColumn[];
  areRowsSelectable?: boolean;
  rowId?: unknown;
  limit?: number;
  selectedRowKeys?: unknown[];
  onSelectedRowsChange?: <T extends any[] = any[]>(rowKeys: T) => void;
  queryOptions?: TableQueryOptions;
  queryParams?: Record<string, unknown>;
  isFullWidth?: boolean;
  noDataMessage?: string;
  actions?: ActionsProps['actions'];
}