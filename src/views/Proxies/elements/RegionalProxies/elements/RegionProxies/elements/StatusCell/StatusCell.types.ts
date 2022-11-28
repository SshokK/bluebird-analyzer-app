import type {ComponentProps} from "react";
import type {TableColumn} from "components";

export type StatusCellProps = ComponentProps<Required<TableColumn>['CellComponent']>;