import type {useLocation} from "react-router";

import queryString from 'query-string';

export const formatRedirectUrl = ({ path, params = {}, shouldKeepExistingParams = false, location }: {
  path: string;
  params?: Record<string, unknown>;
  shouldKeepExistingParams?: boolean;
  location?: ReturnType<typeof useLocation>
}) => {
  const existingParams = queryString.parse(location?.search ?? '');

  const queryParams = {
    ...shouldKeepExistingParams && existingParams,
    ...params
  }

  const queryParamsWithNonEmptyValues = Object.fromEntries(
    Object.entries(queryParams).filter(([, paramValue]) => paramValue)
  )

  if (!Object.keys(queryParamsWithNonEmptyValues).length) {
    return path
  }

  return `${path}?${queryString.stringify(queryParamsWithNonEmptyValues)}`
};