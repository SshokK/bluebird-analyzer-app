import type {TableColumn, TableProps} from "../Table.types";
import type {ColumnDef, RowSelectionState, SortingState} from "@tanstack/react-table";

import {createColumnHelper} from "@tanstack/react-table";
import {CHECKBOX_COLUMN_ID, COLUMN_TYPES} from "../Table.constants";
import {TableCheckboxCell} from "../elements";
import {SORT_ORDERS} from "../../../constants/global.constants";

export const getInitialRowSelection = (selectedRowKeys: TableProps['selectedRowKeys']): RowSelectionState => {
  return Object.fromEntries(selectedRowKeys?.map(key => [key, true]) ?? [])
}

export const getInitialSortingState = (columns: TableProps['columns']): SortingState => {
  return columns?.flatMap((column) => {
    if (column.isInitialSortColumn) {
      return [{
        id: column.key,
        desc: column.initialSortOrder === SORT_ORDERS.DESC
      }]
    }

    return []
  }) ?? []
}

export const formatColumns = ({
  columns,
  areRowsSelectable
}: {
  columns: TableColumn[];
  areRowsSelectable: boolean;
}): ColumnDef<object, any>[] => {
  const columnHelper = createColumnHelper<object>()

  const tableColumns =  columns.map(column => {
    if (column.type === COLUMN_TYPES.DISPLAY_COLUMN) {
      return columnHelper.display({
        id: column.key,
        header: () => column.title,
        cell: column.CellComponent,
        meta: column,
      })
    }

    return columnHelper.accessor((row) => row[column.key as keyof typeof row], {
      id: column.key,
      header: () => column.title,
      cell: column.CellComponent ?? ((data) => data.getValue()),
      meta: column,
      enableSorting: Boolean(column.isSortable)
    })
  }) as ColumnDef<object, any>[];

  if (areRowsSelectable) {
    tableColumns.unshift(columnHelper.display({
      id: CHECKBOX_COLUMN_ID,
      cell: TableCheckboxCell,
      meta: {
        isCheckbox: true
      }
    }))
  }

  return tableColumns
}