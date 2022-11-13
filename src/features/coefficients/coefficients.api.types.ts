import type { SORT_ORDERS } from "constants/global.constants";
import type { BookmakerSchema } from "../bookmakers/bookmakers.api.types";
import type { EventPlayerCoefficientSchema } from "../players/players.api.types";
import type { EventPlayerSchema } from "../players/players.api.types";

export type CoefficientSchema = {
  id: number;
  value: number;
  createdAt: Date;
  updatedAt: Date;
  BookmakerId: BookmakerSchema['id'];
}

export type FetchCoefficientsPayload = [params: {
  limit?: number;
  offset?: number;
  sortField?: keyof CoefficientSchema;
  sortOrder?: SORT_ORDERS;
  bookmakerId?: number | number[];
  playerId?: number | number[];
}];

export type FetchCoefficientsResponse = (CoefficientSchema & {
  Bookmaker: BookmakerSchema,
  EventPlayers: (EventPlayerSchema & {
    EventPlayerCoefficient: EventPlayerCoefficientSchema
  })[]
})[];

export type FetchCoefficients = (...args: FetchCoefficientsPayload) => Promise<FetchCoefficientsResponse>;