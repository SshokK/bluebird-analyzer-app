import type {ActionsCellData} from "./useActionsCellData.types";
import type {ActionsCellHandlers} from "./useActionsCellHandlers.types";

export const useActionsCellHandlers = ({
  localActions
}: {
  localActions: ActionsCellData['localActions']
}): ActionsCellHandlers => {
  const handleSelectorsModalToggle: ActionsCellHandlers['handleSelectorsModalToggle'] = (isOpen) => () => {
    localActions.setIsSelectorsModalOpen(isOpen)
  };

  return {
    handleSelectorsModalToggle
  }
}