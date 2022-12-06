import type * as apiTypes from "./bookmakers.api.types";

import { fetch } from 'fetch';

export const fetchBookmakers: apiTypes.FetchBookmakers = (params = {}) => {
  return fetch({
    url: '/api/v1/bookmakers',
    method: 'GET',
    params
  })
}