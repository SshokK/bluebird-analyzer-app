import type {ReactNode} from "react";

export type ListOption = {
  value: unknown;
  label?: ReactNode;
  caption?: ReactNode;
  icon?: ReactNode;
}

export type ListProps = {
  options?: ListOption[];
}