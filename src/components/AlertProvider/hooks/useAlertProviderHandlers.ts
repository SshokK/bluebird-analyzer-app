import type {AlertProviderHandlers} from "./useAlertProviderHandlers.types";
import type {AlertProviderData} from "./useAlertProviderData.types";

export const useAlertProviderHandlers = ({
  localState,
  localActions
}: {
  localState: AlertProviderData['localState'];
  localActions: AlertProviderData['localActions']
}): AlertProviderHandlers => {
  const handleOpen: AlertProviderHandlers['handleOpen'] = (alertProps) => {
    localActions.setIsOpen(true);
    localActions.setAlertProps(alertProps)
  }

  const handleClose: AlertProviderHandlers['handleClose'] = () => {
    localActions.setIsOpen(false);
    localState.alertProps?.onClose?.()
  }

  return {
    handleOpen,
    handleClose
  }
}