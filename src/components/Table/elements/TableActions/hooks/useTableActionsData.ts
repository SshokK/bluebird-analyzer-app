import type {TableActionsProps} from "../TableActions.types";

import {useMemo} from "react";
import {TABLE_LIMIT} from "../../../Table.constants";

export const useTableActionsData = ({ totalCount, table }: Pick<TableActionsProps, 'totalCount' | 'table'>) => {
  const formattedData = useMemo(() => {
    const currentPageIndex = table.getState().pagination.pageIndex;
    const nextPageIndex = 1 + table.getState().pagination.pageIndex;

    const intervalStart = 1 + currentPageIndex * TABLE_LIMIT;
    const intervalEnd = nextPageIndex * TABLE_LIMIT > (totalCount ?? 0)
      ? totalCount
      : nextPageIndex * TABLE_LIMIT;

    return {
      intervalStart,
      intervalEnd
    }
  }, [table, totalCount]);

  return {
    formattedData
  }
}