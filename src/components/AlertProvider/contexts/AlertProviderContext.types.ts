import type {AlertProviderLocalState} from "../hooks/useAlertProviderData.types";

export type AlertProviderContext = {
  showAlert: (args: AlertProviderLocalState['alertProps']) => void;
};
