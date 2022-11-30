import type * as contextTypes from '../contexts/AlertProviderContext.types';

import {AlertProviderContext} from "../contexts";
import {useContext} from "react";

export const useAlert = (): contextTypes.AlertProviderContext=> {
  return useContext(AlertProviderContext);
}