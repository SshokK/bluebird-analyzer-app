import type { Dispatch, SetStateAction } from 'react';

export type NumberFieldLocalState = {
  value: string;
};

export type NumberFieldLocalActions = {
  setValue: Dispatch<SetStateAction<NumberFieldLocalState['value']>>;
};

export type NumberFieldData = {
  localState: NumberFieldLocalState;
  localActions: NumberFieldLocalActions;
};
