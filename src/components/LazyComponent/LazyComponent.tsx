import type { FC } from 'react';
import type {LazyComponentProps} from "./LazyComponent.types";

import React, { Suspense } from 'react';
import { ErrorBoundary } from '../ErrorBoundary';
import {Loader} from "../Loader";

export const LazyComponent: FC<LazyComponentProps> = ({ children }) => {
  return (
    <Suspense fallback={<Loader shouldFitContainer />}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </Suspense>
  );
};
