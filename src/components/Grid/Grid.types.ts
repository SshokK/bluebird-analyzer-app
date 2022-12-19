import type {ReactNode} from "react";
import type {ArrayItem} from "../../types/global.types";
import type {GRID_PADDING, GRID_HEIGHT, GRID_CHILD_DISPLAY, GRID_DIRECTION, GRID_COLUMNS, GRID_ALIGN_ITEMS, GRID_JUSTIFY_CONTENT, GRID_SPACING, GRID_DEVICE_SCREEN  } from "./Grid.constants";

export type GridProps = {
  children?: ReactNode;
  direction?: Partial<Record<GRID_DEVICE_SCREEN, GRID_DIRECTION>> | GRID_DIRECTION;
  justifyContent?: GRID_JUSTIFY_CONTENT;
  alignItems?: GRID_ALIGN_ITEMS;
  height?: GRID_HEIGHT;
  shouldSetOverflowAuto?: boolean;
  shouldSetZeroMinWidth?: boolean;
  shouldSetEqualAspectRatio?: boolean;
  spacing?: Partial<Record<GRID_DEVICE_SCREEN, GRID_SPACING>> | GRID_SPACING;
  rowSpacing?: Partial<Record<GRID_DEVICE_SCREEN, GRID_SPACING>> | GRID_SPACING;
  columnSpacing?: Partial<Record<GRID_DEVICE_SCREEN, GRID_SPACING>> | GRID_SPACING;
  columns?: Partial<Record<GRID_DEVICE_SCREEN, ArrayItem<typeof GRID_COLUMNS>>> | ArrayItem<typeof GRID_COLUMNS>;
  padding?: GRID_PADDING
  isWrapDisabled?: boolean;
  isShrinkDisabled?: boolean;
  isContainer?: boolean;
  isChild?: boolean;
  childDisplay?: GRID_CHILD_DISPLAY;
  component?: string;
  classNames?: {
    container?: string;
  }
} & Partial<Record<GRID_DEVICE_SCREEN, ArrayItem<typeof GRID_COLUMNS> | 'auto' | true>>