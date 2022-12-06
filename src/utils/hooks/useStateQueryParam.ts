import type {NavigateOptions} from "react-router";


import {formatRedirectUrl} from "../url.utils";

import {useDidMount} from "./useDidMount";
import {usePreviousValue} from "./usePreviousValue";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router";
import {useQueryParams} from "./useQueryParams";

export const useStateQueryParam = <V extends unknown = unknown>(
  initialValue: V,
  queryParamKey: string,
  options: NavigateOptions & Parameters<typeof useQueryParams>[0] & {
    shouldKeepExistingParams?: boolean
  } = {
    replace: true,
    relative: 'route',
    shouldKeepExistingParams: true
  }
) => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = useQueryParams(options);

  const queryParam = queryParams[queryParamKey];

  const [value, setValue] = useState<V>(initialValue);
  const prevValue = usePreviousValue(value);

  useDidMount(() => {
    if (queryParam) {
      setValue(queryParam as V)
    }
  })

  useEffect(() => {
    if (value !== prevValue) {
      navigate(formatRedirectUrl({
        path: '',
        params: {
          [queryParamKey]: value
        },
        shouldKeepExistingParams: options.shouldKeepExistingParams,
        searchString: location.search
      }), options);
    }
  }, [location.search, navigate, options, prevValue, queryParam, queryParamKey, value]);

  return [
    value,
    setValue
  ] as [V, typeof setValue]
}