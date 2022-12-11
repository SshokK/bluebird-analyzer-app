import type {TableColumnMeta} from "../../../../Table.types";
import type {TableCellProps} from "./TableCell.types";
import type {FC} from "react";

import React from "react";
import {flexRender} from "@tanstack/react-table";
import classnames from 'classnames';
import {TableCellContent} from "./elements";
import './table-cell.scss';

export const TableCell: FC<TableCellProps> = ({ cell }) => {
  const column = (cell.column.columnDef.meta as TableColumnMeta);

  return (
    <td
      key={cell.id}
      className={classnames("BB-table-cell", {
        [`BB-table-cell--is-checkbox`]: Boolean(column?.isCheckbox),
        [`BB-table-cell--is-${column.width}`]: Boolean(column?.width)
      })}
    >
      <div className={classnames("BB-table-cell__cell-stretcher", {
        [`BB-table-cell__cell-stretcher--is-checkbox`]: Boolean(column?.isCheckbox),
        [`BB-table-cell__cell-stretcher--is-${column.width}`]: Boolean(column?.width)
      })}>
        <TableCellContent
          column={column}
          cellValue={cell.getValue()}
          cellContent={flexRender(cell.column.columnDef.cell, cell.getContext())}
        />
      </div>
    </td>
  )
}