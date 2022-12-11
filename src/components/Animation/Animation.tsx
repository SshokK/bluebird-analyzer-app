import type {FC} from 'react';
import type {AnimationProps} from "./Animation.types";

import React from 'react';
import {ANIMATION_COMPONENTS, DEFAULT_ANIMATION_TIMING} from "./Animation.constants";
import {useAnimationData, useAnimationHandlers, useAnimationLifecycle} from "./hooks";

export const Animation: FC<AnimationProps> = ({
  type,
  shouldAppear,
  animationDelay,
  animationTiming,
  direction,
  orientation,
  onExit,
  onEntered,
  children
}) => {
  const { localState, localActions } = useAnimationData();

  const handlers = useAnimationHandlers({
    props: {
      shouldAppear,
      animationDelay
    },
    localState,
    localActions
  });

  useAnimationLifecycle({
    onShouldAppearPropChange: handlers.handleShouldAppearPropChange
  })

  const Component = ANIMATION_COMPONENTS[type];

  return (
    <Component
      in={localState.shouldAppear}
      timeout={animationTiming ?? DEFAULT_ANIMATION_TIMING}
      onExit={onExit}
      direction={direction}
      orientation={orientation}
      onEntered={onEntered}
    >
      {children}
    </Component>
  )
}