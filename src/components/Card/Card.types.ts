import type {ReactNode} from "react";

export type CardProps = {
  elevation?: number;
  classNames?: {
    container: string;
  },
  isSquared?: boolean;
  children?: ReactNode;
}