import type {ReactNode, MouseEvent } from "react";
import type {ICON_BUTTON_TYPES, ICON_BUTTON_SIZES} from "./IconButton.constants";
import type {ICON_BUTTON_SHAPES} from "./IconButton.constants";

export type IconButtonProps = {
  type?: ICON_BUTTON_TYPES;
  size?: ICON_BUTTON_SIZES;
  shape?: ICON_BUTTON_SHAPES;
  icon?: ReactNode;
  isDisabled?: boolean;
  isPressed?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  classNames?: {
    button?: string;
    icon?: string;
  }

  /**
   * Rest props
   */
  [key: string]: unknown;
}