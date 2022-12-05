import type {ReactNode, MouseEvent} from "react";
import type {CHICLET_SIZES} from "./Chiclet.constants";

export type ChicletProps = {
  size?: CHICLET_SIZES;
  icon?: ReactNode;
  onClick?: () => void;
  onDelete?: (e: MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
  isSelected?: boolean;
  isFullWidth?: boolean;
  isDeletable?: boolean;
  isClickable?: boolean;
  children?: ReactNode;
  classNames?: {
    container?: string;
    button?: string;
    content?: string;
    deleteButton?: string;
  }
}