import type {AlertProviderContext} from "../components/AlertProvider/contexts/AlertProviderContext.types";

import {StatusCodes} from "http-status-codes";
import {AxiosError} from "axios";

import {ALERT_TYPES} from "../components";
import {DEFAULT_ERROR_MESSAGE} from "../constants/global.constants";


export const showServerErrorMessage = (alertContext: AlertProviderContext) => (e: unknown) => {
  if (!(e instanceof AxiosError)) {
    return
  }

  if (e?.response?.status === StatusCodes.BAD_REQUEST) {
    alertContext.showAlert({
      type: ALERT_TYPES.ERROR,
      message: e.response?.data?.error ?? DEFAULT_ERROR_MESSAGE
    })
  } else {
    alertContext.showAlert({
      type: ALERT_TYPES.ERROR,
      message: DEFAULT_ERROR_MESSAGE
    })
  }
}