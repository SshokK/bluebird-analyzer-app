import type {TableProps} from "../Table.types";
import type {TableData} from "./useTableData.types";

import {useMemo, useState} from "react";

import * as helpers from "./useTableData.helpers";

export const useTableData = (props: Pick<TableProps, 'columns' | 'areRowsSelectable'>): TableData => {
  const [rowSelection, setRowSelection] = useState<TableData['localState']['rowSelection']>({});
  const [pagination, setPagination] = useState<TableData['localState']['pagination']>( {
    pageSize: 0,
    pageIndex: 0
  });
  const [sorting, setSorting] = useState<TableData['localState']['sorting']>(
    helpers.getInitialSortingState(props.columns)
  );

  const localState: TableData['localState'] = {
    rowSelection,
    pagination,
    sorting
  }

  const localActions: TableData['localActions'] = useMemo(() => ({
    setRowSelection,
    setPagination,
    setSorting
  }), [])

  const columns = useMemo(() => helpers.formatColumns({
    columns: props.columns ?? [],
    areRowsSelectable: Boolean(props.areRowsSelectable)
  }), [props.areRowsSelectable, props.columns]);

  return {
    localState,
    localActions,
    formattedData: {
      columns
    }
  }
}