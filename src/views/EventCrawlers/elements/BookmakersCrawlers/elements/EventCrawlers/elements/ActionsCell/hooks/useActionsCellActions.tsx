import type {ActionsProps} from "components";
import type {CrawlerSchema} from "features/crawlers/crawlers.api.types";
import type {ActionsCellData} from "./useActionsCellData.types";
import type {ActionsCellHandlers} from "./useActionsCellHandlers.types";

import React from "react";

import {EVENT_CRAWLER_ACTIONS, MODAL_FIELD_KEYS} from "../ActionsCell.constants";
import {
  EventCrawlerErrors,
  IconWarning,
  MODAL_FORM_FIELD_TYPES,
  MODAL_SIZES,
  useDrawer
} from "components";

import { IconDelete, IconDiagram, IconEdit } from 'components';

import {useActionsCellMutations} from "./useActionsCellMutations";

export const useActionsCellActions = ({
  formattedData,
  mutations,
  onSelectorsModalToggle
}: {
  formattedData: ActionsCellData['formattedData'];
  mutations: ReturnType<typeof useActionsCellMutations>;
  onSelectorsModalToggle: ActionsCellHandlers['handleSelectorsModalToggle']
}): Required<ActionsProps>['actions'] => {
  const drawer = useDrawer();

  return {
    ...Boolean(formattedData.isFailedCrawler) && {
      [EVENT_CRAWLER_ACTIONS.SHOW_ERRORS]: {
        icon: <IconWarning />,
        onClick: () => drawer.showDrawer(
          <EventCrawlerErrors eventCrawlerId={formattedData.row.id} />
        )
      }
    },
    [EVENT_CRAWLER_ACTIONS.EDIT_SELECTORS]: {
      icon: <IconDiagram />,
      onClick: onSelectorsModalToggle(true),
    },
    [EVENT_CRAWLER_ACTIONS.EDIT]: {
      icon: <IconEdit />,
      shouldShowModal: true,
      modalTitle: 'Edit crawler',
      modalSize: MODAL_SIZES.SMALL,
      isDisabled: formattedData.isActiveCrawler,
      modalFields: {
        [MODAL_FIELD_KEYS.NAME]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          label: 'name',
          value: formattedData.row.name,
          isRequired: true
        },
        [MODAL_FIELD_KEYS.TARGET_URL]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          label: 'target URL',
          value: formattedData.row.targetUrl,
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
      shouldShowModal: true,
      modalTitle: 'Are you sure',
      isDisabled: formattedData.isActiveCrawler,
      onSubmit: () => mutations.deleteEventCrawler.mutate()
    }
  }
}