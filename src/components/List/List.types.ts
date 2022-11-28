import type {ReactNode} from "react";
import type {ActionsProps} from "../Actions";

export type ListOption = {
  key: unknown;
  label?: ReactNode;
  caption?: ReactNode;
  icon?: ReactNode;
  [key: string]: unknown;
}

export type ListProps = {
  options?: ListOption[];
  selectedOptionKeys?: ListOption['key'][];
  onSelectedOptionsChange?: (options: ListOption[]) => void;
  isMulti?: boolean;
  actions?: ActionsProps['actions'];
  classNames?: {
    container?: string;
    actions?: string;
    list?: string;
  }
}