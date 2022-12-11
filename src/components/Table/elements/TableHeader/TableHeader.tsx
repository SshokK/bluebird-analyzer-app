import type {TableHeaderProps} from "./TableHeader.types";
import type {FC} from "react";

import React from "react";
import { TableHeaderCell} from "./elements";
import './table-header.scss';

export const TableHeader: FC<TableHeaderProps> = ({ table }) => {
  return (
    <thead className="BB-table-header">
      {table.getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id} className="BB-table-header__row">
          {headerGroup.headers.map(header => (
            <TableHeaderCell key={header.id} header={header} />
          ))}
        </tr>
      ))}
      <tr>
        <th className="BB-table-header__spacer"/>
      </tr>
    </thead>
  )
}