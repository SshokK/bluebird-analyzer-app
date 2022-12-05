import type {ModalFormFieldComponent, ModalFormFieldProps} from "./ModalForm.types";

import {TextField} from "../TextField";
import {NumberField} from "../NumberField";
import {Select} from "../Select";
import {Dropzone} from "../Dropzone";
import {DROPZONE_FILE_TYPES} from "../Dropzone/Dropzone.constants";

export enum MODAL_FORM_FIELD_TYPES {
  TEXT = 'text',
  NUMBER = 'number',
  SELECT = 'select',
  IMAGE = 'image'
}

export const MODAL_FORM_COMPONENTS: Record<MODAL_FORM_FIELD_TYPES, ModalFormFieldComponent> = {
  [MODAL_FORM_FIELD_TYPES.TEXT]: TextField,
  [MODAL_FORM_FIELD_TYPES.NUMBER]: NumberField,
  [MODAL_FORM_FIELD_TYPES.SELECT]: Select,
  [MODAL_FORM_FIELD_TYPES.IMAGE]: Dropzone
}

export const MODAL_FORM_COMPONENT_PROPS: Record<MODAL_FORM_FIELD_TYPES, ModalFormFieldProps> = {
  [MODAL_FORM_FIELD_TYPES.TEXT]: {},
  [MODAL_FORM_FIELD_TYPES.NUMBER]: {},
  [MODAL_FORM_FIELD_TYPES.SELECT]: {},
  [MODAL_FORM_FIELD_TYPES.IMAGE]: {
    fileType: DROPZONE_FILE_TYPES.IMAGES
  }
}

export const MODAL_FORM_DEFAULT_VALUES: Record<MODAL_FORM_FIELD_TYPES, unknown> = {
  [MODAL_FORM_FIELD_TYPES.TEXT]: "",
  [MODAL_FORM_FIELD_TYPES.NUMBER]: 0,
  [MODAL_FORM_FIELD_TYPES.SELECT]: [],
  [MODAL_FORM_FIELD_TYPES.IMAGE]: []
}