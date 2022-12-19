import type {EventCrawlerSchema} from "features/event-crawlers/eventCrawlers.api.types";
import type {Dispatch, SetStateAction} from "react";

export type EventCrawlersLocalState = {
  bookmakerId: EventCrawlerSchema['BookmakerId'] | null;
}

export type EventCrawlersLocalActions = {
  setBookmakerId: Dispatch<SetStateAction<EventCrawlersLocalState['bookmakerId']>>
}

export type EventCrawlersData = {
  localState: EventCrawlersLocalState;
  localActions: EventCrawlersLocalActions;
}