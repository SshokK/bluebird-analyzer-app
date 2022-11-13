import type { CoefficientSchema } from "./coefficients.api.types";

export const SORT_FIELDS: Record<string, keyof CoefficientSchema> = {
  ID: 'id',
  VALUE: 'value',
  CREATED_AT: 'createdAt',
  UPDATED_AT: 'updatedAt'
}