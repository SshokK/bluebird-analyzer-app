import type * as helpers from "./useTableData.helpers";

export type TableFormattedData = {
  columns: ReturnType<typeof helpers.formatColumns>
  rows: ReadonlyArray<object>
}

export type TableData = {
  formattedData: TableFormattedData;
}