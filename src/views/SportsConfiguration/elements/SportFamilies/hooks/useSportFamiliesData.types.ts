import type {SportFamilySchema} from "features/sport-families/sportFamilies.api.types";

export type SportsConfigurationFormattedData = {
  sportFamilyId: SportFamilySchema['id'] | null
}

export type SportFamiliesData = {
  formattedData: SportsConfigurationFormattedData;
}