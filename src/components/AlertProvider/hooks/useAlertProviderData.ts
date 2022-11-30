import type {AlertsProviderData} from "./useAlertProviderData.types";

import {useMemo, useState} from "react";

export const useAlertProviderData = (): AlertsProviderData => {
  const [alertProps, setAlertProps] = useState<AlertsProviderData['localState']['alertProps']>(null)

  const localState: AlertsProviderData['localState'] = {
    alertProps
  }

  const localActions: AlertsProviderData['localActions'] = useMemo(() => ({
    setAlertProps
  }), []);

  return {
    localState,
    localActions
  }
}