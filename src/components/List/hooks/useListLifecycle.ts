import type {ListHandlers} from "./useListHandlers.types";

import {useEffect} from "react";

export const useListLifecycle = ({
  onSelectedOptionKeysPropChange
}: {
  onSelectedOptionKeysPropChange: ListHandlers['handleSelectedOptionKeysPropChange']
}) => {
  useEffect(onSelectedOptionKeysPropChange, [onSelectedOptionKeysPropChange]);
}

