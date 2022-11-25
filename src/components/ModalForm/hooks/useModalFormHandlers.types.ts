export type ModalFormHandlers = {
  handleSubmit: () => Promise<void>;
  handleClose: () => void;
  handleFieldChange: (key: string) => (value: unknown) => void;
}