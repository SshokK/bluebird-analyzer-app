import type {ReactElement} from "react";
import type { ANIMATION_TYPES, ANIMATION_DIRECTION, ANIMATION_ORIENTATION } from "./Animation.constants";

export type AnimationProps = {
  type: ANIMATION_TYPES;
  shouldAppear?: boolean;
  animationDelay?: number;
  direction?: ANIMATION_DIRECTION;
  orientation?: ANIMATION_ORIENTATION;
  children: ReactElement;
}