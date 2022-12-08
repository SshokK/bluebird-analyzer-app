import type * as apiTypes from "./bookmakers.api.types";

import { fetch } from 'fetch';

export const fetchBookmakers: apiTypes.FetchBookmakers = (params = {}) => {
  return fetch({
    url: '/api/v1/bookmakers',
    method: 'GET',
    params
  })
}

export const createBookmaker: apiTypes.CreateBookmaker = (data) => {
  return fetch({
    url: '/api/v1/bookmakers',
    method: 'POST',
    data
  })
}

export const updateBookmaker: apiTypes.UpdateBookmaker = (bookmakerId, data) => {
  return fetch({
    url: `/api/v1/bookmakers/${bookmakerId}`,
    method: 'PATCH',
    data
  })
}

export const deleteBookmaker: apiTypes.DeleteBookmaker = (bookmakerId) => {
  return fetch({
    url: `/api/v1/bookmakers/${bookmakerId}`,
    method: 'DELETE'
  })
}
