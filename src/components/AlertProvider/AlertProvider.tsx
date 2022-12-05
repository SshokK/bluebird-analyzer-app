import type {ComponentProps, ReactElement} from 'react';
import type {AlertProviderProps} from "./AlertProvider.types";

import React from 'react';
import {AlertProviderContext} from "./contexts";
import {DEFAULT_TIMEOUT} from "./AlertProvider.constants";
import * as MUI from "@mui/material";
import {Alert} from "../Alert";
import {useAlertProviderData} from "./hooks";
import {useAlertProviderHandlers} from "./hooks/useAlertProviderHandlers";

const Transition = (props: ComponentProps<typeof MUI.Slide>) => {
  return (
    <MUI.Slide {...props} direction="right">
      {props.children}
    </MUI.Slide>
  );
}

export const AlertProvider = ({
  children
}: AlertProviderProps): ReactElement => {
  const { localState, localActions } = useAlertProviderData();

  const handlers = useAlertProviderHandlers({
    localState,
    localActions
  });

  return (
    <AlertProviderContext.Provider
      value={{
        showAlert: handlers.handleOpen
      }}
    >
      <MUI.Snackbar
        open={localState.isOpen}
        onClose={handlers.handleClose}
        autoHideDuration={localState.alertProps?.timeout ?? DEFAULT_TIMEOUT}
        TransitionComponent={Transition}
      >
        <Alert {...localState.alertProps} />
      </MUI.Snackbar>
      {children}
    </AlertProviderContext.Provider>
  );
};
