import type {ActionsData} from "./useActionsData.types";

import {useMemo, useState} from "react";

export const useActionsData = (): ActionsData => {
  const [openedModalKey, setOpenedModalKey] = useState<ActionsData['localState']['openedModalKey']>(null);

  const localState: ActionsData['localState'] = {
    openedModalKey
  }

  const localActions: ActionsData['localActions'] = useMemo(() => ({
    setOpenedModalKey
  }), []);

  return {
    localState,
    localActions
  }
}