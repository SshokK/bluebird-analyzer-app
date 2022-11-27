import type {EventSchema} from "../events/events.api.types";
import type {CoefficientSchema} from "../coefficients/coefficients.api.types";
import type {SportFamilySchema} from "../sport-families/sportFamilies.api.types";

export type PlayerSchema = {
  id: number;
  createdAt: string;
  name: string;
  updatedAt: string;
  SportFamilyId: SportFamilySchema['id']
}

export type EventPlayerSchema = {
  id: number;
  EventId: EventSchema['id'];
  PlayerId: PlayerSchema['id'];
  createdAt: string;
  updatedAt: string;
}

export type EventPlayerCoefficientSchema = {
  id: number;
  EventPlayerId: EventPlayerSchema['id'];
  CoefficientId: CoefficientSchema['id'];
  createdAt: string;
  updatedAt: string;
}