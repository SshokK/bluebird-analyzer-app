import type { Dispatch, SetStateAction } from 'react';

export type TooltipLocalState = {
  isOpen: boolean;
};

export type TooltipLocalActions = {
  setIsOpen: Dispatch<SetStateAction<TooltipLocalState['isOpen']>>;
};

export type TooltipData = {
  localState: TooltipLocalState;
  localActions: TooltipLocalActions;
};
