import type {ReactNode} from "react";
import type {DATA_SELECT_DATA_TYPES} from "components";

export type ListItemProps = {
  label?: ReactNode;
  value?: unknown;
  dataKey?: DATA_SELECT_DATA_TYPES
  isEditable?: boolean;
  shouldShowTooltip?: boolean;
}