import type {DrawerProviderData} from "./useDrawerProviderData.types";

import {useMemo, useState} from "react";

export const useDrawerProviderData = (): DrawerProviderData => {
  const [isOpen, setIsOpen] = useState<
    DrawerProviderData['localState']['isOpen']
  >(false);
  const [drawer, setDrawer] = useState<
    DrawerProviderData['localState']['drawer']
  >(null);

  const localState: DrawerProviderData['localState'] = {
    isOpen,
    drawer
  }

  const localActions: DrawerProviderData['localActions'] = useMemo(() => ({
    setIsOpen,
    setDrawer
  }), []);

  return {
    localState,
    localActions
  }
}