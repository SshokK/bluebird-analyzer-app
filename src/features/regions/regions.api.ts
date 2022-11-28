import type * as apiTypes from "./regions.api.types";

import {fetch} from "fetch";

export const fetchRegions: apiTypes.FetchRegions = (params = {}) => {
  return fetch({
    url: '/api/v1/regions',
    method: 'GET',
    params
  })
}

export const createRegion: apiTypes.CreateRegion = (body) => {
  return fetch({
    url: '/api/v1/regions',
    method: 'POST',
    data: body
  })
}

export const updateRegion: apiTypes.UpdateRegion = (regionId, body) => {
  return fetch({
    url: `/api/v1/regions/${regionId}`,
    method: 'PATCH',
    data: body
  })
}

export const deleteRegion: apiTypes.DeleteRegion = (regionId) => {
  return fetch({
    url: `/api/v1/regions/${regionId}`,
    method: 'DELETE'
  })
}