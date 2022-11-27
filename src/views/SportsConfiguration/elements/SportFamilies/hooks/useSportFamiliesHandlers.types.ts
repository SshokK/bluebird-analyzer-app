import type {SportFamilySchema} from "features/sport-families/sportFamilies.api.types";
import type {ModalFormProps} from "components";

export type SportFamiliesHandlers = {
  handleModalAddModalSubmit: Required<ModalFormProps>['onSubmit'];
  handleModalEditModalSubmit: Required<ModalFormProps>['onSubmit'];
  handleSportFamilyDelete: (sportFamilyId: SportFamilySchema['id']) => () => void;
  handleSportFamilyClick: (sportFamilyId: SportFamilySchema['id']) => () => void;
}