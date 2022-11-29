import type {ModalFormField} from "../ModalForm.types";

export type ModalFormHandlers = {
  handleSubmit: () => Promise<void>;
  handleClose: () => void;
  handleFieldChange: (data: {
    fieldKey: string;
    field: ModalFormField;
  }) => (value: unknown) => void;
}