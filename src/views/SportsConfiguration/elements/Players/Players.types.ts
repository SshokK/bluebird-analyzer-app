import type {SportFamilySchema} from "features/sport-families/sportFamilies.api.types";

export type PlayersProps = {
  sportFamilyId: SportFamilySchema['id'] | null;
}