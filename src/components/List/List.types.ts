import type {ReactNode} from "react";
import type {ActionsProps} from "../Actions";

export type ListOption = {
  key: unknown;
  label?: ReactNode;
  caption?: ReactNode;
  icon?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  [key: string]: unknown;
}

export type ListProps = {
  options?: ListOption[];
  selectedOptionKeys?: ListOption['key'][];
  onSelectedOptionsChange?: (options: ListOption[]) => void;
  isMulti?: boolean;
  isFullWidth?: boolean;
  primaryActions?: ActionsProps['actions'];
  secondaryActions?: ActionsProps['actions'];
  shouldShowNoDataMessage?: boolean;
  noDataMessage?: string;
  classNames?: {
    container?: string;
    actions?: string;
    list?: string;
  }
}