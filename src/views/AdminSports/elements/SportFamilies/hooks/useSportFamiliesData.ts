import type {SportFamiliesData} from "./useSportFamiliesData.types";

import {useMemo, useState} from "react";

export const useSportFamiliesData = (): SportFamiliesData => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const localState: SportFamiliesData['localState'] = {
    isAddModalOpen
  }

  const localActions: SportFamiliesData['localActions'] = useMemo(() => ({
    setIsAddModalOpen
  }), []);

  return {
    localState,
    localActions
  }
}