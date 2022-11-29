import type {ModalFormData} from "./useModalFormData.types";
import type {ModalFormProps} from "../ModalForm.types";
import type {ModalFormHandlers} from "./useModalFormHandlers.types";
import {VALIDATORS} from "./useModalFormHandlers.helpers";

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

  const handleFieldChange: ModalFormHandlers['handleFieldChange'] = ({ fieldKey, field }) => (value) => {
    const validatedValue = VALIDATORS[field.type]({ field, value });

    localActions.setFields(fields => ({
      ...fields,
      [fieldKey]: {
        ...fields[fieldKey],
        value: validatedValue
      }
    }))
  }

  return {
    handleSubmit,
    handleClose,
    handleFieldChange
  }
}