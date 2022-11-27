import type {ReactNode} from "react";
import type {ICON_BUTTON_GROUP_ORIENTATIONS} from "./IconButtonGroup.constants";

export type IconButtonGroupProps = {
  children?: ReactNode;
  className?: string;
  orientation?: ICON_BUTTON_GROUP_ORIENTATIONS;
}