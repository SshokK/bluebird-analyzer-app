import type {ModalFormProps} from "../ModalForm.types";
import type {ModalFormData} from "./useModalFormData.types";

import {useMemo, useState} from "react";

import * as helpers from "./useModalFormData.helpers";

export const useModalFormData = (props: Pick<ModalFormProps, 'fields'>): ModalFormData => {
  const [fields, setFields] = useState(helpers.getInitialFields(props.fields));
  const [isLoading, setIsLoading] = useState(false)

  const localState: ModalFormData['localState'] = {
    fields,
    isLoading
  }

  const localActions: ModalFormData['localActions'] = useMemo(() => ({
    setFields,
    setIsLoading
  }), []);

  const formattedData: ModalFormData['formattedData'] = useMemo(() => {
    const areAllRequiredFieldsFilled = Object.values(fields)
      .filter(field => field.isRequired)
      .every(field => Array.isArray(field.value) ? field.value.length : Boolean(field.value));

    return {
      areAllRequiredFieldsFilled
    }
  }, [fields])

  return {
    localState,
    localActions,
    formattedData
  }
}