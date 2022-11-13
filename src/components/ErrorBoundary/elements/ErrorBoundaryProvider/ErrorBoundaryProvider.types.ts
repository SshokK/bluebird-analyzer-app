import { ErrorInfo, ReactNode } from 'react';

export type ErrorBoundaryContextType = {
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
};

export type ErrorBoundaryProviderProps = {
  /**
   * Error handler
   */
  onError?: ErrorBoundaryContextType['onError'];
  /**
   * Inner children
   */
  children: ReactNode;
};
