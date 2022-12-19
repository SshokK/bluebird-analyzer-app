import type {DrawerProviderData} from "./useDrawerProviderData.types";

export type DrawerProviderHandlers = {
  handleOpen: (drawer: DrawerProviderData['localState']['drawer']) => void;
  handleClose: () => void;
}