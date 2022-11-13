import type * as apiTypes from "./sports.api.types";

import { fetch } from 'fetch';

export const fetchSports: apiTypes.FetchSports = (params) => {
  return fetch<apiTypes.FetchSportsResponse>({
    url: '/api/v1/sports',
    method: 'GET',
    params
  })
}

export const fetchSport: apiTypes.FetchSport = (id) => {
  return fetch<apiTypes.FetchSportResponse>({
    url: `/api/v1/sport/${id}`,
    method: 'GET'
  })
}