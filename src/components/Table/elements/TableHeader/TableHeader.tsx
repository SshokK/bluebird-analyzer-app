import type {TableHeaderProps} from "./TableHeader.types";
import type {FC} from "react";

import React from "react";
import {Typography, TYPOGRAPHY_TYPES} from "../../../Typography";
import './table-header.scss';

export const TableHeader: FC<TableHeaderProps> = ({ table }) => {
  return (
    <thead className="BB-table-header">
      {table.headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(headerColumn => (
            <th {...headerColumn.getHeaderProps()} className="BB-table-header__cell">
              <Typography type={TYPOGRAPHY_TYPES.CAPTION}>
                {headerColumn.render('Header')}
              </Typography>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  )
}