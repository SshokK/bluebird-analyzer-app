import type {FC} from "react";
import type {TableBodyProps} from "./TableBody.types";

import React from 'react';

export const TableBody: FC<TableBodyProps> = ({ table }) => {
  return (
    <tbody {...table.getTableBodyProps()}>
      {table.rows.map(row => {
        table.prepareRow(row);

        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => (
              <td {...cell.getCellProps()}>
                {cell.render('Cell')}
              </td>
            ))}
          </tr>
        )
      })}
    </tbody>
  )
}