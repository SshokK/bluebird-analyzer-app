import type {Dispatch, SetStateAction} from "react";

export type AnimationLocalState = {
  shouldAppear: boolean;
  timeoutId: ReturnType<typeof setTimeout> | null;
}

export type AnimationLocalActions = {
  setShouldAppear: Dispatch<SetStateAction<AnimationLocalState['shouldAppear']>>;
  setTimeoutId: Dispatch<SetStateAction<AnimationLocalState['timeoutId']>>
}

export type AnimationData = {
  localState: AnimationLocalState;
  localActions: AnimationLocalActions;
}