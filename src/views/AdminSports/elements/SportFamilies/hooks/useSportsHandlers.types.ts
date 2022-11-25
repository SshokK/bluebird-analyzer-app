import type {SportSchema} from "features/sports/sports.api.types";
import type {ModalFormProps} from "components";

export type SportsHandlers = {
  handleModalAddModalSubmit: Required<ModalFormProps>['onSubmit'];
  handleModalEditModalSubmit: Required<ModalFormProps>['onSubmit'];
  handleSportDelete: (sportId: SportSchema['id']) => () => void;
  handleSportClick: (sportId: SportSchema['id']) => () => void;
}