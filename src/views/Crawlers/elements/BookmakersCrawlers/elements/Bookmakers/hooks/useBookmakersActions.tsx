import type {ActionsProps} from "components";
import type {BookmakersData} from "./useBookmakersData.types";

import {IconAdd, IconDelete, IconEdit, IconFilter, IconSort, MODAL_FORM_FIELD_TYPES, MODAL_SIZES} from "components";

import {BOOKMAKERS_ACTIONS, MODAL_FIELD_KEYS} from "../Bookmakers.constants";

export const useBookmakersActions = ({
  localState
}: {
  localState: BookmakersData['localState']
}): {
  primaryActions: Required<ActionsProps>['actions'];
  secondaryActions: Required<ActionsProps>['actions'];
} => {
  return {
    primaryActions: {
      [BOOKMAKERS_ACTIONS.ADD]: {
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
        }
      },
      [BOOKMAKERS_ACTIONS.EDIT]: {
        icon: <IconEdit />,
        shouldShowModal: true,
        isDisabled: !localState.bookmakerId,
        modalTitle: 'Edit bookmaker',
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
        }
      },
      [BOOKMAKERS_ACTIONS.DELETE]: {
        icon: <IconDelete />,
        shouldShowModal: true,
        isDisabled: !localState.bookmakerId,
        modalTitle: 'Are you sure',
        modalSize: MODAL_SIZES.SMALL
      }
    },
    secondaryActions: {
      [BOOKMAKERS_ACTIONS.FILTER]: {
        icon: <IconFilter />
      },
      [BOOKMAKERS_ACTIONS.SORT]: {
        icon: <IconSort />
      }
    }
  }
}