import type * as helpers from "./useTableData.helpers";
import type {Dispatch, SetStateAction} from "react";
import type {TableRow} from "../Table.types";

export type TableLocalState = {
  rowSelection: Record<number, boolean>
}

export type TableLocalActions = {
  setRowSelection: Dispatch<SetStateAction<TableLocalState['rowSelection']>>
}

export type TableFormattedData = {
  columns: ReturnType<typeof helpers.formatColumns>
  rows: TableRow[]
}

export type TableData = {
  localState: TableLocalState;
  localActions: TableLocalActions;
  formattedData: TableFormattedData;
}