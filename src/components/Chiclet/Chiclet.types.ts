import type {ReactNode} from "react";

export type ChicletProps = {
  onClick?: () => void;
  onDelete?: () => void;
  isDisabled?: boolean;
  isSelected?: boolean;
  isDeletable?: boolean;
  children?: ReactNode;
  classNames?: {
    container?: string;
    button?: string;
    content?: string;
    deleteButton?: string;
  }
}