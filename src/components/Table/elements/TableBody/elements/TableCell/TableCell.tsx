import type {TableColumn} from "../../../../Table.types";
import type {TableCellProps} from "./TableCell.types";
import type {FC} from "react";

import React from "react";
import {flexRender} from "@tanstack/react-table";
import {TableCellContent} from "./elements";
import './table-cell.scss';

export const TableCell: FC<TableCellProps> = ({ cell }) => {
  return (
    <td key={cell.id} className="BB-table-cell">
      <TableCellContent
        column={cell.column.columnDef.meta as TableColumn}
        cellValue={cell.getValue()}
        cellContent={flexRender(cell.column.columnDef.cell, cell.getContext())}
      />
    </td>
  )
}