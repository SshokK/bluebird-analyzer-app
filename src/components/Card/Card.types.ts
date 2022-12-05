import type {ReactNode} from "react";
import type {AvatarProps} from "../Avatar";

export type CardProps = {
  avatars?: Pick<AvatarProps, 'src' | "alt">[];
  elevation?: number;
  classNames?: {
    container?: string;
    avatarContainer?: string;
    content?: string;
  },
  isSquared?: boolean;
  children?: ReactNode;
  isAnimated?: boolean;
  isFullHeight?: boolean;
  animationDelay?: number;
}