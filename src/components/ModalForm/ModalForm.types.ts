import type {MODAL_FORM_FIELD_TYPES} from "./ModalForm.constants";
import type {ReactNode} from "react";
import type {ModalProps} from "../Modal";

export type ModalFormField = {
  type: MODAL_FORM_FIELD_TYPES;
  value?: unknown;
  label?: string;
}

export type ModalFormProps = {
  title?: ReactNode;
  size?: ModalProps['size'];
  isOpen: boolean;
  fields: Record<string, ModalFormField>;
  shouldEnableAutoComplete?: boolean;
  onSubmit?: (fields: Record<string, ModalFormField>) => Promise<void> | void;
  onClose?: (fields: Record<string, ModalFormField>) => void;
  classNames?: ModalProps['classNames'];
}