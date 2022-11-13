import type {URL_PARAMS} from "constants/global.constants";

export type SportEventsURLParams = {
  [URL_PARAMS.SPORT_ID]: string;
}

export type SportEventsFormattedData = {
  sportId: number | null;
}

export type SportEventsData = {
  formattedData: SportEventsFormattedData;
}