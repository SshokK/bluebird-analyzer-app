import type {SportSchema} from "features/sports/sports.api.types";
import type {SportFamilySchema} from "features/sport-families/sportFamilies.api.types";

export type SportsFormattedData = {
  sportFamilyId: SportFamilySchema['id'] | null;
  sportId: SportSchema['id'] | null
}

export type SportsData = {
  formattedData: SportsFormattedData;
}