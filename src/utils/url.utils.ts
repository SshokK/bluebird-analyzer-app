import queryString from 'query-string';

export const formatRedirectUrl = ({ path, params = {}, shouldKeepExistingParams = false, searchString }: {
  path: string;
  params?: Record<string, unknown>;
  shouldKeepExistingParams?: boolean;
  searchString?: string;
}) => {
  const existingParams = queryString.parse(searchString ?? '');

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