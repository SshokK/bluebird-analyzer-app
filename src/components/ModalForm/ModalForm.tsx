import type {ModalFormProps} from "./ModalForm.types";
import type {ComponentProps, FC} from 'react';
import React from 'react';
import {Modal} from "../Modal";
import {useModalFormData, useModalFormHandlers} from "./hooks";
import {MODAL_FORM_COMPONENTS } from "./ModalForm.constants";
import './modal-form.scss';

export const ModalForm:FC<ModalFormProps> = ({
  size,
  title,
  isOpen,
  fields,
  shouldEnableAutoComplete,
  onClose,
  onSubmit,
  classNames
}) => {
  const { localState, localActions } = useModalFormData({ fields });

  const handlers = useModalFormHandlers({
    props: {
      onSubmit,
      onClose
    },
    localState,
    localActions
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
      classNames={{
        body: "BB-modal-form__body",
        ...classNames
    }}
    >
      {Object.entries(localState.fields).map(([fieldKey, field]) => {
        const Component = MODAL_FORM_COMPONENTS[field.type];

        return (
          <Component
            key={fieldKey}
            label={field.label}
            value={field.value as ComponentProps<typeof Component>['value']}
            onChange={handlers.handleFieldChange(fieldKey)}
            shouldEnableAutoComplete={shouldEnableAutoComplete}
          />
        )
      })}
    </Modal>
  )
}