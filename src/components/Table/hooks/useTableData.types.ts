import type * as helpers from "./useTableData.helpers";
import type {Dispatch, SetStateAction} from "react";
import type {SortingState} from "@tanstack/react-table";

export type TableLocalState = {
  rowSelection: Record<number, boolean>;
  pagination: {
    pageSize: number;
    pageIndex: number;
  },
  sorting: SortingState;
}

export type TableLocalActions = {
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