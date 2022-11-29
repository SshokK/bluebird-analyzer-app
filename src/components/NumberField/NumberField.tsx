import type {NumberFieldProps} from "./NumberField.types";
import type {FC} from 'react';

import React from 'react';
import {TEXT_FIELD_INPUT_TYPES, TextField} from '../TextField';
import { DEFAULT_MIN_VALUE} from './NumberField.constants';
import {useNumberFieldData, useNumberFieldHandlers} from './hooks';

export const NumberField: FC<NumberFieldProps> = (props) => {
  const { localState, localActions } = useNumberFieldData(props);

  const handlers = useNumberFieldHandlers({
    props,
    localActions
  });

  return (
    <TextField
      {...props}
      inputType={TEXT_FIELD_INPUT_TYPES.NUMBER}
      value={localState.value}
      onChange={handlers.handleChange}
      onBlur={handlers.handleBlur}
      inputProps={{
        min: props.minValue,
      }}
    />
  );
};

NumberField.defaultProps = {
  minValue: DEFAULT_MIN_VALUE
} as NumberFieldProps