import type {ActionsProps} from "components";
import type {TableActionsProps} from "../TableActions.types";

import {TABLE_ACTION_KEYS} from "../TableActions.constants";
import {IconArrowLeft, IconArrowRight} from "components";

export const useTableActions = ({ props }: {
  props: Pick<TableActionsProps, 'table'>
}): Required<ActionsProps>['actions'] => {
  return {
    [TABLE_ACTION_KEYS.PAGINATE_BACK]: {
      icon: <IconArrowLeft />,
      onClick: props.table.previousPage,
      isDisabled: !props.table.getCanPreviousPage()
    },
    [TABLE_ACTION_KEYS.PAGINATE_FORWARD]: {
      icon: <IconArrowRight />,
      onClick: props.table.nextPage,
      isDisabled: !props.table.getCanNextPage()
    }
  }
}