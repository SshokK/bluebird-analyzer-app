import type {SportSchema} from "features/sports/sports.api.types";

export type SportsHandlers = {
  handleSportClick: (sportId: SportSchema['id']) => () => void;
}