import React from 'react';

import {Router} from "router";
import { AlertProvider, ThemeProvider } from "components";
import { QueryProvider } from "./elements";

export const App = () => {
  return (
    <ThemeProvider>
      <AlertProvider>
        <QueryProvider>
          <Router />
        </QueryProvider>
      </AlertProvider>
    </ThemeProvider>
  );
}