import type {MouseEvent, ReactNode} from 'react';
import type {TYPOGRAPHY_TYPES} from "../Typography";
import type {CLICKABLE_PAPER_ICON_SIZES} from "./ClickablePaper.constants";

export type ClickablePaperProps = {
  /**
   * Icon to render
   */
  icon?: ReactNode;
  /**
   * Icon size
   */
  iconSize?: CLICKABLE_PAPER_ICON_SIZES;
  /**
   * Title to render
   */
  title?: ReactNode;
  /**
   * Title typography type
   */
  titleTypographyType?: TYPOGRAPHY_TYPES;
  /**
   * Paper click event handler
   */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  /**
   * Disables the button
   */
  isDisabled?: boolean;
  /**
   * Enables special styling for active button
   */
  isActive?: boolean;
  /**
   * Shows restricted badge
   */
  isRestricted?: boolean;
  /**
   * Children
   */
  children?: ReactNode;
  /**
   * Paper restricted click event handler
   */
  onRestrictedClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  /**
   * Custom class names
   */
  classNames?: {
    container?: string;
    icon?: string;
  };

  /**
   * Any other prop
   */
  [key: string]: unknown;
}