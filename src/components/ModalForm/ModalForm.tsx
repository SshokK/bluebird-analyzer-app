import type {ModalFormProps} from "./ModalForm.types";
import type { FC} from 'react';

import React from 'react';
import {Modal} from "../Modal";
import {useModalFormData, useModalFormHandlers, useModalFormLifecycle} from "./hooks";
import {MODAL_FORM_COMPONENT_PROPS, MODAL_FORM_COMPONENTS} from "./ModalForm.constants";
import './modal-form.scss';

export const ModalForm:FC<ModalFormProps> = ({
  size,
  title,
  isOpen,
  fields,
  shouldEnableAutoComplete,
  onClose,
  onSubmit,
  classNames,
  children
}) => {
  const { localState, localActions, formattedData } = useModalFormData({ fields });

  const handlers = useModalFormHandlers({
    props: {
      fields,
      onSubmit,
      onClose
    },
    localState,
    localActions
  });

  useModalFormLifecycle({
    onFieldsPropChange: handlers.handleFieldsPropChange
  })

  return (
    <Modal
      size={size}
      title={title}
      isOpen={isOpen}
      onClose={handlers.handleClose}
      shouldRenderFooter
      isLoading={localState.isLoading}
      onSubmit={handlers.handleSubmit}
      isSubmitDisabled={!formattedData.areAllRequiredFieldsFilled}
      classNames={{
        body: "BB-modal-form__body",
        ...classNames
    }}>
      {
        Boolean(Object.keys(localState.fields).length) && Object.entries(localState.fields).map(([fieldKey, field]) => {
          const Component = MODAL_FORM_COMPONENTS[field.type];
          const props = {
            ...MODAL_FORM_COMPONENT_PROPS[field.type],
            ...field.props
          };

          return (
            <Component
              {...props as Record<string, unknown>}
              key={fieldKey}
              label={field.label}
              value={field.value as any}
              isRequired={field.isRequired}
              shouldEnableAutoComplete={shouldEnableAutoComplete}
              onChange={handlers.handleFieldChange({
                fieldKey: fieldKey,
                field
              })}
            />
          )
      })}
      {children}
    </Modal>
  )
}