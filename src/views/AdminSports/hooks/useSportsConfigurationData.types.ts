import type {SportFamilySchema} from "features/sport-families/sportFamilies.api.types";
import type {SportSchema} from "features/sports/sports.api.types";

export type SportsConfigurationFormattedData = {
  sportFamilyId: SportFamilySchema['id'] | null;
  sportId: SportSchema['id'] | null;
}

export type SportsConfigurationData = {
  formattedData: SportsConfigurationFormattedData;
}