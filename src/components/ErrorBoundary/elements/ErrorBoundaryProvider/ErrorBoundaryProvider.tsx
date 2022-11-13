import type { FC} from 'react';
import type {
  ErrorBoundaryProviderProps,
  ErrorBoundaryContextType
} from './ErrorBoundaryProvider.types';

import React, {createContext} from 'react';

export const ErrorBoundaryContext = createContext({
  onError: undefined
} as ErrorBoundaryContextType);

export const ErrorBoundaryProvider: FC<ErrorBoundaryProviderProps> = ({ onError, children }) => {
  return (
    <ErrorBoundaryContext.Provider value={{ onError }}>{children}</ErrorBoundaryContext.Provider>
  );
};
