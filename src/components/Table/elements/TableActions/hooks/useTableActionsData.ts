import type {TableActionsProps} from "../TableActions.types";

import {useMemo} from "react";
import {DEFAULT_TABLE_LIMIT} from "../../../Table.constants";

export const useTableActionsData = (props: Pick<TableActionsProps, 'totalCount' | 'table' | 'limit'>) => {
  const currentPageIndex = props.table.getState().pagination.pageIndex;
  const nextPageIndex = 1 + props.table.getState().pagination.pageIndex;
  const selectedRowsCount = Object.keys(props.table.getState().rowSelection).length;

  const formattedData = useMemo(() => {
    const limit = props.limit ?? DEFAULT_TABLE_LIMIT

    const intervalStart = 1 + currentPageIndex * limit ?? DEFAULT_TABLE_LIMIT;
    const intervalEnd = nextPageIndex * limit > (props.totalCount ?? 0)
      ? props.totalCount
      : nextPageIndex * limit;

    return {
      intervalStart,
      intervalEnd,
      selectedRowsCount
    }
  }, [props.limit, props.totalCount, currentPageIndex, nextPageIndex, selectedRowsCount]);

  return {
    formattedData
  }
}