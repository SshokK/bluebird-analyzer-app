import type {TableColumn} from "../Table.types";
import type {Column as ReactTableColumn } from "react-table";

export const formatColumns = (columns: TableColumn[]): ReadonlyArray<ReactTableColumn<object>> => {
  return columns.map(column => ({
    accessor: column.key,
    Header: column.title
  }))
}