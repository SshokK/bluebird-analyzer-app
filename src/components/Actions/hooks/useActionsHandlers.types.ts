import type {ModalFormProps} from "../../ModalForm";

export type ActionsHandlers = {
  handleClick: (actionKey: string) => () => void;
  handleModalClose: Required<ModalFormProps>['onClose'];
  handleModalSubmit: (actionKey: String) => Required<ModalFormProps>['onSubmit']
}