import type {TableProps} from "../Table.types";
import type {TableData} from "./useTableData.types";

import {useMemo, useState} from "react";
import {formatColumns} from "./useTableData.helpers";

export const useTableData = (props: Pick<TableProps, 'columns' | 'rows' | 'areRowsSelectable'>): TableData => {
  const [rowSelection, setRowSelection] = useState({});

  const localState: TableData['localState'] = {
    rowSelection
  }

  const localActions: TableData['localActions'] = useMemo(() => ({
    setRowSelection
  }), [])

  const columns = useMemo(() => formatColumns({
    columns: props.columns ?? [],
    areRowsSelectable: Boolean(props.areRowsSelectable)
  }), [props.areRowsSelectable, props.columns]);
  const rows = useMemo(() => props.rows ?? [], [props.rows]);

  return {
    localState,
    localActions,
    formattedData: {
      columns,
      rows
    }
  }
}