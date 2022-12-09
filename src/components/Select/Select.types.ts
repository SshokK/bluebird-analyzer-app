import type {UseQueryOptions} from "@tanstack/react-query/src/types";

export type SelectOption<T = unknown>= {
  value: T;
  label: string;

  [key: string]: unknown;
}

export type SelectQuerySelectorReturn = SelectOption[];
export type SelectQueryFnReturn = any;
export type SelectQueryFn = (args: {
  inputValue: string;
  currentOptions: SelectOption[]
}) => Promise<SelectQueryFnReturn>
export type SelectQueryOptions = Omit<UseQueryOptions<Awaited<ReturnType<SelectQueryFn>>, Error, SelectQuerySelectorReturn>, 'queryFn'> & {
  queryFn: SelectQueryFn
};


export type SelectProps = {
  value?: SelectOption['value'][];
  options?: SelectOption[];
  onChange?: (values: SelectOption['value'][], options: SelectOption[]) => void;
  isMulti?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
  isRequired?: boolean;
  isLoading?: boolean;
  label?: string;
  queryOptions?: SelectQueryOptions;
  queryParams?: Record<string, unknown>
}