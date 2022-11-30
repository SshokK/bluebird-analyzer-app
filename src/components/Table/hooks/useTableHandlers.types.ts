import type {TableData} from "./useTableData.types";

export type TableHandlers = {
  handleRowSelectionChange: TableData['localActions']['setRowSelection'];
  handleSelectedRowKeysPropChange: () => void;
}