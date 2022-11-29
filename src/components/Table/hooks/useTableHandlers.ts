import type {TableHandlers} from "./useTableHandlers.types";
import type {TableData} from "./useTableData.types";
import type {TableProps} from "../Table.types";

import {useCallback} from "react";

export const useTableHandlers = ({
  props,
  localState,
  localActions
}: {
  props: Pick<TableProps, 'onSelectedRowsChange'>;
  localState: TableData['localState'];
  localActions: TableData['localActions'];
}): TableHandlers => {
  const handleRowSelectionChange: TableHandlers['handleRowSelectionChange'] = useCallback((callback) => {
    if (typeof callback === 'function') {
      const selection = callback(localState.rowSelection);

      localActions.setRowSelection(selection);

      props.onSelectedRowsChange?.(Object.keys(selection));
    }
  }, [localActions, localState.rowSelection, props]);

  return {
    handleRowSelectionChange
  }
}