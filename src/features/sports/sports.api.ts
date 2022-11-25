import type * as apiTypes from "./sports.api.types";

import { fetch } from 'fetch';

export const fetchSports: apiTypes.FetchSports = (sportFamilyId, params) => {
  return fetch<apiTypes.FetchSportsResponse>({
    url: `/api/v1/sport-families/${sportFamilyId}/sports`,
    method: 'GET',
    params
  })
}

export const fetchSport: apiTypes.FetchSport = (sportFamilyId, sportId) => {
  return fetch<apiTypes.FetchSportResponse>({
    url: `/api/v1/sport-families/${sportFamilyId}/sports/${sportId}`,
    method: 'GET'
  })
}

export const createSport: apiTypes.CreateSport = (sportFamilyId, data) => {
  return fetch<apiTypes.CreateSportResponse>({
    url: `/api/v1/sport-families/${sportFamilyId}/sports`,
    method: 'POST',
    data
  })
}

export const updateSport: apiTypes.UpdateSport = (sportFamilyId, sportId,  data) => {
  return fetch<apiTypes.UpdateSportResponse>({
    url: `/api/v1/sport-families/${sportFamilyId}/sports/${sportId}`,
    method: 'PATCH',
    data
  })
}

export const deleteSport: apiTypes.DeleteSport = (sportFamilyId, sportId) => {
  return fetch<apiTypes.DeleteSportResponse>({
    url: `/api/v1/sport-families/${sportFamilyId}/sports/${sportId}`,
    method: 'DELETE'
  })
}
