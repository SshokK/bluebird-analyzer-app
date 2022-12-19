import * as apiTypes from "./crawlers.api.types";

import {fetch} from "fetch";

export const fetchCrawler: apiTypes.FetchCrawlers = (crawlerId) => {
  return fetch({
    url: `/api/v1/crawlers/${crawlerId}`,
    method: 'GET'
  })
}
