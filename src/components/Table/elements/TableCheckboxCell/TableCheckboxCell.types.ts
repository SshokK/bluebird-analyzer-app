import type {ComponentProps} from "react";
import type {TableColumn} from "../../Table.types";

export type TableCheckboxCellProps = ComponentProps<Required<TableColumn>['CellComponent']>;