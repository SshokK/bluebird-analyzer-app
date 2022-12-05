import type { AlertProps} from "../../Alert";
import type {Dispatch, SetStateAction} from "react";

export type AlertProviderLocalState = {
  isOpen: boolean;
  alertProps: Pick<AlertProps, 'type' | 'icon' | 'title' | 'message' | 'onClose'> & {
    timeout?: number;
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