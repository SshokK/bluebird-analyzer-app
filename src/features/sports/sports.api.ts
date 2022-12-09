import type * as apiTypes from "./sports.api.types";

import { fetch } from 'fetch';

export const fetchSports: apiTypes.FetchSports = (params) => {
  return fetch<apiTypes.FetchSportsResponse>({
    url: `/api/v1/sports`,
    method: 'GET',
    params
  })
}

export const fetchSport: apiTypes.FetchSport = (sportId) => {
  return fetch<apiTypes.FetchSportResponse>({
    url: `/api/v1/sports/${sportId}`,
    method: 'GET'
  })
}

export const createSport: apiTypes.CreateSport = (data) => {
  return fetch<apiTypes.CreateSportResponse>({
    url: `/api/v1/sports`,
    method: 'POST',
    data
  })
}

export const updateSport: apiTypes.UpdateSport = (sportId,  data) => {
  return fetch<apiTypes.UpdateSportResponse>({
    url: `/api/v1/sports/${sportId}`,
    method: 'PATCH',
    data
  })
}

export const deleteSport: apiTypes.DeleteSport = (sportId) => {
  return fetch<apiTypes.DeleteSportResponse>({
    url: `/api/v1/sports/${sportId}`,
    method: 'DELETE'
  })
}
