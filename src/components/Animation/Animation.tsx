import type {FC} from 'react';
import type {AnimationProps} from "./Animation.types";

import React from 'react';
import { ANIMATION_COMPONENTS } from "./Animation.constants";

export const Animation: FC<AnimationProps> = ({
  type,
  shouldAppear,
  animationDelay,
  direction,
  orientation,
  children
}) => {
  const Component = ANIMATION_COMPONENTS[type];

  return (
    <Component
      in={shouldAppear}
      timeout={animationDelay}
      // direction={direction}
      // orientation={orientation}
    >
      {children}
    </Component>
  )
}