import type {FC} from "react";
import type {AddSportFamilyModalProps} from "./AddSportFamilyModal.types";

import React from 'react';
import {Modal, TextField} from "components";
import {useAddSportFamilyModalData, useAddSportFamilyModalMutations} from "./hooks";
import './add-sport-family-modal.scss';

export const AddSportFamilyModal: FC<AddSportFamilyModalProps> = ({
  isOpen,
  onClose
}) => {
  const { localState, localActions } = useAddSportFamilyModalData();

  const mutations = useAddSportFamilyModalMutations({
    props: {
      onClose
    },
    localState,
    localActions
  });

  return (
    <Modal
      title="Create a new sport family"
      isOpen={isOpen}
      onClose={onClose}
      shouldRenderFooter
      isLoading={mutations.createSportFamily.isLoading}
      onSubmit={mutations.createSportFamily.mutateAsync}
    >
      <TextField
        label="Name"
        value={localState.name}
        onChange={localActions.setName}
        classNames={{
          container: 'BB-add-sport-family-modal__input'
        }}
      />
    </Modal>
  )
}