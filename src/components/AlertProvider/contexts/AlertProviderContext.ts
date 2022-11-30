import type * as contextTypes from './AlertProviderContext.types';

import { createContext } from 'react';

const INITIAL_STATE: contextTypes.AlertProviderContext = {
  showAlert: async () => undefined
};

export const AlertProviderContext = createContext<contextTypes.AlertProviderContext>(INITIAL_STATE);
