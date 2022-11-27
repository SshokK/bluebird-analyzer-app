import * as MUI from "@mui/material";

export enum ANIMATION_TYPES {
  FADE = 'fade',
  GROW = 'grow',
  SLIDE = 'slide',
  ZOOM = 'zoom',
  COLLAPSE = 'collapse'
}

export enum ANIMATION_ORIENTATION {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical'
}

export enum ANIMATION_DIRECTION {
  UP = 'up',
  RIGHT = 'right',
  LEFT = 'left',
  DOWN = 'down'
}

export const ANIMATION_COMPONENTS: Record<
  ANIMATION_TYPES,
  typeof MUI.Grow | typeof MUI.Fade | typeof MUI.Slide | typeof MUI.Zoom | typeof MUI.Collapse
> = {
  [ANIMATION_TYPES.FADE]: MUI.Fade,
  [ANIMATION_TYPES.GROW]: MUI.Grow,
  [ANIMATION_TYPES.SLIDE]: MUI.Slide,
  [ANIMATION_TYPES.ZOOM]: MUI.Zoom,
  [ANIMATION_TYPES.COLLAPSE]: MUI.Collapse
}