import type {AlertProviderData} from "./useAlertProviderData.types";

import {useMemo, useState} from "react";

export const useAlertProviderData = (): AlertProviderData => {
  const [isOpen, setIsOpen] = useState<AlertProviderData['localState']['isOpen']>(false)
  const [alertProps, setAlertProps] = useState<AlertProviderData['localState']['alertProps']>(null)

  const localState: AlertProviderData['localState'] = {
    isOpen,
    alertProps
  }

  const localActions: AlertProviderData['localActions'] = useMemo(() => ({
    setIsOpen,
    setAlertProps
  }), []);

  return {
    localState,
    localActions
  }
}