import type {QueryProviderHandlers} from "./useQueryProviderHandlers.types";

import {ALERT_TYPES, useAlert} from "components";
import {DEFAULT_ERROR_MESSAGE} from "constants/global.constants";

export const useQueryProviderHandlers = (): QueryProviderHandlers => {
  const alert = useAlert();

  const handleError: QueryProviderHandlers['handleError'] = () => {
    alert.showAlert({
      type: ALERT_TYPES.ERROR,
      message: DEFAULT_ERROR_MESSAGE
    });
  }

  return {
    handleError
  }
}