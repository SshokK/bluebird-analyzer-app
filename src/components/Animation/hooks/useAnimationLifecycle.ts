import type {AnimationHandlers} from "./useAnimationHandlers.types";

import {useEffect} from "react";

export const useAnimationLifecycle = ({
  onShouldAppearPropChange
}: {
  onShouldAppearPropChange: AnimationHandlers['handleShouldAppearPropChange']
}) => {
  useEffect(onShouldAppearPropChange, [onShouldAppearPropChange])
}