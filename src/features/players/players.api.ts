import type * as apiTypes from "./players.api.types";

import { fetch } from 'fetch';

export const fetchPlayers: apiTypes.FetchPlayers = (params) => {
  return fetch({
    url: '/api/v1/players',
    method: 'GET',
    params
  })
}

export const createPlayer: apiTypes.CreatePlayer = (data) => {
  return fetch({
    url: '/api/v1/players',
    method: 'POST',
    data
  })
}

export const updatePlayer: apiTypes.UpdatePlayer = (playerId, data) => {
  return fetch({
    url: `/api/v1/players/${playerId}`,
    method: 'PATCH',
    data
  })
}

export const deletePlayer: apiTypes.DeletePlayer = (playerId) => {
  return fetch({
    url: `/api/v1/players/${playerId}`,
    method: 'DELETE'
  })
}
