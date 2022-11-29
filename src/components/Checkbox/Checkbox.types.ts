import type {ReactNode} from "react";

export type CheckboxProps = {
  isChecked?: boolean;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
  label?: ReactNode;
  onChange?: (isChecked: boolean) => void;
  classNames?: {
    container?: string;
    checkbox?: string;
    label?: string;
  }
}