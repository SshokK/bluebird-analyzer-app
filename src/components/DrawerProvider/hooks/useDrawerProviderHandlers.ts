import type {DrawerProviderHandlers} from "./useDrawerProviderHandlers.types";
import type {DrawerProviderData} from "./useDrawerProviderData.types";

export const useDrawerProviderHandlers = ({
  localActions
}: {
  localActions: DrawerProviderData['localActions']
}): DrawerProviderHandlers => {
  const handleOpen: DrawerProviderHandlers['handleOpen'] = ({
    leftDrawer,
    rightDrawer
  }) => {
    if (leftDrawer || rightDrawer) {
      localActions.setIsOpen(true);
    }

    if (leftDrawer) {
      localActions.setLeftDrawer(leftDrawer);
    }

    if (rightDrawer) {
      localActions.setRightDrawer(rightDrawer);
    }
  }

  const handleClose: DrawerProviderHandlers['handleClose'] = () => {
    localActions.setIsOpen(false);
  }

  return {
    handleOpen,
    handleClose
  }
}