import type {ModalFormProps} from "../ModalForm.types";

import {MODAL_FORM_DEFAULT_VALUES} from "../ModalForm.constants";

export const getInitialFields = (fields: ModalFormProps['fields']): ModalFormProps['fields'] => {
  return Object.fromEntries(Object.entries(fields).map(([fieldKey, field]) => [fieldKey, {
    ...field,
    value: field.value ?? MODAL_FORM_DEFAULT_VALUES[field.type]
  }]));
}