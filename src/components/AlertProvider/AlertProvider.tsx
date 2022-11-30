import type {ComponentProps, ReactElement} from 'react';
import type {AlertProviderProps} from "./AlertProvider.types";

import React from 'react';
import {AlertProviderContext} from "./contexts";
import {DEFAULT_TIMEOUT} from "./AlertProvider.constants";
import * as MUI from "@mui/material";
import {Alert} from "../Alert";
import {useAlertProviderData} from "./hooks";

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

  return (
    <AlertProviderContext.Provider
      value={{
        showAlert: localActions.setAlertProps
      }}
    >
      <MUI.Snackbar
        open={Boolean(localState.alertProps)}
        onClose={() => {
          localActions.setAlertProps(null);
          localState.alertProps?.onClose?.()
        }}
        autoHideDuration={localState.alertProps?.timeout ?? DEFAULT_TIMEOUT}
        TransitionComponent={Transition}
      >
        <Alert
          type={localState.alertProps?.type}
          title={localState.alertProps?.title}
          message={localState.alertProps?.message}
        />
      </MUI.Snackbar>
      {children}
    </AlertProviderContext.Provider>
  );
};
