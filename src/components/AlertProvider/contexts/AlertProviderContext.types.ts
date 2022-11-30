import type {AlertsProviderLocalState} from "../hooks/useAlertProviderData.types";

export type AlertProviderContext = {
  showAlert: (args: AlertsProviderLocalState['alertProps']) => void;
};
