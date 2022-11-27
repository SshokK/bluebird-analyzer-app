import type {QUERY_PARAMS} from "./SportsConfiguration.constants";
import type {SportFamilySchema} from "features/sport-families/sportFamilies.api.types";
import type {SportSchema} from "features/sports/sports.api.types";

export type SportsConfigurationQueryParams = {
  [QUERY_PARAMS.SPORT_FAMILY_ID]: SportFamilySchema['id'] | null;
  [QUERY_PARAMS.SPORT_ID]: SportSchema['id'] | null
}