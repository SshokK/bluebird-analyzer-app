import type {Column} from "@tanstack/react-table";
import type {IconButtonProps} from "../../../../../IconButton";

export type SortButtonProps = {
  column: Column<object, unknown>;
  onClick?: IconButtonProps['onClick']
}