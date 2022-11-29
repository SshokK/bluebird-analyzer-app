import type {ModalFormField} from "../ModalForm.types";

import {MODAL_FORM_FIELD_TYPES} from "../ModalForm.constants";

import * as utils from "utils";

export const VALIDATORS: Record<MODAL_FORM_FIELD_TYPES, ({ field, value }: {
  field: ModalFormField,
  value: unknown
}) => unknown> = {
  [MODAL_FORM_FIELD_TYPES.TEXT]: ({ field, value }) => {
    if (!utils.isString(value)) {
      return field.value
    }

    return value
  },
  [MODAL_FORM_FIELD_TYPES.NUMBER]: ({field, value }) => {
    if (!utils.isNumber(value)) {
      return field.value
    }

    return Number(value)
  }
}