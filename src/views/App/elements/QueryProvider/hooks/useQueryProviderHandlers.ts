import type {QueryProviderHandlers} from "./useQueryProviderHandlers.types";

import {ALERT_TYPES, useAlert} from "components";

export const useQueryProviderHandlers = (): QueryProviderHandlers => {
  const alert = useAlert();

  const handleNetworkError: QueryProviderHandlers['handleNetworkError'] = () => {
    alert.showAlert({
      type: ALERT_TYPES.ERROR,
      message: 'Something went wrong'
    });
  }

  return {
    handleNetworkError
  }
}