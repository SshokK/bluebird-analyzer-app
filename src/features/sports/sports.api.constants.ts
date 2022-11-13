import type {SportSchema} from "./sports.api.types";

export const SORT_FIELDS: Record<string, keyof SportSchema> = {
  ID: 'id',
  NAME: 'name',
  CREATED_AT: 'createdAt',
  UPDATED_AT: 'updatedAt'
}