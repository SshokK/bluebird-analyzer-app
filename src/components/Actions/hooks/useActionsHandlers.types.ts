import type {ModalFormProps} from "../../ModalForm";
import type {DropdownProps} from "../../Dropdown";

export type ActionsHandlers = {
  handleClick: (actionKey: string) => () => void;
  handleModalClose: Required<ModalFormProps>['onClose'];
  handleDropdownClose: Required<DropdownProps>['onClose'];
  handleModalSubmit: (actionKey: String) => Required<ModalFormProps>['onSubmit']
}