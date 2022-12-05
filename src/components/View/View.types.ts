import type {ReactNode} from "react";

export type ViewProps = {
  title?: ReactNode;
  children?: ReactNode;
  isLoading?: boolean;
  isFullHeight?: boolean;
  classNames?: {
    container?: string;
    content?: string;
  };
}