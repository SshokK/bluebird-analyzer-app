import type {EventSchema} from "./events.api.types";

export const SORT_FIELDS: Record<string, keyof EventSchema> = {
  ID: 'id',
  DATE: 'date',
  CREATED_AT: 'createdAt',
  UPDATED_AT: 'updatedAt'
}