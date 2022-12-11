import type {ComponentProps, ReactElement} from "react";
import type { ANIMATION_TYPES, ANIMATION_DIRECTION, ANIMATION_ORIENTATION } from "./Animation.constants";
import type * as MUI from "@mui/material";

export type AnimationComponent = typeof MUI.Grow | typeof MUI.Fade | typeof MUI.Slide | typeof MUI.Zoom | typeof MUI.Collapse;
export type AnimationComponentProps = ComponentProps<AnimationComponent>;

export type AnimationProps = {
  type: ANIMATION_TYPES;
  shouldAppear?: boolean;
  animationDelay?: number;
  animationTiming?: number;
  direction?: ANIMATION_DIRECTION;
  orientation?: ANIMATION_ORIENTATION;
  onExit?: Required<AnimationComponentProps>['onExit'];
  onEntered?: Required<AnimationComponentProps>['onEntered'];
  children: ReactElement;
}