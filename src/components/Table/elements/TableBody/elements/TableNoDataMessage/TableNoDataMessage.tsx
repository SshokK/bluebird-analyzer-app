import type {TableNoDataMessageProps} from "./TableNoDataMessage.types";
import type {FC} from "react";

import React from "react";
import {Typography, TYPOGRAPHY_TYPES} from "../../../../../Typography";
import './table-no-data-message.scss';

export const TableNoDataMessage: FC<TableNoDataMessageProps> = ({ table, children }) => {
  return (
    <tr>
      <td colSpan={table.getAllColumns().length}>
        <div className="BB-table-no-data-message">
          <Typography type={TYPOGRAPHY_TYPES.CAPTION}>
            {children}
          </Typography>
        </div>
      </td>
    </tr>
  )
}