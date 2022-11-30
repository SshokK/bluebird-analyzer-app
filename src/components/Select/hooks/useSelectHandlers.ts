import type {SelectData} from "./useSelectData.types";
import type {SelectOption, SelectProps} from "../Select.types";
import type {SelectHandlers} from "./useSelectHandlers.types";

import {useCallback} from "react";

export const useSelectHandlers = ({
  props,
  localActions
}: {
  props: Pick<SelectProps, 'onChange' | 'options' | 'queryOptions'>
  localActions: SelectData['localActions']
}): SelectHandlers => {
  const handleChange: SelectHandlers['handleChange'] = (e: any, value: unknown) => {
    if (!value) {
      props.onChange?.([], []);
    } else {
      if (Array.isArray(value)) {
        props.onChange?.(
          value.map(v => v.value),
          value
        )
      } else {
        props.onChange?.(
          value ? [(value as SelectOption).value] : [],
          value ? [value as SelectOption] : []
        )
      }
    }
  }

  const handleInputChange: SelectHandlers['handleInputChange'] = (e, inputValue) => {
    localActions.setInputValue(inputValue)
  }

  const handleOptionsPropChange: SelectHandlers['handleOptionsPropChange'] = useCallback(() => {
    if (!props.queryOptions) {
      localActions.setOptions(props.options ?? [])
    }
  }, [localActions, props.options, props.queryOptions]);

  const handleFocusToggle: SelectHandlers['handleFocusToggle'] = (isFocused) => () => {
    if (isFocused) {
      localActions.setInputValue('');
    }

    localActions.setIsFocused(isFocused)
  }

  return {
    handleChange,
    handleInputChange,
    handleOptionsPropChange,
    handleFocusToggle
  }
}