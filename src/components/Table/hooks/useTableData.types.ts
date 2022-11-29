import type * as helpers from "./useTableData.helpers";
import type {Dispatch, SetStateAction} from "react";
import type {SortingState} from "@tanstack/react-table";
import type {TableRow} from "../Table.types";

export type TableLocalState = {
  rows: TableRow[];
  totalCount: number;
  rowSelection: Record<number, boolean>;
  pagination: {
    pageSize: number;
    pageIndex: number;
  },
  sorting: SortingState;
}

export type TableLocalActions = {
  setRows: Dispatch<SetStateAction<TableLocalState['rows']>>;
  setTotalCount: Dispatch<SetStateAction<TableLocalState['totalCount']>>;
  setRowSelection: Dispatch<SetStateAction<TableLocalState['rowSelection']>>;
  setPagination: Dispatch<SetStateAction<TableLocalState['pagination']>>;
  setSorting: Dispatch<SetStateAction<TableLocalState['sorting']>>
}

export type TableFormattedData = {
  columns: ReturnType<typeof helpers.formatColumns>
}

export type TableData = {
  localState: TableLocalState;
  localActions: TableLocalActions;
  formattedData: TableFormattedData;
}