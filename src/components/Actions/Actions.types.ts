import type {IconButtonGroupProps, IconButtonProps, ModalFormProps} from "components/index";

export type Action = {
  iconType?: IconButtonProps['type'];
  icon?: IconButtonProps['icon'];
  iconSize?: IconButtonProps['size'];
  shouldShowModal?: boolean;
  modalTitle?: ModalFormProps['title'];
  modalSize?: ModalFormProps['size'];
  modalFields?: ModalFormProps['fields'];
  onClick?: (action: Action) => void;
  onSubmit?: ModalFormProps['onSubmit'];
  onClose?: ModalFormProps['onClose'];
  isDisabled?: boolean;
}

export type ActionsProps = {
  actions: Record<string, Action>;
  orientation?: IconButtonGroupProps['orientation'];
  isWrapDisabled?: IconButtonGroupProps['isWrapDisabled'];
  classNames?: {
    container?: string;
  }
}