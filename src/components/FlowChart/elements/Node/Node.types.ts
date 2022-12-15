import type {ReactNode} from "react";

export type NodeProps = {
  maxWidth?: number;
  maxHeight?: number;
  className?: string;
  children?: ReactNode;
}