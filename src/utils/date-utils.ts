import * as dateFns from 'date-fns';
import {DATE_FORMATS} from "../constants/global.constants";

export const formatDate = ({
  date,
  format = DATE_FORMATS.LOCALIZED_DATE
}: {
  date: unknown,
  format?: DATE_FORMATS;
}): string => {
  try {
    return dateFns.format(
      date instanceof Date ? date : dateFns.parseISO(String(date)),
      format
    )
  } catch {
    return 'Invalid Date'
  }
}

export const isAfter = ({
  dateA,
  dateB
}: {
  dateA: unknown;
  dateB: unknown;
}): boolean => {
  try {
    return dateFns.isAfter(
      dateA instanceof Date ? dateA : dateFns.parseISO(String(dateA)),
      dateB instanceof Date ? dateB : dateFns.parseISO(String(dateB)),
    );
  } catch {
    return false
  }
}

export const isBefore = ({
  dateA,
  dateB
}: {
  dateA: unknown;
  dateB: unknown;
}): boolean => {
  try {
    return dateFns.isBefore(
      dateFns.parseISO(String(dateA)),
      dateFns.parseISO(String(dateB))
    );
  } catch {
    return false
  }
}