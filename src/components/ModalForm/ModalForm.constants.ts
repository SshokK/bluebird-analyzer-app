import type {ComponentProps} from "react";

import { TextField} from "../TextField";
import {NumberField} from "../NumberField";

export enum MODAL_FORM_FIELD_TYPES {
  TEXT = 'text',
  NUMBER = 'number'
}

export const MODAL_FORM_COMPONENTS: Record<MODAL_FORM_FIELD_TYPES, typeof TextField | typeof NumberField> = {
  [MODAL_FORM_FIELD_TYPES.TEXT]: TextField,
  [MODAL_FORM_FIELD_TYPES.NUMBER]: NumberField
}

export const MODAL_FORM_COMPONENT_PROPS: Record<MODAL_FORM_FIELD_TYPES, ComponentProps<typeof TextField | typeof NumberField>> = {
  [MODAL_FORM_FIELD_TYPES.TEXT]: {},
  [MODAL_FORM_FIELD_TYPES.NUMBER]: {}
}

export const MODAL_FORM_DEFAULT_VALUES: Record<MODAL_FORM_FIELD_TYPES, unknown> = {
  [MODAL_FORM_FIELD_TYPES.TEXT]: "",
  [MODAL_FORM_FIELD_TYPES.NUMBER]: 0
}