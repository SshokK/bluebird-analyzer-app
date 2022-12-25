import type {FC} from 'react';
import type {DrawerProviderProps} from "./DrawerProvider.types";

import React from 'react';
import {DrawerProviderContext} from "./contexts/DrawerProviderContext";
import {Drawer, DRAWER_PLACEMENT} from "../Drawer";
import {useDrawerProviderData, useDrawerProviderHandlers} from "./hooks";
import {DUAL_DRAWERS_ANIMATION_DELAY} from "./DrawerProvider.constants";
import './drawer-provider.scss';

export const DrawerProvider: FC<DrawerProviderProps> = ({ children }) => {
  const { localState, localActions } = useDrawerProviderData();

  const handlers = useDrawerProviderHandlers({
    localActions
  });

  return (
    <DrawerProviderContext.Provider value={{
      showDrawer: handlers.handleOpen,
      closeDrawer: handlers.handleClose
    }}>
      <Drawer
        isOpen={localState.isOpen}
        onClose={handlers.handleClose}
        placement={DRAWER_PLACEMENT.LEFT}
        isCard
        animationDelay={localState.leftDrawer && localState.rightDrawer ? DUAL_DRAWERS_ANIMATION_DELAY : 0}
        classNames={{
          container: "BB-drawer-provider__left-drawer",
          backdrop: "BB-drawer-provider__left-drawer-backdrop"
        }}
      >
        {localState.leftDrawer}
      </Drawer>
      <Drawer
        isOpen={localState.isOpen}
        onClose={handlers.handleClose}
        placement={DRAWER_PLACEMENT.RIGHT}
        animationDelay={localState.leftDrawer && localState.rightDrawer ? DUAL_DRAWERS_ANIMATION_DELAY : 0}
        isCard
        classNames={{
          container: "BB-drawer-provider__right-drawer",
          backdrop: "BB-drawer-provider__right-drawer-backdrop",
          paper: "BB-drawer-provider__right-drawer-paper"
        }}
      >
        {localState.rightDrawer}
      </Drawer>
      {children}
    </DrawerProviderContext.Provider>
  )
}