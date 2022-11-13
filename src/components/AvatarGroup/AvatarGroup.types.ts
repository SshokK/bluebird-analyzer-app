import type {ReactNode} from "react";

export type AvatarGroupProps = {
  /**
   * Avatars
   */
  children?: ReactNode;
  /**
   * Max visible avatars count
   */
  maxAvatarsCount?: number;
  /**
   * Custom class names
   */
  classNames?: {
    container?: string;
    avatar?: string;
  };
}