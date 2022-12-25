import type {ModalFormData} from "./useModalFormData.types";
import type {ModalFormProps} from "../ModalForm.types";
import type {ModalFormHandlers} from "./useModalFormHandlers.types";

import {VALIDATORS} from "./useModalFormHandlers.helpers";

import isEqual from "lodash.isequal";

import {useCallback} from "react";
import {usePreviousValue} from "utils/hooks";

export const useModalFormHandlers = ({
  props,
  localState,
  localActions
}: {
  props: Pick<ModalFormProps, 'fields' | 'onSubmit' | 'onClose'>
  localState: ModalFormData['localState'];
  localActions: ModalFormData['localActions'];
}): ModalFormHandlers => {
  const prevProps = usePreviousValue(props);

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

  const handleFieldsPropChange: ModalFormHandlers['handleFieldsPropChange'] = useCallback(() => {
    if (props.fields && !isEqual(prevProps, props)) {
      localActions.setFields(props.fields)
    }
  }, [localActions, prevProps, props])

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
    handleFieldsPropChange,
    handleFieldChange
  }
}