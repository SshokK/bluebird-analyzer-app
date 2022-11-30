import type {SelectHandlers} from "./useSelectHandlers.types";

import {useEffect} from "react";

export const useSelectLifecycle = ({
  onOptionsPropChange
}: {
  onOptionsPropChange: SelectHandlers['handleOptionsPropChange']
}) => {
  useEffect(onOptionsPropChange, [onOptionsPropChange])
}