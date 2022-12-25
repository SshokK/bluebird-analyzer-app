import type {Dispatch, ReactNode, SetStateAction} from "react";

export type DrawerProviderLocalState = {
  isOpen: boolean;
  leftDrawer?: ReactNode;
  rightDrawer?: ReactNode;
}

export type DrawerProviderLocalActions = {
  setIsOpen: Dispatch<SetStateAction<DrawerProviderLocalState['isOpen']>>
  setLeftDrawer: Dispatch<SetStateAction<DrawerProviderLocalState['leftDrawer']>>;
  setRightDrawer: Dispatch<SetStateAction<DrawerProviderLocalState['rightDrawer']>>;
}

export type DrawerProviderData = {
  localState: DrawerProviderLocalState;
  localActions: DrawerProviderLocalActions;
}