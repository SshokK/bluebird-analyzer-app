import type {SelectData} from "./useSelectData.types";
import type {SelectProps} from "../Select.types";

import {useMemo, useState} from "react";

export const useSelectData = (props: Pick<SelectProps, 'options' | "value" | "isMulti">): SelectData => {
  const [inputValue, setInputValue] = useState<SelectData['localState']['inputValue']>('');
  const [options, setOptions] = useState<SelectData['localState']['options']>(props.options ?? []);
  const [isFocused, setIsFocused] = useState<SelectData['localState']['isFocused']>(false);

  const localState: SelectData['localState'] = {
    inputValue,
    options,
    isFocused
  }

  const localActions: SelectData['localActions'] = useMemo(() => ({
    setInputValue,
    setOptions,
    setIsFocused
  }), []);

  const formattedData = useMemo(() => {
    const value = localState.options?.filter(option => {
      return props.value?.find((value) => value === option.value)
    }) ?? []

    return {
      value: props.isMulti ? value : (value[0] ?? null)
    }
  }, [localState.options, props.isMulti, props.value])

  return {
    localState,
    localActions,
    formattedData
  }
}