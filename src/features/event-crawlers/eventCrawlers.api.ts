import type {FetchEventCrawlers} from "./eventCrawlers.api.types";

import {fetch} from "../../fetch";

export const fetchEventCrawlers: FetchEventCrawlers = async (params) => {
  return fetch({
    url: '/api/v1/event-crawlers',
    method: 'GET',
    params
  })
}

export const createEventCrawler = () => {

}