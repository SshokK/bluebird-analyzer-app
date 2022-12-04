import type {SportSchema} from "features/sports/sports.api.types";
import type {SportFamilySchema} from "features/sport-families/sportFamilies.api.types";

export type TeamsProps = {
  sportFamilyId: SportFamilySchema['id'];
  sportId: SportSchema['id'] | null;
}