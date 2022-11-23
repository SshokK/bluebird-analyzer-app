import type {ReactNode, MouseEvent} from "react";
import type {BUTTON_TYPES} from "./Button.constants";
import type {BUTTON_FORM_ROLES} from "./Button.constants";

export type ButtonProps = {
  type?: BUTTON_TYPES;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  isDisabled?: boolean;
  formRole?: BUTTON_FORM_ROLES;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  classNames?: {
    button?: string;
    startIcon?: string;
    endIcon?: string;
  }
}