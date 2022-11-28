import type {FC} from "react";
import type {TableBodyProps} from "./TableBody.types";

import React from 'react';
import {TableCell, TableLoader, TableNoDataMessage} from "./elements";
import './table-body.scss';

export const TableBody: FC<TableBodyProps> = ({ table, noDataMessage, isLoading }) => {
  return (
    <tbody className="BB-table-body">
      <TableLoader isLoading={isLoading} />
      {!table.getRowModel().rows.length ? (
        <TableNoDataMessage table={table}>
          {isLoading ? "" : noDataMessage}
        </TableNoDataMessage>
      ) : table.getRowModel().rows.map(row => (
        <tr key={row.id} className="BB-table-body__row">
          {row.getVisibleCells().map(cell => (
            <TableCell key={cell.id} cell={cell} />
          ))}
        </tr>
      ))}
    </tbody>
  )
}