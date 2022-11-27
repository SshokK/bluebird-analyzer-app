import type {FC} from "react";
import type {TableBodyProps} from "./TableBody.types";

import React from 'react';
import {TableCell, TableNoDataMessage} from "./elements";
import './table-body.scss';

export const TableBody: FC<TableBodyProps> = ({ table, noDataMessage }) => {
  return (
    <tbody className="BB-table-body">
      {!table.getRowModel().rows.length ? (
        <TableNoDataMessage table={table}>
          {noDataMessage}
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