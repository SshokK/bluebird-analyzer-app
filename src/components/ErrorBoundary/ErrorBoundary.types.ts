import type { ReactNode } from 'react';

export type ErrorBoundaryProps = {
  /**
   * Fallback that will be shown on error
   */
  fallback?: ReactNode;
  /**
   * Content
   */
  children?: ReactNode;
};

export type ErrorBoundaryState = {
  hasError: boolean;
};
