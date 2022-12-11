import type {AnimationHandlers} from "./useAnimationHandlers.types";
import type {AnimationProps} from "../Animation.types";
import type {AnimationData} from "./useAnimationData.types";

import {useCallback} from "react";

export const useAnimationHandlers = ({
  props,
  localState,
  localActions
}: {
  props: Pick<AnimationProps, 'shouldAppear' | 'animationDelay'>;
  localState: AnimationData['localState'];
  localActions: AnimationData['localActions']
}): AnimationHandlers => {
  const handleShouldAppearPropChange = useCallback(() => {
    if (!localState.timeoutId && props.shouldAppear) {
      const timeoutId = setTimeout(() => {
        localActions.setTimeoutId(null);
        localActions.setShouldAppear(true);
      }, props.animationDelay ?? 0);

      localActions.setTimeoutId(timeoutId);
    } else if (!props.shouldAppear) {
      localActions.setShouldAppear(false)
    }
  }, [localActions, localState.timeoutId, props.animationDelay, props.shouldAppear]);

  return {
    handleShouldAppearPropChange
  }
}