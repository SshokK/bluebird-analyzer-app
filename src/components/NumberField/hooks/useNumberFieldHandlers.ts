import type { NumberFieldHandlers } from './useNumberFieldHandlers.types';
import type { NumberFieldProps } from '../NumberField.types';
import type { NumberFieldData } from './useNumberFieldData.types';

import { isNumber } from 'lodash';
import {DEFAULT_MIN_VALUE} from "../NumberField.constants";

export const useNumberFieldHandlers = ({
  props,
  localActions
}: {
  props: NumberFieldProps;
  localActions: NumberFieldData['localActions'];
}): NumberFieldHandlers => {
  const handleChange: NumberFieldHandlers['handleChange'] = value => {
    if (value && Number(value) < (props.minValue ?? DEFAULT_MIN_VALUE)) {
      return;
    }

    localActions.setValue(value);

    if (isNumber(Number(value)) && Number(value) >= (props.minValue ?? DEFAULT_MIN_VALUE)) {
      props.onChange?.(Number(value));
    }
  };

  const handleBlur: NumberFieldHandlers['handleBlur'] = () => {
    localActions.setValue(value => {
      if (!isNumber(Number(value)) || Number(value) < (props.minValue ?? DEFAULT_MIN_VALUE)) {
        return String(props.value);
      }

      return value;
    });
  };

  return {
    handleChange,
    handleBlur
  };
};
