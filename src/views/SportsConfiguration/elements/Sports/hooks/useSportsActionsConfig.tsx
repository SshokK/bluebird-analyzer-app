import type {SportsData} from "./useSportsData.types";
import type {ActionsProps} from "../../../../../components";
import type {SportsHandlers} from "../../SportFamilies/hooks/useSportsHandlers.types";

import {IconAdd, IconEdit, MODAL_FORM_FIELD_TYPES, MODAL_SIZES} from "components";
import {MODAL_FIELD_KEYS, MODAL_KEYS} from "../Sports.constants";
import {useSportsQueries} from "./useSportsQueries";

export const useSportsActionsConfig = ({
  queries,
  formattedData,
  onAdd,
  onEdit
}: {
  queries: ReturnType<typeof useSportsQueries>;
  formattedData: SportsData['formattedData'];
  onAdd: SportsHandlers['handleModalAddModalSubmit'];
  onEdit: SportsHandlers['handleModalEditModalSubmit']
}): Required<ActionsProps>['actions'] => {
  return {
    [MODAL_KEYS.ADD]: {
      icon: <IconAdd />,
      onSubmit: onAdd,
      shouldShowModal: true,
      modalTitle: 'Add new sport',
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
      isDisabled: !formattedData.sportId,
      onSubmit: onEdit,
      shouldShowModal: true,
      modalTitle: 'Rename sport',
      modalSize: MODAL_SIZES.SMALL,
      modalFields: {
        [MODAL_FIELD_KEYS.NAME]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          label: 'Name',
          value: queries.fetchSports.data
            ?.find(sport => sport.id === formattedData.sportId)
            ?.name ?? '',
        }
      }
    }
  }
}