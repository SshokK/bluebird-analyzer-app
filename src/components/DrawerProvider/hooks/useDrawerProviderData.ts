import type {DrawerProviderData} from "./useDrawerProviderData.types";

import {useMemo, useState} from "react";

export const useDrawerProviderData = (): DrawerProviderData => {
  const [isOpen, setIsOpen] = useState<
    DrawerProviderData['localState']['isOpen']
  >(false);
  const [leftDrawer, setLeftDrawer] = useState<
    DrawerProviderData['localState']['leftDrawer']
  >(null);
  const [rightDrawer, setRightDrawer] = useState<
    DrawerProviderData['localState']['rightDrawer']
  >(null);

  const localState: DrawerProviderData['localState'] = {
    isOpen,
    leftDrawer,
    rightDrawer
  }

  const localActions: DrawerProviderData['localActions'] = useMemo(() => ({
    setIsOpen,
    setLeftDrawer,
    setRightDrawer
  }), []);

  return {
    localState,
    localActions
  }
}