import type {FC} from "react";
import type {SelectorsModalProps} from "./SelectorsModal.types";

import React from 'react';
import {Modal, MODAL_SIZES} from "../Modal";
import {Selectors, Legend} from "./elements";
import {useSelectorsModalData} from "./hooks";
import './selectors-modal.scss';

export const SelectorsModal: FC<SelectorsModalProps> = ({
  isOpen,
  isEditable,
  crawlerId,
  onClose
}) => {
  const { localState, localActions } = useSelectorsModalData();

  return (
    <Modal
      title={
        localState.crawlerName
          ? `${localState.crawlerName} selectors`
          : 'Selectors'
      }
      isLoading={localState.isLoading}
      isOpen={isOpen}
      size={MODAL_SIZES.LARGE}
      onClose={onClose}
      shouldRenderFooter
      isSubmitDisabled={!isEditable || !localState.areAllSelectorsValid}
      footerElements={<Legend />}
      classNames={{
        content: 'BB-selectors-modal__modal',
        body: 'BB-selectors-modal__container'
      }}
    >
      <Selectors
        crawlerId={crawlerId}
        isEditable={isEditable}
        onCrawlerNameChange={localActions.setCrawlerName}
        onIsLoadingChange={localActions.setIsLoading}
        onInvalidCrawlersChange={localActions.setAreAllSelectorsValid}
      />
    </Modal>
  )
}