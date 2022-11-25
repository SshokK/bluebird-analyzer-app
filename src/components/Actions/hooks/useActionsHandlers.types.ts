import type {ModalFormProps} from "components/index";

export type ActionsHandlers = {
  handleModalOpen: (actionKey: string) => () => void;
  handleModalClose: Required<ModalFormProps>['onClose'];
  handleModalSubmit: (actionKey: String) => Required<ModalFormProps>['onSubmit']
}