import type {Dispatch, MutableRefObject, SetStateAction} from "react";

export type DropdownDataRefs = {
  anchorElementRef: MutableRefObject<HTMLDivElement | null>;
};

export type DropdownDataLocalState = {
  isOpen: boolean;
};

export type DropdownDataLocalActions = {
  setOpenState: Dispatch<SetStateAction<DropdownDataLocalState['isOpen']>>;
};

export type DropdownData = {
  refs: DropdownDataRefs;
  localState: DropdownDataLocalState;
  localActions: DropdownDataLocalActions;
};
