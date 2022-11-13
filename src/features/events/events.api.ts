import type * as apiTypes from "./events.api.types";

import { fetch } from 'fetch';

export const fetchEvents: apiTypes.FetchEvents = (params) => {
  return fetch<apiTypes.FetchEventsResponse>({
    url: '/api/v1/events',
    method: 'GET',
    params
  })
}