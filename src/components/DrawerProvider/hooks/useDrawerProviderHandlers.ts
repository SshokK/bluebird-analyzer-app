import type {DrawerProviderHandlers} from "./useDrawerProviderHandlers.types";
import type {DrawerProviderData} from "./useDrawerProviderData.types";

export const useDrawerProviderHandlers = ({
  localActions
}: {
  localActions: DrawerProviderData['localActions']
}): DrawerProviderHandlers => {
  const handleOpen: DrawerProviderHandlers['handleOpen'] = (drawer) => {
    localActions.setIsOpen(true);
    localActions.setDrawer(drawer)
  }

  const handleClose: DrawerProviderHandlers['handleClose'] = () => {
    localActions.setIsOpen(false);
  }

  return {
    handleOpen,
    handleClose
  }
}