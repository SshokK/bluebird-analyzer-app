import type {ListOption, ListProps} from "components";
import type {Dispatch, SetStateAction} from "react";

export type ListLocalState = {
  selectedOptions: ListOption[]
}

export type ListLocalActions = {
  setSelectedOptions: Dispatch<SetStateAction<ListLocalState['selectedOptions']>>
}

export type ListData = {
  localState: ListLocalState;
  localActions: ListLocalActions;
  prevProps: ListProps;
}