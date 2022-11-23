import type {TableProps} from "../Table.types";
import type {TableData} from "./useTableData.types";

import {useMemo} from "react";
import {formatColumns} from "./useTableData.helpers";

export const useTableData = (props: Pick<TableProps, 'columns' | 'rows'>): TableData => {
  const columns = useMemo(() => formatColumns(props.columns ?? []), [props.columns]);
  const rows = useMemo(() => props.rows ?? [], [props.rows]);

  return {
    formattedData: {
      columns,
      rows
    }
  }
}