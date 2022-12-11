import type {TableColumnMeta} from "../../../../../../Table.types";
import type {ReactNode} from "react";

export type TableCellContentProps = {
  column: TableColumnMeta;
  cellValue: unknown;
  cellContent: ReactNode;
}