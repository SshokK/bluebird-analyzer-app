import type {EventCrawlersProps} from "../EventCrawlers.types";
import type {TableProps} from "components";

import {QUERY_KEYS} from "constants/queries.constants";

import * as evnetCrawlersApi from "features/event-crawlers/eventCrawlers.api";
import * as eventCrawlersApiSelectors from "features/event-crawlers/eventCrawlers.api.selectors";

export const useEventCrawlersTableQueryOptions = ({ props }: {
  props: Pick<EventCrawlersProps, 'bookmakerId'>
}): Required<TableProps>['queryOptions'] => {
  return {
    queryKey: [QUERY_KEYS.EVENT_CRAWLERS, {
      bookmakerId: props.bookmakerId
    }],
    queryFn: evnetCrawlersApi.fetchEventCrawlers,
    select: eventCrawlersApiSelectors.getEventCrawlersForTable,
    enabled: Boolean(props.bookmakerId)
  }
}