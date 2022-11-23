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