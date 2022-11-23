import type {ReactNode} from "react";

export type ChicletProps = {
  label?: ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  isDeletable?: boolean;
  classNames?: {
    button?: string;
  }
}