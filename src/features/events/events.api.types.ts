import type { SORT_ORDERS } from "constants/global.constants";
import type {SportSchema} from "../sports/sports.api.types";
import type {EventPlayerSchema, PlayerSchema} from "../players/players.api.types";

export type EventSchema = {
  id: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type FetchEventsPayload = [params: {
  limit?: number;
  offset?: number;
  sortField?: keyof EventSchema;
  sortOrder?: SORT_ORDERS;
  sportId?: SportSchema['id'][];
}];

export type FetchEventsResponse = (EventSchema & {
  Players: (PlayerSchema & {
    EventPlayer: EventPlayerSchema;
  })[]
})[];

export type FetchEvents = (...args: FetchEventsPayload) => Promise<FetchEventsResponse>;