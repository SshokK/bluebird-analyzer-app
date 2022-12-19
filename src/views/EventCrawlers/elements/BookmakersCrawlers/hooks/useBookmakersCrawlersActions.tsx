import type {ActionsProps} from "components";
import type {BookmakersCrawlersData} from "./useBookmakersCrawlersData.types";
import type {BookmakersCrawlersHandlers} from "./useBookmakersCrawlersHandlers.types";
import type {BookmakerSchema} from "features/bookmakers/bookmakers.api.types";

import {
  IconAdd,
  IconDelete,
  IconEdit,
  IconFilter,
  IconSortListAsc,
  IconSortListDesc,
  IconSortListInitial, TextField
} from "components";

import { MODAL_FORM_FIELD_TYPES, MODAL_SIZES } from "components";
import {BOOKMAKERS_CRAWLERS_ACTIONS, MODAL_FIELD_KEYS} from "../BookmakersCrawlers.constants";
import {SORT_ORDERS} from "constants/global.constants";

import {useBookmakersCrawlersMutations} from "./useBookmakersCrawlersMutations";
import {useBookmakersCrawlersQueries} from "./useBookmakersCrawlersQueries";

export const useBookmakersCrawlersActions = ({
  localState,
  localActions,
  queries,
  mutations,
  onSortChange
}: {
  localState: BookmakersCrawlersData['localState'];
  localActions: BookmakersCrawlersData['localActions'];
  queries: ReturnType<typeof useBookmakersCrawlersQueries>
  mutations: ReturnType<typeof useBookmakersCrawlersMutations>
  onSortChange: BookmakersCrawlersHandlers['handleSortChange']
}): {
  primaryActions: Required<ActionsProps>['actions'];
  secondaryActions: Required<ActionsProps>['actions'];
} => {
  return {
    primaryActions: {
      [BOOKMAKERS_CRAWLERS_ACTIONS.ADD]: {
        icon: <IconAdd />,
        shouldShowModal: true,
        modalTitle: 'Add bookmaker',
        modalSize: MODAL_SIZES.SMALL,
        modalFields: {
          [MODAL_FIELD_KEYS.NAME]: {
            type: MODAL_FORM_FIELD_TYPES.TEXT,
            label: 'name',
            isRequired: true
          },
          [MODAL_FIELD_KEYS.IMAGE_URL]: {
            type: MODAL_FORM_FIELD_TYPES.TEXT,
            label: 'image URL'
          }
        },
        onSubmit: (fields) => mutations.createBookmaker.mutate([{
          name: fields[MODAL_FIELD_KEYS.NAME].value as BookmakerSchema['name'],
          imageUrl: fields[MODAL_FIELD_KEYS.IMAGE_URL].value as BookmakerSchema['imageUrl']
        }])
      },
      [BOOKMAKERS_CRAWLERS_ACTIONS.EDIT]: {
        icon: <IconEdit />,
        shouldShowModal: true,
        isDisabled: !localState.bookmakerId,
        modalTitle: 'Edit bookmaker',
        modalSize: MODAL_SIZES.SMALL,
        modalFields: {
          [MODAL_FIELD_KEYS.NAME]: {
            type: MODAL_FORM_FIELD_TYPES.TEXT,
            label: 'name',
            value: queries.fetchBookmakers.data
              ?.options
              ?.find
              ?.(({ key }) => key === localState.bookmakerId)
              ?.bookmaker
              ?.name,
            isRequired: true
          },
          [MODAL_FIELD_KEYS.IMAGE_URL]: {
            type: MODAL_FORM_FIELD_TYPES.TEXT,
            value: queries.fetchBookmakers.data
              ?.options
              ?.find
              ?.(({ key }) => key === localState.bookmakerId)
              ?.bookmaker
              ?.imageUrl,
            label: 'image URL'
          }
        },
        onSubmit: (fields) => mutations.updateBookmaker.mutate([
          localState.bookmakerId as BookmakerSchema['id'],
          {
            name: fields[MODAL_FIELD_KEYS.NAME].value as BookmakerSchema['name'],
            imageUrl: fields[MODAL_FIELD_KEYS.IMAGE_URL].value as BookmakerSchema['imageUrl']
          }
        ])
      },
      [BOOKMAKERS_CRAWLERS_ACTIONS.DELETE]: {
        icon: <IconDelete />,
        shouldShowModal: true,
        isDisabled: !localState.bookmakerId,
        modalTitle: 'Are you sure',
        modalSize: MODAL_SIZES.SMALL,
        onSubmit: mutations.deleteBookmaker.mutate
      }
    },
    secondaryActions: {
      [BOOKMAKERS_CRAWLERS_ACTIONS.FILTER]: {
        icon: <IconFilter />,
        shouldShowDropdown: true,
        dropdownContent: (
          <TextField
            shouldEnableAutoFocus
            value={localState.nameFilter}
            onChange={localActions.setNameFilter}
            label="Filter by name"
          />
        )
      },
      [BOOKMAKERS_CRAWLERS_ACTIONS.SORT]: {
        icon: localState.sortOrder ? {
          [SORT_ORDERS.ASC]: <IconSortListAsc />,
          [SORT_ORDERS.DESC]: <IconSortListDesc />
        }[localState.sortOrder] : <IconSortListInitial />,
        onClick: onSortChange
      }
    }
  }
}