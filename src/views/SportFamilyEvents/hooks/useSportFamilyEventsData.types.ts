import type {URL_PARAMS} from "constants/global.constants";

export type SportEventsURLParams = {
  [URL_PARAMS.SPORT_FAMILY_ID]: string;
}

export type SportEventsFormattedData = {
  sportFamilyId: number | null;
}

export type SportEventsData = {
  formattedData: SportEventsFormattedData;
}