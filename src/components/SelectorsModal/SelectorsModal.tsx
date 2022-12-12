import type {FC} from "react";
import type {SelectorsModalProps} from "./SelectorsModal.types";

import React from 'react';
import {Modal, MODAL_SIZES} from "../Modal";
import {FlowChart, FLOWCHART_DIRECTION} from "../FlowChart";
import {useSelectorsModalMutations, useSelectorsModalQueries} from "./hooks";
import './selectors-modal.scss';

export const SelectorsModal: FC<SelectorsModalProps> = ({
  isOpen,
  crawlerId,
  onClose
}) => {
  const queries = useSelectorsModalQueries({
    props: {
      crawlerId,
      isOpen
    }
  });

  const mutations = useSelectorsModalMutations({
    props: {
      crawlerId
    }
  })

  return (
    <Modal
      title={
        queries.fetchCrawler.data
          ? `${queries.fetchCrawler?.data?.name} selectors`
         : 'Selectors'
      }
      isLoading={
        queries.fetchCrawler.isLoading ||
        queries.fetchCrawlerPageSelectors.isLoading
      }
      isOpen={isOpen}
      size={MODAL_SIZES.LARGE}
      onClose={onClose}
      shouldRenderFooter
      classNames={{
        content: 'BB-selectors-modal__modal',
        body: 'BB-selectors-modal__container'
      }}
    >
      <div className="BB-selectors-modal__chart-container">
        <FlowChart
          nodes={queries.fetchCrawlerPageSelectors.data}
          direction={FLOWCHART_DIRECTION.TOP_TO_BOTTOM}
        />
      </div>
    </Modal>
  )
}