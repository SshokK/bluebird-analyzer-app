import type {Dispatch, SetStateAction} from "react";
import type {SelectOption} from "../Select.types";

export type SelectLocalState = {
  inputValue: string;
  options: SelectOption[];
  isFocused: boolean;
}

export type SelectLocalActions = {
  setInputValue: Dispatch<SetStateAction<SelectLocalState['inputValue']>>;
  setOptions: Dispatch<SetStateAction<SelectLocalState['options']>>;
  setIsFocused: Dispatch<SetStateAction<SelectLocalState['isFocused']>>
}

export type SelectFormattedData = {
  value: SelectOption | SelectOption[] | null;
}

export type SelectData = {
  localState: SelectLocalState;
  localActions: SelectLocalActions;
  formattedData: SelectFormattedData;
}