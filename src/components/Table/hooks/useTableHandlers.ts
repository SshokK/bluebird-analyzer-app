import type {TableHandlers} from "./useTableHandlers.types";
import type {TableData} from "./useTableData.types";
import type {TableProps} from "../Table.types";

import {useCallback} from "react";
import {useTableQuery} from "./useTableQuery";

export const useTableHandlers = ({
  props,
  query,
  localState,
  localActions
}: {
  props: Pick<TableProps, 'onSelectedRowsChange'>;
  query: ReturnType<typeof useTableQuery>;
  localState: TableData['localState'];
  localActions: TableData['localActions'];
}): TableHandlers => {
  const handleRowSelectionChange: TableHandlers['handleRowSelectionChange'] = useCallback((callback) => {
    if (typeof callback === 'function') {
      const selection = callback(localState.rowSelection);

      const selectedRows = query.data?.rows?.filter?.((_, i) => selection[i]) ?? []

      localActions.setRowSelection(selection);

      props.onSelectedRowsChange?.(selectedRows);
    }
  }, [localActions, localState.rowSelection, props, query.data?.rows]);

  return {
    handleRowSelectionChange
  }
}