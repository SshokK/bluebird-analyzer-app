import type {TableProps} from "components";
import type {PlayerSchema} from "features/players/players.api.types";
import type {ActionsCellProps} from "../ActionsCell.types";

import { MODAL_FIELD_KEYS, TEAM_ACTIONS } from "../ActionsCell.constants";
import { MODAL_FORM_FIELD_TYPES, MODAL_SIZES} from "components";
import { TEAMS_TABLE_COLUMN_KEYS } from "../../../Teams.constants";

import { IconEdit, IconDelete } from "components";

import {useActionsCellMutations} from "./useActionsCellMutations";

export const useActionsCellActions = ({
  props,
  mutations
}: {
  props: Pick<ActionsCellProps, 'row'>
  mutations: ReturnType<typeof useActionsCellMutations>
}): Required<TableProps>['actions'] => {
  return {
    [TEAM_ACTIONS.UPDATE]: {
      icon: <IconEdit />,
      shouldShowModal: true,
      modalTitle: "Update team",
      modalSize: MODAL_SIZES.SMALL,
      modalFields: {
        [MODAL_FIELD_KEYS.NAME]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          value: props.row.getValue(TEAMS_TABLE_COLUMN_KEYS.NAME),
          label: 'name',
          isRequired: true
        },
        [MODAL_FIELD_KEYS.IMAGE_URL]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          value: props.row.getValue(TEAMS_TABLE_COLUMN_KEYS.IMAGE_URL),
          label: 'imageUrl'
        }
      },
      onSubmit: (fields) => mutations.updateTeam.mutate({
        name: fields[MODAL_FIELD_KEYS.NAME].value as PlayerSchema['name'],
        imageUrl: fields[MODAL_FIELD_KEYS.IMAGE_URL].value as PlayerSchema['imageUrl']
      })
    },
    [TEAM_ACTIONS.DELETE]: {
      icon: <IconDelete />,
      shouldShowModal: true,
      modalTitle: "Are you sure?",
      modalSize: MODAL_SIZES.SMALL,
      onSubmit: mutations.deleteTeam.mutate
    }
  }
}