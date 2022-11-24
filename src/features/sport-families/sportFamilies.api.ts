import type * as apiTypes from "./sportFamilies.api.types";

import { fetch } from 'fetch';

export const fetchSportFamilies: apiTypes.FetchSportFamilies = (params) => {
  return fetch<apiTypes.FetchSportFamiliesResponse>({
    url: '/api/v1/sport-families',
    method: 'GET',
    params
  })
}

export const fetchSportFamilyById: apiTypes.FetchSportFamilyById = (id) => {
  return fetch<apiTypes.FetchSportFamilyByIdResponse>({
    url: `/api/v1/sport-families/${id}`,
    method: 'GET'
  })
}

export const createSportFamily: apiTypes.CreateSportFamily = (data) => {
  return fetch<apiTypes.CreateSportFamilyResponse>({
    url: `/api/v1/sport-families`,
    method: 'POST',
    data
  })
}

export const deleteSportFamily: apiTypes.DeleteSportFamily = (id) => {
  return fetch<apiTypes.DeleteSportFamilyResponse>({
    url: `/api/v1/sport-families/${id}`,
    method: 'DELETE'
  })
}
