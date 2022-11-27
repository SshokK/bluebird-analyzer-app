import type {FetchProxies} from "./proxies.api.types";

import {fetch} from "../../fetch";

export const fetchProxies: FetchProxies = (params) => {
  return fetch({
    url: "/api/v1/proxies",
    method: 'GET',
    params
  })
}