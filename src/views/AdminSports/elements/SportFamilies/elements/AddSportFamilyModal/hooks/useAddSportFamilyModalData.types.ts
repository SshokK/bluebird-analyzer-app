import type {Dispatch, SetStateAction} from "react";

export type AddSportFamilyModalLocalState = {
  name: string;
}

export type AddSportFamilyModalLocalActions = {
  setName: Dispatch<SetStateAction<AddSportFamilyModalLocalState['name']>>
}

export type AddSportFamilyModalData = {
  localState: AddSportFamilyModalLocalState;
  localActions: AddSportFamilyModalLocalActions;
}