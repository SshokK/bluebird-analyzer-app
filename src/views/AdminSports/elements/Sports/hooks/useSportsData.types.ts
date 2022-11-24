import type {SportSchema} from "features/sports/sports.api.types";

export type SportsFormattedData = {
  sportId: SportSchema['id'] | null
}

export type SportData = {
  formattedData: SportsFormattedData;
}