import type {FC} from "react";
import type {TableProps} from "./Table.types";

import React from "react";
import {Loader} from "../Loader";
import {TableBody, TableHeader} from "./elements";
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import {useTableData, useTableHandlers } from "./hooks";
import './table.scss';

export const Table: FC<TableProps> = ({ isLoading, columns, rows, areRowsSelectable, onSelectedRowsChange }) => {
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
    <div className="BB-table__container">
      <Loader isVisible={isLoading} shouldFitContainer />
      <table className="BB-table__table">
        <TableHeader table={table} />
        <TableBody table={table} />
      </table>
    </div>
  )
}