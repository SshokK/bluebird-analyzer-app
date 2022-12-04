import * as apiTypes from "./teams.api.types";

import { fetch } from 'fetch';

export const fetchTeams: apiTypes.FetchTeams = (params) => {
  return fetch({
    url: "/api/v1/teams",
    method: 'GET',
    params
  })
}