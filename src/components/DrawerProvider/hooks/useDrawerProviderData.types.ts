import type {Dispatch, ReactNode, SetStateAction} from "react";

export type DrawerProviderLocalState = {
  isOpen: boolean;
  drawer: ReactNode;
}

export type DrawerProviderLocalActions = {
  setIsOpen: Dispatch<SetStateAction<DrawerProviderLocalState['isOpen']>>
  setDrawer: Dispatch<SetStateAction<DrawerProviderLocalState['drawer']>>
}

export type DrawerProviderData = {
  localState: DrawerProviderLocalState;
  localActions: DrawerProviderLocalActions;
}