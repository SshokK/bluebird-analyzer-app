import type {Dispatch, SetStateAction} from "react";

export type SportFamiliesLocalState = {
  openedModalKey: string | null;
  openedDropdownKey: string | null;
}

export type SportFamiliesLocalActions = {
  setOpenedModalKey: Dispatch<SetStateAction<SportFamiliesLocalState['openedModalKey']>>;
  setOpenedDropdownKey: Dispatch<SetStateAction<SportFamiliesLocalState['openedModalKey']>>;
}

export type ActionsData = {
  localState: SportFamiliesLocalState;
  localActions: SportFamiliesLocalActions;
}