import type {ActionsHandlers} from "./useActionsHandlers.types";
import type {ActionsProps} from "../Actions.types";
import type {ActionsData} from "./useActionsData.types";

export const useActionsHandlers = ({
  props,
  localActions
}: {
  props: Pick<ActionsProps, 'actions'>;
  localActions: ActionsData['localActions']
}): ActionsHandlers => {
  const handleModalOpen: ActionsHandlers['handleModalOpen'] = (modalKey) => () => {
    localActions.setOpenedModalKey(modalKey);
  }

  const handleModalClose: ActionsHandlers['handleModalClose'] = () => {
    localActions.setOpenedModalKey(null);
  }

  const handleModalSubmit: ActionsHandlers['handleModalSubmit'] = (actionKey) => async (fields) => {
    try {
      await props.actions[actionKey as keyof typeof props.actions]?.onSubmit?.(fields);
    } catch (e) {
      console.error(e)
    } finally {
    }
  }

  return {
    handleModalOpen,
    handleModalClose,
    handleModalSubmit
  }
}