import type {ALERT_TYPES} from "../../Alert";
import type {Dispatch, SetStateAction} from "react";

export type AlertsProviderLocalState = {
  alertProps: {
    type?: ALERT_TYPES;
    title?: string;
    message?: string;
    timeout?: number;
    onClose?: () => void;
  } | null
}

export type AlertsProviderLocalActions = {
  setAlertProps: Dispatch<SetStateAction<AlertsProviderLocalState['alertProps']>>
}

export type AlertsProviderData = {
  localState: AlertsProviderLocalState;
  localActions: AlertsProviderLocalActions;
}