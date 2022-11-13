import type { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';
import type { ErrorBoundaryContextType } from './elements';
import type { ErrorInfo } from 'react';

import React from 'react';
import { ErrorFallback} from './elements';

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static defaultProps: ErrorBoundaryProps = {
    fallback: <ErrorFallback />
  };

  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    const { onError } = this.context as ErrorBoundaryContextType;

    onError && onError(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      return fallback;
    }

    return children;
  }
}
