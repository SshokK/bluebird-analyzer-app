import type {ReactNode} from "react";
import type {AVATAR_SIZES} from "./Avatar.constants";

export type AvatarProps = {
  /**
   * Avatar size
   */
  size?: AVATAR_SIZES;
  /**
   * Img alt attribute
   */
  alt?: string;
  /**
   * Img src attribute
   */
  src?: string;
  /**
   * Children
   */
  children?: ReactNode;
  /**
   * Custom class name
   */
  className?: string;
}