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
  const handleClick: ActionsHandlers['handleClick'] = (actionKey) => () => {
    const action = props.actions[actionKey as keyof typeof props.actions];

    if (action.shouldShowModal) {
      localActions.setOpenedModalKey(actionKey);
    }

    action.onClick?.(action);
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
    handleClick,
    handleModalClose,
    handleModalSubmit
  }
}