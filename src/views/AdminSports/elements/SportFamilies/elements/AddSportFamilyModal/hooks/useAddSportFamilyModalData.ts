import type {AddSportFamilyModalData} from "./useAddSportFamilyModalData.types";

import {useMemo, useState} from "react";

export const useAddSportFamilyModalData = (): AddSportFamilyModalData => {
  const [name, setName] = useState('');

  const localState = {
    name
  }

  const localActions = useMemo(() => ({
    setName
  }), []);

  return {
    localState,
    localActions
  }
}