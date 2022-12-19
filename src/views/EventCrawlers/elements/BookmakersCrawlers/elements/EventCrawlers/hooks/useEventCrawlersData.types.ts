import type {Dispatch, SetStateAction} from "react";
import type {EventCrawlerSchema} from "features/event-crawlers/eventCrawlers.api.types";

export type EventCrawlersLocalState = {
  selectedRowKeys: EventCrawlerSchema['id'][]
}

export type EventCrawlersLocalActions = {
  setSelectedRowKeys: Dispatch<SetStateAction<EventCrawlersLocalState['selectedRowKeys']>>
}

export type EventCrawlersData = {
  localState: EventCrawlersLocalState;
  localActions: EventCrawlersLocalActions;
}