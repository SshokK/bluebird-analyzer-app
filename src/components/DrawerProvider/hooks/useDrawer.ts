import type * as contextTypes from '../contexts/DrawerProviderContext.types';

import {useContext} from "react";
import {DrawerProviderContext} from "../contexts/DrawerProviderContext";

export const useDrawer = (): contextTypes.DrawerProviderContext => {
  return useContext(DrawerProviderContext);
}