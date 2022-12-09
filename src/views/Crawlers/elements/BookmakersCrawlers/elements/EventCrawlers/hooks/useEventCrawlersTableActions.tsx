import type {ActionsProps} from "components";
import type {CrawlerSchema} from "features/crawlers/crawlers.api.types";
import type {EventCrawlerSchema} from "features/event-crawlers/eventCrawlers.api.types";
import type {EventCrawlersData} from "./useEventCrawlersData.types";

import {ACTION_KEYS} from "../EventCrawlers.constants";
import {DATA_TYPES, IconAdd, IconPlay, IconStop, MODAL_FIELDS, MODAL_FORM_FIELD_TYPES, MODAL_SIZES} from "components";

import {useEventCrawlersMutations} from "./useEventCrawlersMutations";

export const useEventCrawlersTableActions = ({
  localState,
  mutations
}: {
  localState: EventCrawlersData['localState'];
  mutations: ReturnType<typeof useEventCrawlersMutations>
}): ActionsProps['actions'] => {
  return {
    [ACTION_KEYS.CREATE]: {
      icon: <IconAdd />,
      shouldShowModal: true,
      modalTitle: `Add event crawler`,
      modalSize: MODAL_SIZES.SMALL,
      modalFields: {
        [MODAL_FIELDS.NAME]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          label: "name",
          isRequired: true
        },
        [MODAL_FIELDS.TARGET_URL]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          label: "target URL",
          isRequired: true
        },
        [MODAL_FIELDS.REGION]: {
          type: MODAL_FORM_FIELD_TYPES.DATA_SELECT,
          label: "region",
          isRequired: true,
          props: {
            dataType: DATA_TYPES.REGIONS
          }
        },
        [MODAL_FIELDS.SPORT]: {
          type: MODAL_FORM_FIELD_TYPES.DATA_SELECT,
          label: "sport",
          isRequired: true,
          props: {
            dataType: DATA_TYPES.SPORTS
          }
        }
      },
      onSubmit: (fields) => mutations.createEventCrawler.mutate({
        name: fields[MODAL_FIELDS.NAME]?.value as CrawlerSchema['name'],
        targetUrl: fields[MODAL_FIELDS.TARGET_URL]?.value as CrawlerSchema['targetUrl'],
        regionId: (fields[MODAL_FIELDS.REGION]?.value as unknown[])?.[0] as CrawlerSchema['RegionId'],
        sportId: (fields[MODAL_FIELDS.SPORT]?.value as unknown[])?.[0] as EventCrawlerSchema['SportId']
      })
    },
    [ACTION_KEYS.BULK_MAKE_INACTIVE]: {
      icon: <IconStop />,
      isDisabled: !localState.selectedRowKeys.length,
      shouldShowModal: true,
      modalTitle: `Are you sure you want to stop ${localState.selectedRowKeys.length} event crawlers?`,
      modalSize: MODAL_SIZES.SMALL,
      onSubmit: () => mutations.stopEventCrawlers.mutate(localState.selectedRowKeys)
    },
    [ACTION_KEYS.BULK_MAKE_ACTIVE]: {
      icon: <IconPlay />,
      isDisabled: !localState.selectedRowKeys.length,
      onClick: () => mutations.startEventCrawlers.mutate(localState.selectedRowKeys)
    }
  }
}