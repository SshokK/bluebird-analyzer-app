import type {ActionsData} from "./useActionsData.types";

import {useMemo, useState} from "react";

export const useActionsData = (): ActionsData => {
  const [openedModalKey, setOpenedModalKey] = useState<ActionsData['localState']['openedModalKey']>(null);
  const [openedDropdownKey, setOpenedDropdownKey] = useState<ActionsData['localState']['openedModalKey']>(null);

  const localState: ActionsData['localState'] = {
    openedModalKey,
    openedDropdownKey
  }

  const localActions: ActionsData['localActions'] = useMemo(() => ({
    setOpenedModalKey,
    setOpenedDropdownKey
  }), []);

  return {
    localState,
    localActions
  }
}