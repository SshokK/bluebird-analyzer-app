import type {ComponentProps, FC} from "react";

import {TextField} from "../TextField";

export enum MODAL_FORM_FIELD_TYPES {
  TEXT = 'text'
}

export const MODAL_FORM_COMPONENTS: Record<MODAL_FORM_FIELD_TYPES, FC<ComponentProps<typeof TextField>>> = {
  [MODAL_FORM_FIELD_TYPES.TEXT]: TextField
}

export const MODAL_FORM_DEFAULT_VALUES: Record<MODAL_FORM_FIELD_TYPES, unknown> = {
  [MODAL_FORM_FIELD_TYPES.TEXT]: ""
}