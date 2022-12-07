import type {ElementType} from "react";

export type SeparatorProps = {
  isVertical?: boolean;
  isFlexChild?: boolean;
  component?: ElementType;
  children?: string | null;
}