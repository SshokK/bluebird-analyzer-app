import type {MODAL_FORM_FIELD_TYPES} from "./ModalForm.constants";
import type {ComponentProps, ReactNode} from "react";
import type {ModalProps} from "../Modal";
import type {TextField} from "../TextField";
import type {NumberField} from "../NumberField";
import type {Select} from "../Select";
import type {Dropzone} from "../Dropzone";
import type {DataSelect} from "../DataSelect";

export type ModalFormFieldComponent = typeof TextField | typeof NumberField | typeof Select | typeof Dropzone | typeof DataSelect;
export type ModalFormFieldProps = ComponentProps<ModalFormFieldComponent>

export type ModalFormField = {
  type: MODAL_FORM_FIELD_TYPES;
  value?: unknown;
  label?: string;
  props?: ModalFormFieldProps;
  isRequired?: boolean;
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