import type * as apiTypes from "./proxies.api.types";

import {fetch} from "../../fetch";

export const fetchProxies: apiTypes.FetchProxies = (params) => {
  return fetch({
    url: "/api/v1/proxies",
    method: 'GET',
    params
  })
}

export const deleteProxies: apiTypes.DeleteProxies = (proxyIds) => {
  return fetch({
    url: '/api/v1/proxies',
    method: "DELETE",
    params: {
      proxyId: proxyIds
    }
  })
}

export const updateProxy: apiTypes.UpdateProxy = (proxyId, body) => {
  return fetch({
    url: `/api/v1/proxies/${proxyId}`,
    method: "PATCH",
    data: body
  })
}