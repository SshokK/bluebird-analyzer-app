import type * as contextTypes from './DrawerProviderContext.types';

import {createContext} from 'react';

const INITIAL_STATE: contextTypes.DrawerProviderContext = {
  showDrawer: () => {},
  closeDrawer: () => {}
};

export const DrawerProviderContext = createContext<contextTypes.DrawerProviderContext>(INITIAL_STATE);
