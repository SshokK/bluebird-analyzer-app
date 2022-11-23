import type {FC} from "react";
import type {TableProps} from "./Table.types";

import React from "react";
import {Loader} from "../Loader";
import {TableBody, TableHeader} from "./elements";
import { useTable } from 'react-table';
import {useTableData} from "./hooks";
import './table.scss';

export const Table: FC<TableProps> = ({ isLoading, columns, rows }) => {
  const { formattedData } = useTableData({ columns, rows });

  const table = useTable({
    columns: formattedData.columns,
    data: formattedData.rows
  })

  return (
    <div className="BB-table__container">
      <Loader isVisible={isLoading} shouldFitContainer />
      <table {...table.getTableProps()} className="BB-table__table">
        <TableHeader table={table} />
        <TableBody table={table} />
      </table>
    </div>
  )
}