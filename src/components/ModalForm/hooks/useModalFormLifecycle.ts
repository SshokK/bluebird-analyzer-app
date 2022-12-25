import type {ModalFormHandlers} from "./useModalFormHandlers.types";

import {useEffect} from "react";

export const useModalFormLifecycle = ({
  onFieldsPropChange
}: {
  onFieldsPropChange: ModalFormHandlers['handleFieldsPropChange']
}) => {
  useEffect(onFieldsPropChange, [onFieldsPropChange])
}