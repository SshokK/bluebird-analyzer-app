import type {useLocation} from "react-router";

import queryString from 'query-string';

export const formatRedirectUrl = ({ path, params = {}, shouldKeepExistingParams = false, location }: {
  path: string;
  params?: Record<string, unknown>;
  shouldKeepExistingParams?: boolean;
  location?: ReturnType<typeof useLocation>
}) => {
  const existingParams = queryString.parse(location?.search ?? '');

  const queryParams = queryString.stringify({
    ...shouldKeepExistingParams && existingParams,
    ...params
  });

  return queryParams ? `${path}?${queryParams}` : path;
};