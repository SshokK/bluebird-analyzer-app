import type {QueryProviderProps} from "./QueryProvider.types";
import type {FC} from "react";

import React from 'react';
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {createSyncStoragePersister} from "@tanstack/query-sync-storage-persister";
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {useQueryMemoizedQueryClient, useQueryProviderHandlers} from "./hooks";

const persister = createSyncStoragePersister({
  storage: window.localStorage
});

export const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  const handlers = useQueryProviderHandlers();

  const queryClient = useQueryMemoizedQueryClient({
    onError: handlers.handleError
  });

  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      <ReactQueryDevtools />
      {children}
    </PersistQueryClientProvider>
  )
}