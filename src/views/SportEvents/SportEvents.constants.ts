import type {FetchEventsPayload} from "features/events/events.api.types";

export const EVENT_CARD_ANIMATION_DELAY = 500;

export const DEFAULT_PARAMS: FetchEventsPayload[0] = {
  limit: 10,
  offset: 0
}