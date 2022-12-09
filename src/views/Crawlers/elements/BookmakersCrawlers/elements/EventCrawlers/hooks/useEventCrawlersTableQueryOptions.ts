import type {EventCrawlersProps} from "../EventCrawlers.types";
import type {EventCrawlerSchema} from "features/event-crawlers/eventCrawlers.api.types";

import {QUERY_KEYS} from "constants/queries.constants";

import * as evnetCrawlersApi from "features/event-crawlers/eventCrawlers.api";
import * as eventCrawlersApiSelectors from "features/event-crawlers/eventCrawlers.api.selectors";

export const useEventCrawlersTableQueryOptions = ({ props }: {
  props: Pick<EventCrawlersProps, 'bookmakerId'>
}) => {
  return {
    queryKey: [QUERY_KEYS.EVENT_CRAWLERS, {
      bookmakerId: props.bookmakerId
    }],
    queryFn: () => evnetCrawlersApi.fetchEventCrawlers({
      bookmakerId: props.bookmakerId as EventCrawlerSchema['BookmakerId'],
      limit: 10,
      offset: 0
    }),
    select: eventCrawlersApiSelectors.formatEventCrawlersForTable,
    enabled: Boolean(props.bookmakerId)
  }
}