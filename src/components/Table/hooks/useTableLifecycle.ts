import type {TableHandlers} from "./useTableHandlers.types";

import {useEffect} from "react";

export const useTableLifecycle = ({
  onSelectedRowKeysPropChange
}: {
  onSelectedRowKeysPropChange: TableHandlers['handleSelectedRowKeysPropChange']
}) => {
  useEffect(onSelectedRowKeysPropChange, [onSelectedRowKeysPropChange])
}