import React from 'react';

import {Router} from "router";
import {AlertProvider, DrawerProvider, ThemeProvider} from "components";
import { QueryProvider } from "./elements";

export const App = () => {
  return (
    <ThemeProvider>
      <AlertProvider>
          <QueryProvider>
            <DrawerProvider>
              <Router />
            </DrawerProvider>
          </QueryProvider>
      </AlertProvider>
    </ThemeProvider>
  );
}