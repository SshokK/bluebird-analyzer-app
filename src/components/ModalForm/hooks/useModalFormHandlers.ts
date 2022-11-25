import type {ModalFormData} from "./useModalFormData.types";
import type {ModalFormProps} from "../ModalForm.types";
import type {ModalFormHandlers} from "./useModalFormHandlers.types";

export const useModalFormHandlers = ({
  props,
  localState,
  localActions
}: {
  props: Pick<ModalFormProps, 'onSubmit' | 'onClose'>
  localState: ModalFormData['localState'];
  localActions: ModalFormData['localActions'];
}): ModalFormHandlers => {
  const handleSubmit: ModalFormHandlers['handleSubmit'] = async () => {
    try {
      localActions.setIsLoading(true);

      await props.onSubmit?.(localState.fields);

      props.onClose?.(localState.fields);
    } catch (e) {
      console.error(e);
    } finally {
      localActions.setIsLoading(false);
    }
  }

  const handleClose: ModalFormHandlers['handleClose'] = () => {
    props.onClose?.(localState.fields);
  }

  const handleFieldChange: ModalFormHandlers['handleFieldChange'] = (key) => (value) => {
    localActions.setFields(fields => ({
      ...fields,
      [key]: {
        ...fields[key],
        value
      }
    }))
  }

  return {
    handleSubmit,
    handleClose,
    handleFieldChange
  }
}