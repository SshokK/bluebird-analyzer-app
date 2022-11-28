import type {TableHeaderProps} from "./TableHeader.types";
import type {FC} from "react";

import React from "react";
import {Typography, TYPOGRAPHY_TYPES} from "../../../Typography";
import {flexRender} from "@tanstack/react-table";
import './table-header.scss';
import {SortButton} from "./elements";

export const TableHeader: FC<TableHeaderProps> = ({ table }) => {
  return (
    <thead className="BB-table-header">
      {table.getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id} className="BB-table-header__row">
          {headerGroup.headers.map(header => (
            <th key={header.id} className="BB-table-header__cell">
              <div className="BB-table-header__cell-content">
                <Typography type={TYPOGRAPHY_TYPES.OVERLINE}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Typography>
                <SortButton
                  column={header.column}
                  onClick={header.column.getToggleSortingHandler()}
                />
              </div>
            </th>
          ))}
        </tr>
      ))}
      <tr>
        <th className="BB-table-header__spacer"/>
      </tr>
    </thead>
  )
}