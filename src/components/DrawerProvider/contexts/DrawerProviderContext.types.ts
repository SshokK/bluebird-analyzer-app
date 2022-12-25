import type {DrawerProviderData} from "../hooks/useDrawerProviderData.types";

export type DrawerProviderContext = {
  showDrawer: (args: {
    leftDrawer?: DrawerProviderData['localState']['leftDrawer'];
    rightDrawer?: DrawerProviderData['localState']['rightDrawer'];
  }) => void;
  closeDrawer: () => void;
};
