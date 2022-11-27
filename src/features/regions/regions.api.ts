import type {FetchRegions} from "./regions.api.types";

import {fetch} from "fetch";

export const fetchRegions: FetchRegions = (params = {}) => {
  return fetch({
    url: '/api/v1/regions',
    method: 'GET',
    params
  })
}