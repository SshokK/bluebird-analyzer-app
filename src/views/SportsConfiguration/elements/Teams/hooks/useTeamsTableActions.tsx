import type {TableProps} from "components";
import type {TeamsProps} from "../Teams.types";
import type {TeamSchema} from "features/teams/teams.api.types";

import { MODAL_FORM_FIELD_TYPES, MODAL_SIZES } from "components";
import { TEAMS_ACTIONS, MODAL_FIELD_KEYS } from "../Teams.constants";

import { IconAdd } from "components";

import {useTeamsMutations} from "./useTeamsMutations";

export const useTeamsTableActions = ({
  props,
  mutations
}: {
  props: Pick<TeamsProps, 'sportId'>
  mutations: ReturnType<typeof useTeamsMutations>
}): Required<TableProps>['actions'] => {
  return {
    [TEAMS_ACTIONS.ADD]: {
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
          label: 'image URL'
        }
      },
      onSubmit: (fields) => mutations.createTeam.mutate([{
        name: fields[MODAL_FIELD_KEYS.NAME].value as TeamSchema['name'],
        imageUrl: fields[MODAL_FIELD_KEYS.IMAGE_URL].value as TeamSchema['imageUrl'],
        sportId: props.sportId as TeamSchema['SportId']
      }])
    }
  }
}