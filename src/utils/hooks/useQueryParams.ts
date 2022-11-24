import {PARAM_TYPES} from "constants/global.constants";

import * as utils from "utils";
import queryString from "query-string";

import {useLocation} from "react-router";

export const PARSERS: Record<PARAM_TYPES, ({
  queryParamValue,
  isStrictValidation
}: {
  queryParamValue: unknown
  isStrictValidation: boolean;
}) => unknown> = {
  [PARAM_TYPES.INTEGER]: ({ queryParamValue, isStrictValidation }) => {
    if (!utils.isNumber(queryParamValue)) {
      return isStrictValidation ? null : queryParamValue
    }

    return Number(queryParamValue)
  },
  [PARAM_TYPES.STRING]: ({ queryParamValue, isStrictValidation }) => {
    if (!utils.isString(queryParamValue)) {
      return isStrictValidation ? null : queryParamValue
    }

    return queryParamValue
  }
}

export const useQueryParams = <T extends Record<string, unknown>>({
  paramsTypes = {},
  isStrictValidation = false
}: {
  paramsTypes?: Record<string, PARAM_TYPES>
  isStrictValidation?: boolean;
} = {}): T => {
  const location = useLocation();

  const queryParams = queryString.parse(location.search) as T;

  for (const [queryParamKey, queryParamValue] of Object.entries(queryParams)) {
    if (queryParamKey in paramsTypes) {
      const parsedValue = PARSERS[paramsTypes[queryParamKey]]({
        queryParamValue,
        isStrictValidation
      });

      queryParams[queryParamKey as keyof T] = parsedValue as T[keyof T];
    }
  }

  return queryParams
}