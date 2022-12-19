import type {FC} from 'react';
import type {DrawerProviderProps} from "./DrawerProvider.types";

import React from 'react';
import {DrawerProviderContext} from "./contexts/DrawerProviderContext";
import {Drawer, DRAWER_ANCHOR_POSITION} from "../Drawer";
import {useDrawerProviderData, useDrawerProviderHandlers} from "./hooks";

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
        anchorPosition={DRAWER_ANCHOR_POSITION.RIGHT}
        isCard
      >
        {localState.drawer}
      </Drawer>
      {children}
    </DrawerProviderContext.Provider>
  )
}