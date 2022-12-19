import type {FC} from "react";
import type {TableBodyProps} from "./TableBody.types";

import React from 'react';
import {ROW_ANIMATION_DELAY} from "./TableBody.constants";
import {TableCell, TableLoader, TableNoDataMessage} from "./elements";
import {Animation, ANIMATION_TYPES} from "../../../Animation";
import './table-body.scss';

export const TableBody: FC<TableBodyProps> = ({ table, noDataMessage, isLoading }) => {
  return (
    <tbody className="BB-table-body">
      <TableLoader table={table} isLoading={isLoading} />
      {!table.getRowModel().rows.length ? (
        <TableNoDataMessage table={table}>
          {isLoading ? "" : noDataMessage}
        </TableNoDataMessage>
      ) : table.getRowModel().rows.map((row, i) => (
        <Animation key={row.id} type={ANIMATION_TYPES.FADE} shouldAppear animationDelay={ROW_ANIMATION_DELAY * i}>
          <tr className="BB-table-body__row">
            {row.getVisibleCells().map(cell => (
              <TableCell key={cell.id} cell={cell} />
            ))}
          </tr>
        </Animation>
      ))}
    </tbody>
  )
}