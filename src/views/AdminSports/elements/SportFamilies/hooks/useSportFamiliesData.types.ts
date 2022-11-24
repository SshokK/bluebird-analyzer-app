import type {Dispatch, SetStateAction} from "react";
import type {SportFamilySchema} from "features/sport-families/sportFamilies.api.types";

export type SportFamiliesLocalState = {
  isAddModalOpen: boolean;
}

export type SportFamiliesLocalActions = {
  setIsAddModalOpen: Dispatch<SetStateAction<SportFamiliesLocalState['isAddModalOpen']>>
}

export type SportsConfigurationFormattedData = {
  sportFamilyId: SportFamilySchema['id'] | null
}

export type SportFamiliesData = {
  localState: SportFamiliesLocalState;
  localActions: SportFamiliesLocalActions;
  formattedData: SportsConfigurationFormattedData;
}