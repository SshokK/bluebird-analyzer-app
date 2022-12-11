import type {ActionsProps} from "components";
import type {CrawlerSchema} from "features/crawlers/crawlers.api.types";
import type {ActionsCellProps} from "../ActionsCell.types";

import React from "react";
import {ICON_BUTTON_SIZES, IconDelete, IconEdit, MODAL_FORM_FIELD_TYPES, MODAL_SIZES} from "components";
import {EVENT_CRAWLER_ACTIONS, MODAL_FIELD_KEYS} from "../ActionsCell.constants";
import {EVENT_CRAWLERS_TABLE_COLUMN_KEYS} from "../../../EventCrawlers.constants";
import {useActionsCellMutations} from "./useActionsCellMutations";

export const useActionsCellActions = ({
  props,
  mutations
}: {
  props: Pick<ActionsCellProps, 'row'>
  mutations: ReturnType<typeof useActionsCellMutations>
}): Required<ActionsProps>['actions'] => {
  return {
    [EVENT_CRAWLER_ACTIONS.EDIT]: {
      icon: <IconEdit />,
      iconSize: ICON_BUTTON_SIZES.SMALL,
      shouldShowModal: true,
      modalTitle: 'Edit crawler',
      modalSize: MODAL_SIZES.SMALL,
      modalFields: {
        [MODAL_FIELD_KEYS.NAME]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          label: 'name',
          value: props.row.getValue(EVENT_CRAWLERS_TABLE_COLUMN_KEYS.NAME),
          isRequired: true
        },
        [MODAL_FIELD_KEYS.TARGET_URL]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          label: 'target URL',
          value: props.row.getValue(EVENT_CRAWLERS_TABLE_COLUMN_KEYS.TARGET_URL),
          isRequired: true
        }
      },
      onSubmit: (fields) => mutations.updateEventCrawler.mutate({
        name: fields[MODAL_FIELD_KEYS.NAME]?.value as CrawlerSchema['name'],
        targetUrl: fields[MODAL_FIELD_KEYS.TARGET_URL]?.value as CrawlerSchema['targetUrl']
      })
    },
    [EVENT_CRAWLER_ACTIONS.DELETE]: {
      icon: <IconDelete />,
      iconSize: ICON_BUTTON_SIZES.SMALL,
      shouldShowModal: true,
      modalTitle: 'Are you sure',
      onSubmit: () => mutations.deleteEventCrawler.mutate()
    }
  }
}