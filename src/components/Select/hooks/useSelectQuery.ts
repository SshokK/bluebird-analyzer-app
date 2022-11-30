import type {SelectProps, SelectQueryFn, SelectQuerySelectorReturn} from "../Select.types";
import type {SelectData} from "./useSelectData.types";

import {useQuery} from "@tanstack/react-query";

export const useSelectQuery = ({
  props,
  localState,
  localActions
}: {
  props: Pick<SelectProps, 'queryOptions' | 'queryParams' | 'isAsync' | 'isDisabled'>;
  localState: SelectData['localState'];
  localActions: SelectData['localActions'];
}) => {
  return useQuery<
    Awaited<ReturnType<SelectQueryFn>>,
    Error,
    SelectQuerySelectorReturn
  >({
    enabled: Boolean(props.queryOptions && !props.isDisabled),
    ...props.queryOptions,
    keepPreviousData: true,
    queryKey: [...(props.queryOptions?.queryKey ?? []), {
      ...props.queryParams,
      inputValue: localState.inputValue
    }],
    queryFn: () => props.queryOptions?.queryFn?.({
      inputValue: localState.inputValue.trim().toLowerCase(),
      currentOptions: []
    }),
    onSuccess: (...args) => {
      localActions.setOptions(args[0]);

      props.queryOptions?.onSuccess?.(...args);
    }
  })
}