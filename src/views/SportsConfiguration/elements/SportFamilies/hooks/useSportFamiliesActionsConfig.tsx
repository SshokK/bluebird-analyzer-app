import type {useSportFamiliesQueries} from "./useSportFamiliesQueries";
import type {SportFamiliesData} from "./useSportFamiliesData.types";
import type {SportFamiliesHandlers} from "./useSportFamiliesHandlers.types";
import type {ActionsProps} from "../../../../../components";

import {IconAdd, IconEdit, MODAL_FORM_FIELD_TYPES, MODAL_SIZES} from "components";
import {MODAL_FIELD_KEYS, MODAL_KEYS} from "../SportFamilies.constants";

export const useSportFamiliesActionsConfig = ({
  queries,
  formattedData,
  onAdd,
  onEdit
}: {
  queries: ReturnType<typeof useSportFamiliesQueries>;
  formattedData: SportFamiliesData['formattedData'];
  onAdd: SportFamiliesHandlers['handleModalAddModalSubmit'];
  onEdit: SportFamiliesHandlers['handleModalEditModalSubmit']
}): Required<ActionsProps>['actions'] => {
  return {
    [MODAL_KEYS.ADD]: {
      icon: <IconAdd />,
      onSubmit: onAdd,
      shouldShowModal: true,
      modalTitle: 'Add new sport family',
      modalSize: MODAL_SIZES.SMALL,
      modalFields: {
        [MODAL_FIELD_KEYS.NAME]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          label: 'name',
          value: '',
        }
      }
    },
    [MODAL_KEYS.EDIT]: {
      icon: <IconEdit />,
      isDisabled: !formattedData.sportFamilyId,
      onSubmit: onEdit,
      shouldShowModal: true,
      modalTitle: 'Rename sport family',
      modalSize: MODAL_SIZES.SMALL,
      modalFields: {
        [MODAL_FIELD_KEYS.NAME]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          label: 'Name',
          value: queries.fetchSportFamilies.data
            ?.find(sportFamily => sportFamily.id === formattedData.sportFamilyId)
            ?.name ?? '',
        }
      }
    }
  }
}