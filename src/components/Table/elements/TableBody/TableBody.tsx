import type {FC} from "react";
import type {TableBodyProps} from "./TableBody.types";

import React from 'react';
import {TableCell} from "./elements";
import './table-body.scss';

export const TableBody: FC<TableBodyProps> = ({ table }) => {
  return (
    <tbody className="BB-table-body">
      {table.getRowModel().rows.map(row => (
        <tr key={row.id} className="BB-table-body__row">
          {row.getVisibleCells().map(cell => (
            <TableCell key={cell.id} cell={cell} />
          ))}
        </tr>
      ))}
    </tbody>
  )
}