import type {ReactNode} from "react";

export type ViewProps = {
  title?: ReactNode;
  children?: ReactNode;
  isLoading?: boolean;
  classNames?: {
    container?: string;
    content?: string;
  };
}