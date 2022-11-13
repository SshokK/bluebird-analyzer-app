import type {BADGE_TYPES} from "./Badge.constants";
import type {ReactNode} from "react";

export type BadgeProps = {
  /**
   * Badge type
   */
  type: BADGE_TYPES;
  /**
   * Badge value
   */
  content?: ReactNode;
  /**
   * Element that will have a badge
   */
  children?: ReactNode;
  /**
   * Custom class names
   */
  classNames?: {
    container?: string;
  }
}