import type {DropdownProps, GridProps, IconButtonProps, ModalFormProps, TooltipProps} from "components/index";
import type {ReactNode} from "react";
import {ICON_BUTTON_SIZES, ICON_BUTTON_TYPES} from "components/index";

export type Action = {
  iconType?: IconButtonProps['type'];
  icon?: IconButtonProps['icon'];
  iconSize?: IconButtonProps['size'];
  shouldShowModal?: boolean;
  modalTitle?: ModalFormProps['title'];
  modalSize?: ModalFormProps['size'];
  modalFields?: ModalFormProps['fields'];
  modalContent?: ModalFormProps['children'];
  shouldShowDropdown?: boolean;
  dropdownContent?: ReactNode;
  tooltip?: TooltipProps['title'];
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
  justifyContent?: GridProps['justifyContent'];
  isWrapDisabled?: GridProps['isWrapDisabled'];
  iconType?: ICON_BUTTON_TYPES;
  iconSize?: ICON_BUTTON_SIZES;
  classNames?: {
    container?: string;
  }
}