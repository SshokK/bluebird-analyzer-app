import type {TableColumn} from "../../../../../../Table.types";
import type {ReactNode} from "react";

export type TableCellContentProps = {
  column: TableColumn;
  cellValue: unknown;
  cellContent: ReactNode;
}