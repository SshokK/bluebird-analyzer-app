import type { IconButtonProps, ModalFormProps} from "components/index";

export type Action = {
  iconType?: IconButtonProps['type'];
  icon?: IconButtonProps['icon'];
  iconSize?: IconButtonProps['size'];
  modalTitle?: ModalFormProps['title'];
  modalSize?: ModalFormProps['size'];
  modalFields?: ModalFormProps['fields'];
  onSubmit?: ModalFormProps['onSubmit'];
  onClose?: ModalFormProps['onClose'];
  isDisabled?: boolean;
}

export type ActionsProps = {
  actions: Record<string, Action>;
}