import type {DropdownProps, GridProps, IconButtonProps, ModalFormProps} from "components/index";
import type {ReactNode} from "react";

export type Action = {
  iconType?: IconButtonProps['type'];
  icon?: IconButtonProps['icon'];
  iconSize?: IconButtonProps['size'];
  shouldShowModal?: boolean;
  modalTitle?: ModalFormProps['title'];
  modalSize?: ModalFormProps['size'];
  modalFields?: ModalFormProps['fields'];
  shouldShowDropdown?: boolean;
  dropdownContent?: ReactNode;
  dropdownTransformOrigin?: DropdownProps['transformOrigin'];
  dropdownAnchorOrigin?: DropdownProps['anchorOrigin'];
  onClick?: (action: Action) => void;
  onSubmit?: ModalFormProps['onSubmit'];
  onClose?: ModalFormProps['onClose'];
  isDisabled?: boolean;
}

export type ActionsProps = {
  actions: Record<string, Action>;
  direction?: GridProps['direction'];
  isWrapDisabled?: GridProps['isWrapDisabled'];
  classNames?: {
    container?: string;
  }
}