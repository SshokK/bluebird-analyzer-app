import type {TableProps} from "components";
import type {PlayersProps} from "../Players.types";
import type {PlayersData} from "./usePlayersData.types";
import type {PlayerSchema} from "features/players/players.api.types";

import { IconAdd, IconDelete, MODAL_FORM_FIELD_TYPES, MODAL_SIZES} from "components";

import {PLAYERS_ACTIONS, MODAL_FIELD_KEYS} from "../Players.constants";

import {usePlayersMutations} from "./usePlayersMutations";

export const usePlayersTableActions = ({
  props,
  localState,
  mutations
}: {
  props: Pick<PlayersProps, 'sportFamilyId'>
  localState: PlayersData['localState'];
  mutations: ReturnType<typeof usePlayersMutations>
}): Required<TableProps>['actions'] => {
  return {
    [PLAYERS_ACTIONS.ADD]: {
      icon: <IconAdd />,
      shouldShowModal: true,
      modalTitle: "Add player",
      modalSize: MODAL_SIZES.SMALL,
      modalFields: {
        [MODAL_FIELD_KEYS.NAME]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          label: 'name',
          isRequired: true
        },
        [MODAL_FIELD_KEYS.IMAGE_URL]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          label: 'image URL',
          isRequired: true
        }
      },
      onSubmit: (fields) => mutations.createPlayer.mutate([{
        name: fields[MODAL_FIELD_KEYS.NAME].value as PlayerSchema['name'],
        imageUrl: fields[MODAL_FIELD_KEYS.IMAGE_URL].value as PlayerSchema['imageUrl'],
        sportFamilyId: props.sportFamilyId as PlayerSchema['SportFamilyId']
      }])
    },
    [PLAYERS_ACTIONS.DELETE]: {
      icon: <IconDelete />,
      isDisabled: !localState.selectedRowKeys.length,
      shouldShowModal: true,
      modalTitle: "Are you sure?",
      modalSize: MODAL_SIZES.SMALL,
      onSubmit: mutations.deletePlayers.mutate
    }
  }
}