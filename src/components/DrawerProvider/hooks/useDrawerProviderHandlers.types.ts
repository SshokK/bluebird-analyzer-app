import type {DrawerProviderData} from "./useDrawerProviderData.types";

export type DrawerProviderHandlers = {
  handleOpen: (args: {
    leftDrawer?: DrawerProviderData['localState']['leftDrawer'];
    rightDrawer?: DrawerProviderData['localState']['rightDrawer']
  }) => void;
  handleClose: () => void;
}