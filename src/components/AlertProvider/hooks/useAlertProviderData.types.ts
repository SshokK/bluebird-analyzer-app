import type {ALERT_TYPES} from "../../Alert";
import type {Dispatch, SetStateAction} from "react";

export type AlertProviderLocalState = {
  isOpen: boolean;
  alertProps: {
    type?: ALERT_TYPES;
    title?: string;
    message?: string;
    timeout?: number;
    onClose?: () => void;
  } | null
}

export type AlertProviderLocalActions = {
  setIsOpen: Dispatch<SetStateAction<AlertProviderLocalState['isOpen']>>
  setAlertProps: Dispatch<SetStateAction<AlertProviderLocalState['alertProps']>>
}

export type AlertProviderData = {
  localState: AlertProviderLocalState;
  localActions: AlertProviderLocalActions;
}