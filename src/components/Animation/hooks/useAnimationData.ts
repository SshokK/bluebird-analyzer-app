import type {AnimationData} from "./useAnimationData.types";

import {useMemo, useState} from "react";

export const useAnimationData = (): AnimationData => {
  const [shouldAppear, setShouldAppear] = useState<AnimationData['localState']['shouldAppear']>(false);
  const [timeoutId, setTimeoutId] = useState<AnimationData['localState']['timeoutId']>(null);

  const localState: AnimationData['localState'] = {
    shouldAppear,
    timeoutId
  }

  const localActions: AnimationData['localActions'] = useMemo(() => ({
    setShouldAppear,
    setTimeoutId
  }), []);

  return {
    localState,
    localActions
  }
}