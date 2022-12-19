import type {LocalUniqueId} from "../types/global.types";

import { v4 as uuid } from 'uuid';

export const isString = (value: unknown): boolean => {
  return typeof value === 'string'
}

export const getRandomId = (): LocalUniqueId => {
  return uuid()
}

export const convertCamelCaseToWords = (value: unknown): string => {
  if (typeof value !== 'string') {
    return ''
  }

  const result = value.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}