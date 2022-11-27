import type {FC} from "react";
import type {TableProps} from "./Table.types";

import React, {forwardRef} from "react";
import {Loader} from "../Loader";
import {TableBody, TableHeader} from "./elements";
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import {useTableData, useTableHandlers } from "./hooks";
import './table.scss';

export const Table: FC<TableProps> = forwardRef<HTMLDivElement | null, TableProps>(({
  isLoading,
  columns,
  rows,
  areRowsSelectable,
  onSelectedRowsChange,
  isFullWidth,
  noDataMessage,
  ...props
}, ref) => {
  const { localState, localActions, formattedData } = useTableData({ columns, rows, areRowsSelectable });

  const handlers = useTableHandlers({
    props: {
      onSelectedRowsChange
    },
    localState,
    localActions,
    formattedData
  });

  const table = useReactTable({
    columns: formattedData.columns,
    data: formattedData.rows,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: areRowsSelectable,
    onRowSelectionChange: handlers.handleRowSelectionChange,
    state: {
      rowSelection: localState.rowSelection
    }
  })

  return (
    <div ref={ref} className="BB-table__container" {...props}>
      <Loader isVisible={isLoading} shouldFitContainer />
      <table className="BB-table__table">
        <TableHeader table={table} />
        <TableBody table={table} noDataMessage={noDataMessage} />
      </table>
    </div>
  )
})

Table.defaultProps = {
  noDataMessage: 'No data'
}