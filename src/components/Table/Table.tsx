import type {FC} from "react";
import type {TableProps} from "./Table.types";

import React, {forwardRef} from "react";
import {TableActions, TableBody, TableHeader} from "./elements";
import {useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel} from '@tanstack/react-table';
import {useTableData, useTableHandlers, useTableQuery } from "./hooks";
import {TABLE_LIMIT} from "./Table.constants";
import './table.scss';

export const Table: FC<TableProps> = forwardRef<HTMLDivElement | null, TableProps>(({
  isLoading,
  columns,
  areRowsSelectable,
  rowId,
  onSelectedRowsChange,
  isFullWidth,
  noDataMessage,
  actions,
  queryOptions,
  queryParams,
  ...props
}, ref) => {
  const { localState, localActions, formattedData } = useTableData({ columns, areRowsSelectable });

  const handlers = useTableHandlers({
    props: {
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

    pageCount: Math.ceil(localState.totalCount / (TABLE_LIMIT ?? 0)),
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
      queryOptions,
      queryParams
    },
    localState,
    localActions,
    table
  });

  return (
    <div ref={ref} className="BB-table__container" {...props}>
      <TableActions
        table={table}
        actions={actions}
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