import * as apiTypes from "./teams.api.types";

import { fetch } from 'fetch';

export const fetchTeams: apiTypes.FetchTeams = (params) => {
  return fetch({
    url: "/api/v1/teams",
    method: 'GET',
    params
  })
}

export const createTeam: apiTypes.CreateTeam = (data) => {
  return fetch({
    url: '/api/v1/teams',
    method: 'POST',
    data
  })
}

export const updateTeam: apiTypes.UpdateTeam = (teamId, data) => {
  return fetch({
    url: `/api/v1/teams/${teamId}`,
    method: 'PATCH',
    data
  })
}

export const deleteTeam: apiTypes.DeleteTeam = (teamId) => {
  return fetch({
    url: `/api/v1/teams/${teamId}`,
    method: 'DELETE'
  })
}
