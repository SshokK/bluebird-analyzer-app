import type {FC} from "react";
import type {TableLoaderProps} from "./TableLoader.types";
import type {TableColumnMeta} from "../../../../Table.types";

import React from 'react';
import {Loader} from "../../../../../Loader";
import classnames from "classnames";
import './table-loader.scss';

export const TableLoader: FC<TableLoaderProps> = ({
  table,
  isLoading
}) => {
  return (
    <tr>
      {!table.getAllColumns().length && (
        <td>
          <Loader isVisible={isLoading} shouldFitContainer />
        </td>
      )}
      {table.getAllColumns().map((tableColumn, i) => {
        const column = (tableColumn.columnDef.meta as TableColumnMeta);

        return (
          <td
            key={tableColumn.id}
            className={classnames({
              [`BB-table-loader-cell--is-${column.width}`]: Boolean(column.width)
            })}
          >
            {i === 0 && (<Loader isVisible={isLoading} shouldFitContainer />)}
          </td>
        )
      })}
    </tr>
  )
}