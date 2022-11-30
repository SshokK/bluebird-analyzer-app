import type {ModalFormField} from "../ModalForm.types";
import type {Dispatch, SetStateAction} from "react";

export type ModalFormLocalState = {
  fields: Record<string, ModalFormField>;
  isLoading: boolean;
}

export type ModalFormLocalActions = {
  setFields: Dispatch<SetStateAction<ModalFormLocalState['fields']>>;
  setIsLoading: Dispatch<SetStateAction<ModalFormLocalState['isLoading']>>
}

export type ModalFormFormattedData = {
  areAllRequiredFieldsFilled: boolean;
}

export type ModalFormData = {
  localState: ModalFormLocalState;
  localActions: ModalFormLocalActions;
  formattedData: ModalFormFormattedData;
}