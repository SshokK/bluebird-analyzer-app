import type { NumberFieldData } from './useNumberFieldData.types';
import type { NumberFieldProps } from '../NumberField.types';

import { useMemo, useState } from 'react';
import { isFinite } from 'lodash';

export const useNumberFieldData = (props: NumberFieldProps): NumberFieldData => {
  const [value, setValue] = useState(
    isFinite(Number(props.value)) ? String(props.value) : String(props.minValue)
  );

  const localState: NumberFieldData['localState'] = {
    value
  };

  const localActions: NumberFieldData['localActions'] = useMemo(
    () => ({
      setValue
    }),
    []
  );

  return {
    localState,
    localActions
  };
};
