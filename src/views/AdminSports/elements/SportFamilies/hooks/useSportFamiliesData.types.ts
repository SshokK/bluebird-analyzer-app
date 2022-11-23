import type {Dispatch, SetStateAction} from "react";

export type SportFamiliesLocalState = {
  isAddModalOpen: boolean;
}

export type SportFamiliesLocalActions = {
  setIsAddModalOpen: Dispatch<SetStateAction<SportFamiliesLocalState['isAddModalOpen']>>
}

export type SportFamiliesData = {
  localState: SportFamiliesLocalState;
  localActions: SportFamiliesLocalActions;
}