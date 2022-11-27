import type {ListData} from "./useListData.types";
import type {ListProps} from "../List.types";

import {useMemo, useState} from "react";
import {usePreviousValue} from "../../../utils/hooks";

export const useListData = (props: ListProps): ListData => {
  const [selectedOptions, setSelectedOptions] = useState<
    ListData['localState']['selectedOptions']
  >(props.options?.filter(option => props.selectedOptionKeys?.includes(option.key)) ?? []);

  const localState: ListData['localState'] = {
    selectedOptions
  }

  const localActions: ListData['localActions'] = useMemo(() => ({
    setSelectedOptions
  }), []);

  const prevProps = usePreviousValue(props);

  return {
    localState,
    localActions,
    prevProps
  }
}