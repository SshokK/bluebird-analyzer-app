import type * as apiTypes from "./players.api.types";

import { fetch } from 'fetch';

export const fetchPlayers: apiTypes.FetchPlayers = (params) => {
  return fetch({
    url: '/api/v1/players',
    method: 'GET',
    params
  })
}