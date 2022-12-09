import type * as apiTypes from "./eventCrawlers.api.types";

import {fetch} from "../../fetch";
import {formatEventCrawlersBulkUpdateBody} from "./eventCrawlers.api.helpers";
import {CRAWLER_STATUSES} from "../crawlers/crawlers.constants";

export const fetchEventCrawlers: apiTypes.FetchEventCrawlers = async (params) => {
  return fetch({
    url: '/api/v1/event-crawlers',
    method: 'GET',
    params
  })
}

export const createEventCrawler: apiTypes.CreateEventCrawler = (data) => {
  return fetch({
    url: '/api/v1/event-crawlers',
    method: 'POST',
    data
 })
}

export const deleteEventCrawler: apiTypes.DeleteEventCrawler = (eventCrawlerId) => {
  return fetch({
    url: `/api/v1/event-crawlers/${eventCrawlerId}`,
    method: 'DELETE'
 })
}

export const updateEventCrawler: apiTypes.UpdateEventCrawler = (eventCrawlerId, data) => {
  return fetch({
    url: `/api/v1/event-crawlers/${eventCrawlerId}`,
    method: 'PATCH',
    data
 })
}

export const updateEventCrawlers: apiTypes.UpdateEventCrawlers = (data) => {
  return fetch({
    url: `/api/v1/event-crawlers`,
    method: 'PATCH',
    data
  })
}

export const stopEventCrawlers: apiTypes.StopEventCrawlers = async (eventCrawlerIds) => {
  const data = formatEventCrawlersBulkUpdateBody(eventCrawlerIds, {
    status: CRAWLER_STATUSES.INACTIVE
  })

  if (!data) {
    return 0
  }

  return fetch({
    url: `/api/v1/event-crawlers`,
    method: 'PATCH',
    data
  })
}

export const startEventCrawlers: apiTypes.StartEventCrawlers = async (eventCrawlerIds) => {
  const data = formatEventCrawlersBulkUpdateBody(eventCrawlerIds, {
    status: CRAWLER_STATUSES.WAITING
  })

  if (!data) {
    return 0
  }

  return fetch({
    url: `/api/v1/event-crawlers`,
    method: 'PATCH',
    data
  })
}