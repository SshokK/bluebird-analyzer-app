import type {EventCrawlerSchema} from "./eventCrawlers.api.types";

import * as eventCrawlersApi from "./eventCrawlers.api";

export const formatEventCrawlersBulkUpdateBody = (
  eventCrawlerIds: EventCrawlerSchema['id'][],
  body: Parameters<typeof eventCrawlersApi.updateEventCrawlers>[0][
    keyof Parameters<typeof eventCrawlersApi.updateEventCrawlers>[0]
  ]
): Parameters<typeof eventCrawlersApi.updateEventCrawlers>[0] | null => {
  if (!eventCrawlerIds.length) {
    return null
  }

  return eventCrawlerIds.reduce((formattedBody, eventCrawlerId) => {
    return {
      ...formattedBody,
      [eventCrawlerId]: body
    }
  }, {} as Parameters<typeof eventCrawlersApi.updateEventCrawlers>[0]);
}