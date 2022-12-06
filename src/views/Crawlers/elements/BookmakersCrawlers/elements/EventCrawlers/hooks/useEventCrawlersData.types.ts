import type {Dispatch, SetStateAction} from "react";
import type * as eventCrawlersApiSelectors from "features/event-crawlers/eventCrawlers.api.selectors";

export type EventCrawlersLocalState = {
  selectedRows: ReturnType<typeof eventCrawlersApiSelectors.formatEventCrawlersForTable>['rows']
}

export type EventCrawlersLocalActions = {
  setSelectedRows: Dispatch<SetStateAction<EventCrawlersLocalState['selectedRows']>>
}

export type EventCrawlersData = {
  localState: EventCrawlersLocalState;
  localActions: EventCrawlersLocalActions;
}