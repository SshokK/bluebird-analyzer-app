import React from 'react';
import {QueryClient} from "@tanstack/react-query";
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import {createSyncStoragePersister} from "@tanstack/query-sync-storage-persister";
import {Router} from "router";
import {AlertProvider, ThemeProvider} from "components";
import './App.css';

const queryClient = new QueryClient();

const persister = createSyncStoragePersister({
  storage: window.localStorage
});

export const App = () => {
  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      <ThemeProvider>
        <AlertProvider>
          <Router />
        </AlertProvider>
      </ThemeProvider>
    </PersistQueryClientProvider>
  );
}