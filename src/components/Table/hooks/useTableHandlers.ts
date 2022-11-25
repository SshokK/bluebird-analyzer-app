import type {TableHandlers} from "./useTableHandlers.types";
import type {TableData} from "./useTableData.types";
import type {TableProps} from "../Table.types";

import {useCallback} from "react";

export const useTableHandlers = ({
  props,
  localState,
  localActions,
  formattedData
}: {
  props: Pick<TableProps, 'onSelectedRowsChange'>;
  localState: TableData['localState'];
  localActions: TableData['localActions'];
  formattedData: TableData['formattedData'];
}): TableHandlers => {
  const handleRowSelectionChange: TableHandlers['handleRowSelectionChange'] = useCallback((callback) => {
    if (typeof callback === 'function') {
      const selection = callback(localState.rowSelection);

      const selectedRows = formattedData.rows.filter((_, i) => selection[i])

      localActions.setRowSelection(selection);

      props.onSelectedRowsChange?.(selectedRows);
    }
  }, [formattedData.rows, localActions, localState.rowSelection, props]);

  return {
    handleRowSelectionChange
  }
}