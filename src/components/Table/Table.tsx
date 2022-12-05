import type {FC} from "react";
import type {TableProps} from "./Table.types";

import React, {forwardRef} from "react";
import {TableActions, TableBody, TableHeader} from "./elements";
import {DEFAULT_TABLE_LIMIT} from "./Table.constants";
import {useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel} from '@tanstack/react-table';
import {useTableData, useTableHandlers, useTableLifecycle, useTableQuery} from "./hooks";
import './table.scss';

export const Table: FC<TableProps> = forwardRef<HTMLDivElement | null, TableProps>(({
  isLoading,
  columns,
  areRowsSelectable,
  rowId,
  limit = DEFAULT_TABLE_LIMIT,
  selectedRowKeys,
  onSelectedRowsChange,
  isFullWidth,
  noDataMessage,
  actions,
  queryOptions,
  queryParams,
  ...props
}, ref) => {
  const { localState, localActions, formattedData } = useTableData({ columns, areRowsSelectable, selectedRowKeys });

  const handlers = useTableHandlers({
    props: {
      selectedRowKeys,
      onSelectedRowsChange
    },
    localState,
    localActions
  });

  const table = useReactTable({
    columns: formattedData.columns,
    data: localState.rows,

    manualSorting: true,
    manualPagination: true,

    pageCount: Math.ceil(localState.totalCount / limit),
    enableRowSelection: areRowsSelectable,

    onPaginationChange: localActions.setPagination,
    onSortingChange: localActions.setSorting,
    onRowSelectionChange: handlers.handleRowSelectionChange,

    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getRowId: (row) => row[rowId as keyof typeof row],

    state: {
      sorting: localState.sorting,
      pagination: localState.pagination,
      rowSelection: localState.rowSelection
    }
  });

  const query = useTableQuery({
    props: {
      limit,
      queryOptions,
      queryParams
    },
    localState,
    localActions
  });

  useTableLifecycle({
    onSelectedRowKeysPropChange: handlers.handleSelectedRowKeysPropChange
  })

  return (
    <div ref={ref} className="BB-table__container" {...props}>
      <TableActions
        table={table}
        actions={actions}
        limit={limit}
        totalCount={query.data?.totalCount}
      />
      <table className="BB-table__table">
        <TableHeader table={table} />
        <TableBody
          table={table}
          noDataMessage={noDataMessage}
          isLoading={isLoading || query.isLoading}
        />
      </table>
    </div>
  )
})

Table.defaultProps = {
  rowId: 'id',
  noDataMessage: 'No data'
}