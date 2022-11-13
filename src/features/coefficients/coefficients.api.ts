import type * as apiTypes from "./coefficients.api.types";

import { fetch } from 'fetch';

export const fetchCoefficients: apiTypes.FetchCoefficients = (params) => {
  return fetch<apiTypes.FetchCoefficientsResponse>({
    url: '/api/v1/coefficients',
    method: 'GET',
    params
  })
}