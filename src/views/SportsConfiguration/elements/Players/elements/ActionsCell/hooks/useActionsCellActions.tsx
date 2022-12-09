import type {TableProps} from "components";
import type {PlayerSchema} from "features/players/players.api.types";
import type {ActionsCellProps} from "../ActionsCell.types";

import {MODAL_FIELD_KEYS, PLAYER_ACTIONS} from "../ActionsCell.constants";
import {PLAYERS_TABLE_COLUMN_KEYS} from "../../../Players.constants";
import {ICON_BUTTON_SIZES, IconDelete, IconEdit, MODAL_FORM_FIELD_TYPES, MODAL_SIZES} from "components";

import {useActionsCellMutations} from "./useActionsCellMutations";

export const useActionsCellActions = ({
  props,
  mutations
}: {
  props: Pick<ActionsCellProps, 'row'>
  mutations: ReturnType<typeof useActionsCellMutations>
}): Required<TableProps>['actions'] => {
  return {
    [PLAYER_ACTIONS.UPDATE]: {
      icon: <IconEdit />,
      iconSize: ICON_BUTTON_SIZES.SMALL,
      shouldShowModal: true,
      modalTitle: "Update player",
      modalSize: MODAL_SIZES.SMALL,
      modalFields: {
        [MODAL_FIELD_KEYS.NAME]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          value: props.row.getValue(PLAYERS_TABLE_COLUMN_KEYS.NAME),
          label: 'name',
          isRequired: true
        },
        [MODAL_FIELD_KEYS.IMAGE_URL]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          value: props.row.getValue(PLAYERS_TABLE_COLUMN_KEYS.IMAGE_URL),
          label: 'imageUrl'
        }
      },
      onSubmit: (fields) => mutations.updatePlayer.mutate({
        name: fields[MODAL_FIELD_KEYS.NAME].value as PlayerSchema['name'],
        imageUrl: fields[MODAL_FIELD_KEYS.IMAGE_URL].value as PlayerSchema['imageUrl']
      })
    },
    [PLAYER_ACTIONS.DELETE]: {
      icon: <IconDelete />,
      iconSize: ICON_BUTTON_SIZES.SMALL,
      shouldShowModal: true,
      modalTitle: "Are you sure?",
      modalSize: MODAL_SIZES.SMALL,
      onSubmit: mutations.deletePlayer.mutate
    }
  }
}