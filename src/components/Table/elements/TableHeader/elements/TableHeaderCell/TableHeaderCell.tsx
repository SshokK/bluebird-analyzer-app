import type {FC} from "react";
import type {TableColumnMeta} from "../../../../Table.types";
import type {TableHeaderCellProps} from "./TableHeaderCell.types";

import React from 'react';
import classnames from "classnames";
import {Typography, TYPOGRAPHY_TYPES} from "../../../../../Typography";
import {flexRender} from "@tanstack/react-table";
import {SortButton} from "../SortButton";
import './table-header.scss';

export const TableHeaderCell: FC<TableHeaderCellProps> = ({ header }) => {
  const column = header.column.columnDef.meta as TableColumnMeta;

  return (
    <th key={header.id} className={classnames("BB-table-header-cell", {
      [`BB-table-header-cell--is-checkbox`]: Boolean(column.isCheckbox),
      [`BB-table-header-cell--is-${column.width}`]: Boolean(column.width)
    })}>
      <div className={classnames("BB-table-header-cell__cell-content", {
        "BB-table-header-cell__cell-content--is-checkbox": Boolean(column.isCheckbox)
      })}>
        {!column.isCheckbox && (
          <Typography type={TYPOGRAPHY_TYPES.OVERLINE} shouldTruncate>
            {header.isPlaceholder
              ? null
              : flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
          </Typography>
        )}
        <SortButton
          column={header.column}
          onClick={header.column.getToggleSortingHandler()}
        />
      </div>
    </th>
  )
}