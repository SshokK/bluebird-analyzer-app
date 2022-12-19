import type {DrawerProviderData} from "../hooks/useDrawerProviderData.types";

export type DrawerProviderContext = {
  showDrawer: (args: DrawerProviderData['localState']['drawer']) => void;
  closeDrawer: () => void;
};
