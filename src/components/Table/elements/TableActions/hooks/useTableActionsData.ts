import type {TableActionsProps} from "../TableActions.types";

import {useMemo} from "react";
import {TABLE_LIMIT} from "../../../Table.constants";

export const useTableActionsData = ({ totalCount, table }: Pick<TableActionsProps, 'totalCount' | 'table'>) => {
  const currentPageIndex = table.getState().pagination.pageIndex;
  const nextPageIndex = 1 + table.getState().pagination.pageIndex;
  const selectedRowsCount = Object.keys(table.getState().rowSelection).length;

  const formattedData = useMemo(() => {
    const intervalStart = 1 + currentPageIndex * TABLE_LIMIT;
    const intervalEnd = nextPageIndex * TABLE_LIMIT > (totalCount ?? 0)
      ? totalCount
      : nextPageIndex * TABLE_LIMIT;

    return {
      intervalStart,
      intervalEnd,
      selectedRowsCount
    }
  }, [currentPageIndex, nextPageIndex, selectedRowsCount, totalCount]);

  return {
    formattedData
  }
}