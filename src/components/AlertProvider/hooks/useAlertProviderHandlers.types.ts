import type {AlertProviderLocalState} from "./useAlertProviderData.types";

export type AlertProviderHandlers = {
  handleOpen: (alertProps: AlertProviderLocalState['alertProps']) => void;
  handleClose: () => void;
}