import type {TableHeaderProps} from "./TableHeader.types";
import type {FC} from "react";

import React from "react";
import {Typography, TYPOGRAPHY_TYPES} from "../../../Typography";
import {flexRender} from "@tanstack/react-table";
import './table-header.scss';

export const TableHeader: FC<TableHeaderProps> = ({ table }) => {
  return (
    <thead className="BB-table-header">
      {table.getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(headerColumn => (
            <th key={headerColumn.id} className="BB-table-header__cell">
              <Typography type={TYPOGRAPHY_TYPES.OVERLINE}>
                {headerColumn.isPlaceholder
                  ? null
                  : flexRender(
                      headerColumn.column.columnDef.header,
                      headerColumn.getContext()
                    )}
              </Typography>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  )
}