import type {ReactNode, MouseEvent } from "react";

export type IconButtonProps = {
  icon?: ReactNode;
  isDisabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  classNames?: {
    button?: string;
    icon?: string;
  }
}