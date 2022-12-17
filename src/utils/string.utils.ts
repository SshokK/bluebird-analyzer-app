import type {LocalUniqueId} from "../types/global.types";

import { v4 as uuid } from 'uuid';

export const isString = (value: unknown): boolean => {
  return typeof value === 'string'
}

export const getRandomId = (): LocalUniqueId => {
  return uuid()
}