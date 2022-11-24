import type {SportFamilySchema} from "features/sport-families/sportFamilies.api.types";

export type SportFamiliesHandlers = {
  handleAddModalToggle: (isOpen: boolean) => () => void;
  handleSportFamilyClick: (sportFamilyId: SportFamilySchema['id']) => () => void;
}